import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import WanderWizLogo from '../assets/WanderWizLogo.svg';  

export function MyNavbar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#a2d0ed'}}>
        <Container>
          <img src={WanderWizLogo} alt="WanderWiz Logo" width="65" height="65" className="mx-3 d-inline-block align-top" />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto">
                <Nav.Link href="#home" >Home</Nav.Link>
                <Nav.Link href="#generateItinerary">Generate Itinerary</Nav.Link>
                <Nav.Link href="#profile">Profile</Nav.Link>
            </Nav>
            <Nav>
              <ButtonGroup className='me-1' aria-label="Log in button">
                <Button variant="outline-primary">Log in</Button>{' '}
                </ButtonGroup>
              <ButtonGroup aria-label="Sign up button">
                <Button variant="outline-success">Sign up</Button>{' '}
              </ButtonGroup>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
