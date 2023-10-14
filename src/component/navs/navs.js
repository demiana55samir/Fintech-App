import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo1 from './favicon-32x32.png'
import NavDropdown from "react-bootstrap/NavDropdown";
import "./navs.css";

function NavOut() {
  return (
    <Navbar expand="lg" fixed="top" >
      <Container>
         <img src={Logo1} alt="logo" id="logo"
          style={{width:'40px',height:'40px', marginRight:'0px',marginLeft:'0'}}></img>
        <Navbar.Brand id="brand" href="/" style={{marginLeft:"10px"}}>
          OL_PRO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Signup0">Sign up</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavOut;
