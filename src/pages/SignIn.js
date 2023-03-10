import React, { useState } from "react";
import "./Login.css";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
  } from "mdb-react-ui-kit";
import logobot from "../img/logobot.jpg";



function SignIn() {

    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordbot, setPasswordbot] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
      };

  return (
    <MDBContainer fluid>
    <MDBRow className="d-flex justify-content-center align-items-center h-100">
      <MDBCol col="12" style={{ marginTop: "10%" }}>
        <MDBCard
          className="bgcard text-white my-5 mx-auto"
          style={{ borderRadius: "1rem", maxWidth: "600px" }}
        >
          <MDBCardBody className=" p-1 d-flex flex-column align-items-center mx-auto w-100">
            <img
              className=" mt-5 mb-3"
              src={logobot}
              style={{ width: "200px" }}
              alt=""
            />
            <form
              onSubmit={handleSubmit}
              className="p-1 d-flex flex-column align-items-center mx-auto w-100"
            >
              <input
                className="form__field"
                wrapperClass="mb-4 mx-5 w-75"
                labelClass="text-white"
                placeholder="Mail de Urban Six"
                id="formControlLg"
                type="email"
                size="lg"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />

              <input
                className="form__field"
                wrapperClass="mb-4 mx-5 w-75"
                labelClass="text-white"
                placeholder="Contraseña de Urban Six"
                id="formControlLg"
                type="password"
                size="lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

<input
                className="form__field"
                wrapperClass="mb-4 mx-5 w-75"
                labelClass="text-white"
                placeholder="Contraseña del bot"
                id="formControlLg"
                type="password"
                size="lg"
                value={passwordbot}
                onChange={(e) => setPasswordbot(e.target.value)}
              />
              
              <button
                outline
                className="button mx-2 px-5"
                color="white"
                size="lg"
                type="submit"
              >
                Crear cuenta
              </button>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>

  );
}

export default SignIn;
