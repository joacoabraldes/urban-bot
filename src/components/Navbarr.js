import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbarr.css";
import logo from '../img/logobot.jpg';
import Image from 'react-bootstrap/Image';

const Navbarr = () => {
  return (

<Navbar bg="black" className='expand'>
<div className='navbar navbar-nav '>
<Navbar.Brand><Image className='logo navbar-nav ' src={logo} /> </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end ms-auto">
    <Navbar.Text className='navbartext ml-5'>
      Signed in as: <Navbar.Text className='navbartxt' href="#login"> Mark Otto</Navbar.Text>
    </Navbar.Text>
  </Navbar.Collapse>
</div>
</Navbar>
  )
}

export default Navbarr