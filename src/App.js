import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LogIn from './pages/LogIn';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </Router>

  );
}

export default App;
