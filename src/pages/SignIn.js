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
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, where } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  query,
  getDocs,
  doc,
  updateDoc,
  setDoc,
} from "firebase/firestore";

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

function SignIn() {
  const [mail, setMail] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(0);
  const [creado, setCreado] = useState(0);

  function isValidGuid(input) {
    const guidPattern =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return guidPattern.test(input);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        mail,
        password
      );
      setError(0);
      setCreado(1);
      setId('')
        setMail('')
        setPassword('')
    } catch (error) {
      console.error(error);
      setError(1);
    }

    if (isValidGuid(id)) {
      setError(0);
      const newUser = {
        email: mail,
        id: id,
        Mon: [],
        Tue: [],
        Wed: [],
        Thu: [],
        Fri: [],
        Sat: [],
        remainingDays: 3,
      };

      await setDoc(doc(userRef, mail), newUser);
    } else {
      setError(2);
    }
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
                  placeholder="Mail"
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
                  placeholder="Id del Usuario"
                  id="formControlLg"
                  type="text"
                  size="lg"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
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

                <button
                  outline
                  className="button mx-2 px-5"
                  color="white"
                  size="lg"
                  type="submit"
                >
                  Crear cuenta
                </button>

                {error === 1 && (
                  <p className="text-danger mt-3">
                    Error al crear la cuenta. Por favor, inténtalo de nuevo más
                    tarde.
                  </p>
                )}
                {error === 2 && (
                  <p className="text-danger mt-3">El ID no es valido.</p>
                )}
                {creado === 1 && (
                  <p className="text-success mt-3">
                    Cuenta creada correctamente.
                  </p>
                )}
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default SignIn;
