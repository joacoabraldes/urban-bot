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
const userRef = collection(db, "users", );

function SignIn() {
  const fetchId = async (mail, password) => {
    var myHeaders = new Headers();
    myHeaders.append(
      "path",
      "/Application/ec1d38d7-d359-48d0-a60c-d8c0b8fb9df9/Login?_c=es-ES"
    );
    myHeaders.append("content-type", "application/json");
    myHeaders.append("authority", "services.mywellness.com");
    myHeaders.append(
      "Cookie",
      "_mwappseu=ec1d38d7-d359-48d0-a60c-d8c0b8fb9df9|MjAyMzAzMTAxNDM1MDZ8NmRmNDJiNzM0NWIzNDA1Yjg5NWU0YjY2YzRlMGY3Y2J8ZWMxZDM4ZDdkMzU5NDhkMGE2MGNkOGMwYjhmYjlkZjl8NnxBcmdlbnRpbmEgU3RhbmRhcmQgVGltZXxlcy1FU3wxODU4YjY0ZDQwYmQ0N2VlODAyNTU0N2U2ODgzM2ZjYnx8fHwxfDF8MHwxMDB8fHw1OHwyMzg5fDB8Y29tLm15d2VsbG5lc3M1.0D3A2DD49E5E5CBE2F2DC9240F10DA45495C6FC28B4E5E3F714B96A8FEC89A863387B81F4B2EAA120544D8AEC283AA65EB30E8148586171A32D06E639B9F1700; _mwappseu=ec1d38d7-d359-48d0-a60c-d8c0b8fb9df9|MjAyMzAzMTAxOTEzNDh8ZmFhMDQyOTdlMDQxNDczZmE5ZWViODI5M2I5M2Y5YmV8ZWMxZDM4ZDdkMzU5NDhkMGE2MGNkOGMwYjhmYjlkZjl8NnxBcmdlbnRpbmEgU3RhbmRhcmQgVGltZXxlcy1FU3w5ZGQ2YjQwZTM3OWE0MjYwYTBlNTAwNGM1OTdhMTNhMHx8fHwxfDF8MHwxMDB8fHw1OHwzMzU0fDB8Y29tLm15d2VsbG5lc3M1.0A670B13F8A204047B92C40F8AED30E5A7377E514DDA38916D38A1D933CF6139D1DD658AE410D4DDE18252F433AC9909DFF26E5C503EFBFF68AF0777B91C6742"
    );
    myHeaders.append("x-mwapps-client", "mywellnessappios40");
    myHeaders.append(
      "Authorization",
      "Bearer MjAyMzAzMTAxNDM2MDB8NmRmNDJiNzM0NWIzNDA1Yjg5NWU0YjY2YzRlMGY3Y2J8ZWMxZDM4ZDdkMzU5NDhkMGE2MGNkOGMwYjhmYjlkZjl8NnxBcmdlbnRpbmEgU3RhbmRhcmQgVGltZXxlcy1FU3wxODU4YjY0ZDQwYmQ0N2VlODAyNTU0N2U2ODgzM2ZjYnx8fHwxfDF8MHwxMDB8fHw1OHw3ODE0fDB8Y29tLm15d2VsbG5lc3M1.02D84E07DBCAAFDB3E1394801EFD0D60C1F3EC00C75D9791D1AC798B7E87884307958104CEB2638045B6ADBBEAF0CC0A62B2FBBEF3FF4DD162C8576078016B13"
    );

    var raw = JSON.stringify({
      password: mail,
      username: password,
      keepMeLoggedIn: true,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "/api/https://services.mywellness.com/Application/ec1d38d7-d359-48d0-a60c-d8c0b8fb9df9/Login?_c=es-ES",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        return result;
      })
      .catch((error) => console.log("error", error));
  };

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordbot, setPasswordbot] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        mail,
        passwordbot
      );
      setError(false);
    } catch (error) {
      console.error(error);
      setError(true);
    }

    const id = fetchId(mail, password);

    const newUser = {
        email: mail,
        id: id,
        Mon: [],
        Tue: [],
        Wed: [],
        Thu: [],
        Fri: [],
        Sat: [],
      };
      
      await setDoc(doc(userRef, mail), newUser);
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

                {error && (
                  <p className="text-danger mt-3">
                    Error al crear la cuenta. Por favor, inténtalo de nuevo más
                    tarde.
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
