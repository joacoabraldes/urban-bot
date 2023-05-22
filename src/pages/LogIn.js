import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import logobot from "../img/logobot.jpg";
import { collection, where } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, query, getDocs, doc } from "firebase/firestore";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'


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
function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        username,
        password
      );
      setError(false);
      setUser(userCredential.user);
      const userObj = { email: userCredential.user.email };
      navigate("/home", { state: { user: userObj } });
    } catch (error) {
      setError(true);
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  };

  const SignIn = () => {
    navigate("/SignIn");
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
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
                <div className="pepitos">
                <div className="input-group mb-4 mx-5 w-75">
                <input
                  className="form__field uwu1"
                  wrapperClass="mb-4 mx-5 w-75"
                  labelClass="text-white"
                  placeholder="Usuarios"
                  id="formControlLg"
                  type="email"
                  size="lg"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                </div>
                <div className="input-group mb-4 mx-5 w-75">
                  <input
                    className="form__field uwu2"
                    wrapperClass="mb-4 mx-5 w-75"
                    labelClass="text-white"
                    placeholder="Contraseña"
                    id="formControlLg"
                    type={showPassword ? "text" : "password"}
                    size="lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    className="input-group-text passIcon"
                    type="button"
                    onClick={handleShowPassword}
                  >
                    {showPassword ? (
                      <FontAwesomeIcon icon={faEye} />
                    ) : (
                      <FontAwesomeIcon icon={faEyeSlash} />
                    )}
                  </button>
                </div>
                </div>
                {error && (
                  <p className="error">
                    *El nombre de usuario o la contraseña no son correctos
                  </p>
                )}
                <button
                  outline
                  className="button mx-2 px-5 mt-2"
                  color="white"
                  size="lg"
                  type="submit"
                >
                  Entrar
                </button>
              </form>

              <div className="mb-5 mt-2">
                <p className="mb-0">
                  ¿No tenes cuenta? &nbsp;
                  <a className="text-white-50" onClick={SignIn} style={{cursor: "pointer"}}>
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
