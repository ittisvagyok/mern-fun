import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

class DefaultNavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ExpensApp</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#features">Expenses</Nav.Link>
            <Nav.Link href="#pricing">Categories</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
  }
}

export default DefaultNavBar;