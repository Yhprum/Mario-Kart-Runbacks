import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { withRouter } from "react-router-dom";
import tracks from "../data/maps.json";

function Header(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Runbacks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/players/Ben">
              <Nav.Link>Ben</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/players/Chris">
              <Nav.Link>Chris</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/players/Derek">
              <Nav.Link>Derek</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/players/Ryan">
              <Nav.Link>Ryan</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Tracks" id="basic-nav-dropdown">
              {Object.values(tracks).flat().map(track =>
                <NavDropdown.Item onClick={() => props.history.push("/tracks/" + track)}>{track}</NavDropdown.Item>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default withRouter(Header);