import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import WanderWizLogo from '../assets/WanderWizLogo.svg';  

export function MyNavbar() {
  const customFontStyle = {
    fontFamily: "Montserrat, sans-serif", // Replace 'YourCustomFont' with the actual font name
    fontSize: '18px', // Adjust the font size as needed
    // Add any other font styles you want
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#a2d0ed'}}>
        <Container>
          <img src={WanderWizLogo} alt="WanderWiz Logo" width="65" height="65" className="mx-3 d-inline-block align-top" />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto">
                <Nav.Link href="#home" style={customFontStyle}>Home</Nav.Link>
                <Nav.Link href="#generateItinerary" style={customFontStyle}>Generate Itinerary</Nav.Link>
                <Nav.Link href="#profile" style={customFontStyle}>Profile</Nav.Link>
            </Nav>
            <Nav>
              <ButtonGroup className='me-1' aria-label="Log in button">
                <Button variant="outline-primary" style={customFontStyle}>Log in</Button>{' '}
                </ButtonGroup>
              <ButtonGroup aria-label="Sign up button">
                <Button variant="outline-success" style={customFontStyle}>Sign up</Button>{' '}
              </ButtonGroup>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
