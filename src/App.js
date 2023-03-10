import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn"
import "./App.css";

function App() {



  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </Router>
 
  );
}

export default App;
