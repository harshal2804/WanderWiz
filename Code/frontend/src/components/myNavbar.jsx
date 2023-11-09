import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import WanderWizLogo from "../assets/WanderWizLogo.svg";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { BsFillPersonFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export default function MyNavbar() {
  const customFontStyle = {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "18px", 
  };

  const user = useContext(UserContext);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#a2d0ed" }}
      >
        <Container>
          <Navbar.Brand to="/" as={NavLink}>
            <img
              src={WanderWizLogo}
              alt="WanderWiz Logo"
              width="65"
              height="65"
              className="mx-3 d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto">
              <Nav.Link to="/createItinerary" as={NavLink} style={customFontStyle}>
                Generate Itinerary
              </Nav.Link>
              <Nav.Link to="/itineraries" as={NavLink} style={customFontStyle}>
                Itineraries
              </Nav.Link>
              <Nav.Link to="/aboutus" as={NavLink} style={customFontStyle}>
                About Us
              </Nav.Link>
            </Nav>
            {!user.user ? <Nav>
              <ButtonGroup className="me-1" aria-label="Log in button">
                <Button to="/login" as={NavLink} variant="outline-primary" style={customFontStyle}>
                  Log in
                </Button>{" "}
              </ButtonGroup>
              <ButtonGroup aria-label="Sign up button">
                <Button to="/signup" as={NavLink} variant="outline-success" style={customFontStyle}>
                  Sign up
                </Button>{" "}
              </ButtonGroup>
            </Nav> 
            :
            <Nav>
              <Nav.Link to="/profile" as={NavLink} style={customFontStyle}>
                <BsFillPersonFill size={25} />
              </Nav.Link>
            </Nav>

            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
