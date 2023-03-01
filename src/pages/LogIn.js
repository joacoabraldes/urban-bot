import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
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
import logo from "../img/urbansixfitness.png";
import fotolean from "../img/profeleanaaa.png";
import logobot from "../img/logobot.jpg";

function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "pass") {
      navigate("/home");
    } else {
      console.log("Invalid credentials!");
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
       
    
        <MDBCol col="12" style={{marginTop: "10%"}}>
         
          <MDBCard
            className="bgcard text-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "600px"}}
          >  
            <MDBCardBody className=" p-1 d-flex flex-column align-items-center mx-auto w-100">
              <img className=" mt-5 mb-3" src={logobot}  style={{width: "200px"}} />
            <form onSubmit={handleSubmit} className="p-1 d-flex flex-column align-items-center mx-auto w-100">
              <input
                 className="form__field"
                  wrapperClass="mb-4 mx-5 w-75"
                  labelClass="text-white"
                  placeholder="Usuario"
                  id="formControlLg"
                  type="text"
                  size="lg"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />

                <input
                 className="form__field"
                  wrapperClass="mb-4 mx-5 w-75"
                  labelClass="text-white"
                  placeholder="Contraseña"
                  id="formControlLg"
                  type="password"
                  size="lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <p className="small mb-3 pb-lg-2">
                  <a class="text-white-50" href="#!">
                  Olvide mi contraseña
                  </a>
                </p>
                <button outline className="button mx-2 px-5" color="white" size="lg">
                  Entrar
                </button>

                </form>

              <div className="mb-5 mt-3">
                <p className="mb-0">
                ¿No tenes cuenta? 	&nbsp;
                  <a href="#!" class="text-white-50 fw-bold">
                     Crear cuenta
                  </a>
                </p>
              </div>
            </MDBCardBody>
      
          </MDBCard>
         
        </MDBCol>
      
      </MDBRow>
    </MDBContainer>
  );
}

export default LogIn;
