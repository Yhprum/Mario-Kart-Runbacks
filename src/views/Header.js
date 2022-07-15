import { Navbar, Nav, NavDropdown, Container, FormControl } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import tracks from "../data/maps.json";

function Header({ season, setSeason }) {
  let navigate = useNavigate();
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Runbacks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Stats</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/graphs">
              <Nav.Link>Graphs</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/runbacks">
              <Nav.Link>Runback List</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/tracks">
              <Nav.Link>Tracks</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/players">
              <Nav.Link>Teams</Nav.Link>
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
            <NavDropdown title="Track List" id="basic-nav-dropdown">
              {Object.values(tracks).flat().map(track =>
                <NavDropdown.Item key={track} onClick={() => navigate("/tracks/" + track)}>{track}</NavDropdown.Item>
              )}
            </NavDropdown>
            <NavDropdown title="Tier Lists" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => navigate("/tier-list/tracks")}>Tracks</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Navbar.Text>
              Filter:
            </Navbar.Text>
            <FormControl as="select"  value={season} onChange={e => setSeason(e.target.value)}>
              <option value={0}>All Seasons</option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(season => <option key={season} value={season}>Season {season}</option>)}
            </FormControl>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;