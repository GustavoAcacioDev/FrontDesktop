import React from 'react';
import {Navbar } from 'react-bootstrap';
import './index.css';

const Menu = () => {
    return(
       
         <div>
           
       <Navbar bg="light" expand="lg" >
        <Navbar.Brand href="#home">EduX</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
         
      </Navbar>
      </div>
      
    )
}

export default Menu;