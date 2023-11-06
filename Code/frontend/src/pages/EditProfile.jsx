
import React, { Component } from 'react';
import { Button, ButtonGroup, ButtonToolbar, Col, Form, Row } from 'react-bootstrap';
import { FloatingLabel } from 'react-bootstrap';


class Edit_Profile extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selectedDate: '',
    };
  }

  handleDateChange = (event) => {
    this.setState({ selectedDate: event.target.value });
  };


  render() {
    const dateInputStyle = {
    
    borderRadius: '5px',
      width: '100%',  
      padding: '10px',  
      fontSize: '16px', 
    } 
    const smallProfilePhotoStyle = {
      width: '250px', 
      height: '250px', 
      marginRight: '10px', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#3498db',
    };
    const formSectionStyle = {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      padding: '20px', 
    };

    
    const functionbutton = {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      padding: '20px', 
    };
    return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <div className="profile-container">
        <img src='https://ca.slack-edge.com/T0266FRGM-U2Q173U05-g863c2a865d7-512' alt="Profile" className="profile-photo" style={smallProfilePhotoStyle}/>
       </div>
       <div>
       <div style={functionbutton}>
         <ButtonToolbar aria-label="Toolbar with button groups">
      <ButtonGroup className="me-2" aria-label="First group">
      <Button variant="secondary" type="submit">
        View Itenerary
      </Button>
      </ButtonGroup>
      <ButtonGroup className="me-2" aria-label="Second group">
      <Button variant="secondary" type="reset">

        Delete Profile
      </Button>
      </ButtonGroup>

     
      <ButtonGroup className="me-2" aria-label="Third group">
      <Button variant="secondary" type="reset">
        Log Out
      </Button>
      </ButtonGroup>
      </ButtonToolbar>
       </div>
       <div style={formSectionStyle}>
      <Form>
     <Row className="g-2">
    <Col md>
        <FloatingLabel
        controlId="floatingInput"
        label="First Name*"
        className="mb-3"
      >
      <Form.Control aria-label="First name" placeholder="First Name" />
  </FloatingLabel>
  </Col>
       
       <Col md>
        <FloatingLabel
        controlId="floatingInput"
        label="Last Name*"
        className="mb-3"
      >
      <Form.Control aria-label="Last name" placeholder="Last Name" />
      </FloatingLabel>
      </Col>
  
     </Row>
    <Row className="g-2">
    <Col md>
        <FloatingLabel
        controlId="floatingInput"
        label="Email Address*"
        className="mb-3"
      >
      <Form.Control type="email" placeholder="name@example.com" />
  </FloatingLabel>
  </Col>
       
       <Col md>
          <FloatingLabel
        controlId="floatingInput"
        label="Enter your city"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Enter your city" />
        <Form.Text className="text-muted">
         We use this information only for our information. We do not share it with others.
        </Form.Text>
        </FloatingLabel>
      </Col>
  
     </Row>
      <Row className="g-2">
    <Col md>
        <FloatingLabel
        controlId="floatingInput"
        label="Password*"
        className="mb-3"
      >
        <Form.Control type="password" placeholder="Enter Password" />
        <Form.Text className="text-muted">
        Use atleast 8 characters.
        </Form.Text>
     </FloatingLabel>
  </Col>
       
       <Col md>
          <FloatingLabel
        controlId="floatingInput"
        label="Re-enter Password*"
        className="mb-3"
      >
        <Form.Control type="password" placeholder="Renter Password" />
        <Form.Text className="text-muted">
        </Form.Text>
     </FloatingLabel>
      </Col>
  
     </Row> 
     
  
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Do you wish to receive notifications via email?*" />
      </Form.Group>
      <ButtonToolbar aria-label="Toolbar with button groups">
      <ButtonGroup className="me-2" aria-label="First group">
      <Button variant="primary" type="submit">
        Save Changes
      </Button>
      </ButtonGroup>
      <ButtonGroup className="me-2" aria-label="Second group">
      <Button variant="primary" type="reset">
        Clear
      </Button>
      </ButtonGroup>
      </ButtonToolbar>
      </Form>
      </div>
      </div>
      </div>
    );
  }
}

export default Edit_Profile;