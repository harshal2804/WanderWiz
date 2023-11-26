import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import WanderWizLogo from "../assets/WanderWizLogo.svg";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { BsFillPersonFill } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";

export default function Mynavbar() {
  const customFontStyle = {
    color : "#05588A",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "2.5vh", 
  };

  const user = useContext(UserContext);
  const navigation = useNavigate();

  const handleProfile = (e) => {
    e.preventDefault();
    navigation("/profile");
  }

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#D4F1F4" }}
      >
        <Container>
          <Navbar.Brand to="/" as={NavLink}>
            <img
              src={WanderWizLogo}
              alt="WanderWiz Logo"
              width="85vh"
              height="85vw"
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
                <div className="d-flex flex-column align-items-center">
              <Nav.Link className="p-1" to="/profile" as={NavLink} style={customFontStyle}>
                <Button className="p-1 rounded-circle" variant="dark" onClick={(e) => handleProfile(e)}>
                  <BsFillPersonFill size={30} />
                </Button>
              </Nav.Link>
                <div className="text-center">Your Profile</div>
                </div>
            </Nav>

            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
