import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import Navbarr from "../components/Navbarr";
import { useState ,useEffect} from "react";
import ModalPicker from "../components/ModalPicker";
import "./Home.css";
import { useLocation } from "react-router-dom";
import { getFirestore, query, getDocs, doc ,updateDoc} from "firebase/firestore";
import { collection, where } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBADh0zs1OxNcoVsurGj-bwCfCUHsbTnyI",
  authDomain: "urbanbookingbot.firebaseapp.com",
  databaseURL: "https://urbanbookingbot-default-rtdb.firebaseio.com",
  projectId: "urbanbookingbot",
  storageBucket: "urbanbookingbot.appspot.com",
  messagingSenderId: "111234008963",
  appId: "1:111234008963:web:5971541a631ec16b1558b6",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const userRef = collection(db, "users");

const Home = (props) => {
  const [week, setWeek] = useState([
    {
      horarios: [],
    },
    {
      horarios: [],
    },
    {
      horarios: [],
    },
    {
      horarios: [],
    },
    {
      horarios: [],
    },
    {
      horarios: [],
    }
  ]);

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const date = new Date();
  const dayOfWeek = date.getDay();
  const [isModalVisible, setisModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dayOfWeek - 1);
  const [error, setError] = useState(false);
  const [selectedClass, setSelectedClass] = useState("FORCE 6");
  const [update,setUpdate] = useState(true)
  const location = useLocation();
  const user = location.state.user;
  const [userInfo,setUserInfo] = useState(undefined);
  const [remainingDays, serRemainingDays] = useState(undefined)
 
  const getUser  = async (u) => {
    const q = query(userRef, where("email", "==", u.email));
    const querySnapshot = await getDocs(q);
    
    var usuario = {};
    querySnapshot.forEach((doc) => {
      usuario = (doc.id, " => ", doc.data());
    });

    if (usuario.email === u.email) {
        setUserInfo(usuario);
        serRemainingDays(usuario.remainingDays)
        setWeek([
          {
            horarios: usuario.Mon,
          },
          {
            horarios: usuario.Tue,
          },
          {
            horarios: usuario.Wed,
          },
          {
            horarios: usuario.Thu,
          },
          {
            horarios: usuario.Fri,
          },
          {
            horarios: usuario.Sat,
          }
          ])
    } 
  }
  

  const changeModalVisibility = (bool) => {
    setisModalVisible(true);
  };

  const setData = (horario) => {
    if (
      week[selectedDate].horarios.length < 2 &&
      week[selectedDate].horarios.indexOf(horario) == -1
    ) {
      setError(false);
      week[selectedDate].horarios = [...week[selectedDate].horarios, horario];
    } else if (week[selectedDate].horarios.indexOf(horario) != -1) {
      setError(false);
      const index = week[selectedDate].horarios.indexOf(horario);
      week[selectedDate].horarios.splice(index, 1);
    } else {
      setError(true);
    }
  };

  const weekBtn = (i) => {
    changeModalVisibility(true);
    setSelectedDate(i);
  };

  const handleSelectDay = (event) => {
    setSelectedDate(event.target.value);
  };
  const handleSelectClass = (event) => {
    setSelectedClass(event.target.value);
  };
  const handleCopy = () => {
    for (let i = 0; i < week.length - 1; i++) {
      if (i != selectedDate) {
        week[i].horarios = [...week[selectedDate].horarios];
      }
    }
  };

  const handleDelete = () => {
    week[selectedDate].horarios = [];
    setUpdate(!update)
  };

  const handleSave = async () => {
    
    const theUserRef = doc(db, "users", userInfo.email);

    await updateDoc(theUserRef, {
      Mon: week[0].horarios,
      Tue: week[1].horarios,
      Wed: week[2].horarios,
      Thu: week[3].horarios,
      Fri: week[4].horarios,
      Sat: week[5].horarios,
    });
  };


  useEffect(() => {
    if(userInfo == undefined){
      getUser(user)
    }
  }, []);

  return (
    <>
      <Navbarr user={user} />

      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12" style={{ marginTop: "1%" }}>
            <MDBCard
              className="bgcard text-white my-5 mx-auto"
              style={{ borderRadius: "1rem", maxWidth: "600px" }}
            >
              <MDBCardBody className=" pt-2 p-1 d-flex flex-column align-items-right mx-auto w-100">
                <p className="pepe">
                  DIAS RESTANTES: {remainingDays}
                </p>
              </MDBCardBody>

              <div className="selects">
                <MDBCardBody className=" pt-2 p-1 d-flex flex-column align-items-right mx-auto w-100">
                  <div>
                    <select
                      name="select"
                      onChange={handleSelectClass}
                      value={selectedClass}
                    >
                      <option value="FORCE 6" selected>
                        Musculacion
                      </option>
                     
                    </select>
                  </div>
                </MDBCardBody>

                <MDBCardBody className=" pt-2 p-1 d-flex flex-column align-items-left mx-auto w-100">
                  <div>
                    <select
                      name="select"
                      onChange={handleSelectDay}
                      value={selectedDate}
                    >
                      <option value={0}>Lunes</option>
                      <option value={1}> Martes </option>
                      <option value={2}>Miercoles</option>
                      <option value={3}>Jueves</option>
                      <option value={4}>Viernes</option>
                      <option value={5}>Sabado</option>
                    </select>
                  </div>
                </MDBCardBody>
              </div>

              <p className="pepe">
                SELECCIONA QUE HORARIOS QUERES RESERVAR (MAX 2) POD DIA:
              </p>
              {error && <p className="error">*Sos pelotudo o no leiste</p>}
              <ModalPicker
                changeModalVisibility={changeModalVisibility}
                setData={setData}
                week={week}
                selectedDate={selectedDate}
              />
              <div className="selects">
                <MDBCardBody className=" ">
                  <a className="uwu" onClick={handleCopy}>
                    {" "}
                    Copiar para toda la semana
                  </a>
                </MDBCardBody>
                <MDBCardBody className=" ">
                  <a className="uwu" onClick={handleDelete}>
                    Borrar
                  </a>
                </MDBCardBody>
              </div>
              <MDBCardBody className=" pb-4 p-1 d-flex flex-column align-items-center mx-auto w-100">
                <button className="button" onClick={handleSave}>
                  Guardar Cambios
                </button>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Home;
