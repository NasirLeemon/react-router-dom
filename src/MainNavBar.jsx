import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

function MainNavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Foodiesm</Navbar.Brand>
        
          <Nav
            className="me-auto my-2 my-lg-0"
          >
            <NavLink to='/home' className='nav-link'>Home</NavLink>
            <NavLink to='/about' className='nav-link'>About</NavLink>
            <NavLink to='/contact' className='nav-link'>Contact</NavLink>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default MainNavBar;
