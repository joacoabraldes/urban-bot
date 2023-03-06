import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import Navbarr from "../components/Navbarr";
import { useState } from "react";
import ModalPicker from "../components/ModalPicker";
import "./Home.css"
import logobot from ".."

const Home = () => {
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
    },
  ]);

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const [isModalVisible, setisModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(0);
  const [error, setError] = useState(false);
  const [selectedClass, setSelectedClass] = useState("FORCE 6");

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
    }else{
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
    for (let i = 0; i < week.length -1; i++) {
      if (i != selectedDate) {
        week[i].horarios = [...week[selectedDate].horarios];
      }
    }
  };
  return (
    <>
      <Navbarr />

      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12" style={{ marginTop: "1%" }}>
            <MDBCard
              className="bgcard text-white my-5 mx-auto"
              style={{ borderRadius: "1rem", maxWidth: "600px" }}
            >




<div className="selects">
<MDBCardBody className=" pt-2 p-1 d-flex flex-column align-items-right mx-auto w-100">
                <div >
                  <select name="select" onChange={handleSelectClass} value={selectedClass}>
                    <option value="FORCE 6" selected>Musculacion</option>
                    <option value="CROSS 6">CrossFit</option>
                    <option value="HIIT 6">HIIT</option>
                    <option value="RIDE 6">Spinning</option>
                    <option value="RUMBLE 6">Rumble</option>
                  </select>
                </div>
              </MDBCardBody>

              <MDBCardBody className=" pt-2 p-1 d-flex flex-column align-items-left mx-auto w-100">
                <div>
                  <select name="select" onChange={handleSelectDay} value={selectedDate}>
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

              
              <p className="pepe">SELECCIONA QUE HORARIOS QUERES RESERVAR (MAX 2) POD DIA:</p>
              {error && (
                  <p className="error">*Sos pelotudo o no leiste</p>
                )
                }
              <ModalPicker
                changeModalVisibility= {changeModalVisibility}
                setData={setData}
                week={week}
                selectedDate={selectedDate}
              />

<MDBCardBody className=" p-1 d-flex flex-column align-items-start mx-auto w-100">
<a className="uwu" onClick={handleCopy}> Copiar para toda la semana</a>
              </MDBCardBody>
<MDBCardBody className=" pb-4 p-1 d-flex flex-column align-items-center mx-auto w-100">
<button className="button">Guardar Cambios</button>
              </MDBCardBody>


             
            </MDBCard>

            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Home;
