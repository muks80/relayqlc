import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsArrowLeftCircle } from "react-icons/bs";
import Logo from "../images/Logo.png";

const Navb = () => {
    return (
        <div className="navb">
            <Navbar expand="lg">
              <Container>
                  <Nav className="me-auto">
                    <Nav.Link href="#" className="nav-back-arrow"><BsArrowLeftCircle size={28}/></Nav.Link>
                    <h6 className="nav-header1">My Claims</h6>
                    <h6 className="nav-arrow"> {' > '} </h6>
                    <h6 className="nav-header2">June 2021 Claim</h6>
                  </Nav>
                  <Nav className="justify-content-end">
                    <img className="justify-content-end" src={Logo} alt="logo"/>
                  </Nav>
              </Container>
            </Navbar>
        </div>
    );
};

export default Navb;