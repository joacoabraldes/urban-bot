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

const Home = () => {
  return (
    <>
      <navbar></navbar>

      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12" style={{ marginTop: "1%" }}>
            <MDBCard
              className="bgcard text-white my-5 mx-auto"
              style={{ borderRadius: "1rem", maxWidth: "600px" }}
            >
              <MDBCardBody className=" p-1 d-flex flex-column align-items-center mx-auto w-100">
                <div className>
                  <select name="select">
                    <option value="FORCE 6"> Musculacion </option>
                    <option value="CROSS 6" selected>
                      CrossFit
                    </option>
                    <option value="HIIT 6">HIIT</option>
                    <option value="RIDE 6">Spinning</option>
                    <option value="RUMBLE 6">Rumble</option>
                  </select>
                </div>
              </MDBCardBody>

              <MDBCardBody className=" p-1 d-flex flex-column align-items-center mx-auto w-100">
                <div className>
                  <select name="select">
                    <option value="Lunes"> Lunes </option>
                    <option value="Martes" selected>
                     Martes
                    </option>
                    <option value="Miercoles">Miercoles</option>
                    <option value="Jueves">Jueves</option>
                    <option value="Viernes">Viernes</option>
                    <option value="Sabado">Sabado</option>
                  </select>
                </div>
              </MDBCardBody>

              <MDBCardBody className=" p-1 d-flex flex-column align-items-center mx-auto w-100">
                <div className>
                  <img src={profelean}></img>
                </div>
              </MDBCardBody>
            </MDBCard>
            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Home;
