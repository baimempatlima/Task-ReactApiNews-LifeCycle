import React, { Component } from "react";
import { Container, Navbar } from "react-bootstrap";

class NavbarComponents extends Component {
  render() {
    return (
      <Navbar className="navbarr" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">Baim News</Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}

export default NavbarComponents;
