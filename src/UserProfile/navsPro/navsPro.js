import React, { Component, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo1 from './favicon-32x32.png'
import NavDropdown from "react-bootstrap/NavDropdown";
import "./navs.css";
let x;
function NavPro() {

  return (
    <Navbar expand="lg" fixed="top" className="navMargin">
      <Container>
      <img src={Logo1} alt="logo" id="logo"
          style={{width:'40px',height:'40px', marginRight:'0px',marginLeft:'0'}}></img>
        <Navbar.Brand id="brand" href="/" style={{marginLeft:"10px"}}>
          OL_PRO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/userProfile">Home</Nav.Link>
            <NavDropdown title="Online Banking" id="basic-nav-dropdown">
            <div className="down">
              <NavDropdown.Item href="/Trans">Transactions</NavDropdown.Item>
              <NavDropdown.Item href="/Freeze">
                Freeze my account
              </NavDropdown.Item>
              <NavDropdown.Item href="/RequestVisa">
                Request New Visa
              </NavDropdown.Item>
              </div>
            </NavDropdown>

            <Nav.Link href="/">log out</Nav.Link>
            <Nav.Link href="/UserProfile"></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavPro;