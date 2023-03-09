import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./Navbarr.css";
import logo from "../img/logobot.jpg";
import Image from "react-bootstrap/Image";



const Navbarr = (props) => {

  const email = props.user.email.replace('@gmail.com', '')
  const username = email.charAt(0).toUpperCase() + email.slice(1)

  return (
    <Navbar bg="black" className="expand">
      <div className="navbar navbar-nav ">
        <Navbar.Brand>
          <Image className="logo navbar-nav " src={logo} />{" "}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end mr-5">
          <Navbar.Text className="navbartext">
            Signed in as: <Navbar.Text className="navbartxt" href="#login">{username}</Navbar.Text>
          </Navbar.Text>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Navbarr;
