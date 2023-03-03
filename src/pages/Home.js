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
import profelean from "../img/profeleanaaa.png";
import Navbarr from "../components/Navbarr";
import { useState } from "react";
import ModalPicker from "../components/ModalPicker";

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

  const changeModalVisibility = (bool) => {
    setisModalVisible(true);
  };

  const setData = (horario) => {
    if (
      week[selectedDate].horarios.length < 2 &&
      week[selectedDate].horarios.indexOf(horario) == -1
    ) {
      week[selectedDate].horarios = [...week[selectedDate].horarios, horario];
    } else if (week[selectedDate].horarios.indexOf(horario) != -1) {
      const index = week[selectedDate].horarios.indexOf(horario);
      week[selectedDate].horarios.splice(index, 1);
    }
  };

  const weekBtn = (i) => {
    changeModalVisibility(true);
    setSelectedDate(i);
  };

  const handleSelectDay = (event) => {
    console.log(event.target.value);
    setSelectedDate(event.target.value);
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
              <MDBCardBody className=" p-1 d-flex flex-column align-items-center mx-auto w-100">
                <div >
                  <select value={selectedDate} name="select">
                    <option value="FORCE 6" selected>
                      {" "}
                      Musculacion{" "}
                    </option>
                    <option value="CROSS 6">CrossFit</option>
                    <option value="HIIT 6">HIIT</option>
                    <option value="RIDE 6">Spinning</option>
                    <option value="RUMBLE 6">Rumble</option>
                  </select>
                </div>
              </MDBCardBody>

              <MDBCardBody className=" p-1 d-flex flex-column align-items-center mx-auto w-100">
                <div>
                  <select name="select" onChange={handleSelectDay}>
                    <option value={0}>
                      {" "}
                      Lunes{" "}
                    </option>
                    <option value={1}> Martes </option>
                    <option value={2}>Miercoles</option>
                    <option value={3}>Jueves</option>
                    <option value={4}>Viernes</option>
                    <option value={5}>Sabado</option>
                  </select>
                </div>
              </MDBCardBody>
              <ModalPicker
                changeModalVisibility= {changeModalVisibility}
                setData={setData}
                week={week}
                selectedDate={selectedDate}
              />
              <MDBCardBody className=" p-1 d-flex flex-column align-items-center mx-auto w-100">
                <div >
                  <img src={profelean}></img>
                </div>
              </MDBCardBody>
            </MDBCard>

            <button>HOLAAAAAAA</button>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Home;
