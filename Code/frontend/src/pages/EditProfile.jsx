
import React, { useContext, useState } from 'react';
import { Button, ButtonGroup, ButtonToolbar, Col, Form, Row } from 'react-bootstrap';
import { FloatingLabel } from 'react-bootstrap';
import profile from "../assets/profile.png";
import {  useLocation, useNavigate  } from 'react-router-dom';
import { useMutation } from 'react-query';
import { UserContext } from '../context/UserContext';
import axios from 'axios';

const postUser = async (newUser) => {
  const token = newUser.token;
  const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const res = await axios.put(`${VITE_BACKEND_URL}api/user`, newUser.user, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  if (res.status !== 200) {
    return {
      status: res.status,
      message: res.data.message,
    };
  }
  return { ...res.data, status: res.status };
};

function Edit_Profile() {

  const navigate = useNavigate();
  const user = useContext(UserContext);
  const { state } = useLocation();
  const [status, setStatus] = useState(200);
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [email, setEmail] = useState(state?.email);
  const [emailError, setEmailError] = useState("");


  const EditProfileMutation = useMutation({
    mutationFn: postUser,
    onSuccess: (data) => {
      setStatus(data.status);
      setMessage(data.message);
      navigate("/profile");
    },
    onError: (error) => {
      setStatus(error.response.status);
      setMessage(error.response.data.message);
    },
  });

  const handleChanges = (e) => {
    e.preventDefault();
    if (password !== confirmPassword || passwordError !== "" || emailError !== "" ) {
      setStatus(400);
      setMessage("Please fill in all the fields correctly.");
      return;
    } else {
      setStatus(200);
      setPasswordError("");
      setEmailError("");
      EditProfileMutation.mutate({
        token: user.token,
        user:{
          name:
            e.target.firstName.value +
            " " +
            e.target.lastName.value,
          email: e.target.email.value,
          password: e.target.password.value,
          currentCity: e.target.currentCity.value,
          itineraries: state.itineraries
        }
      });
    }
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    const isValidPassword = checkPassword(e.target.value);
    if (!isValidPassword) {
      setPasswordError(
        "Password must contain at least 8 characters including upper and lower case letters, numbers, and special characters."
      );
    } else {
      setPasswordError("");
    }
  };

  const checkPassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleEmailChange = (e) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if ( re.test(e.target.value) ) {
        setEmail(e.target.value);
        setEmailError("");
    }
    else {
        setEmail("");
        setEmailError("Please enter a valid email address.");
    }
  }

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
      // backgroundColor: '#3498db',
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
    <div className="p-5" style={{ display: 'flex', justifyContent: 'space-around' }}>
    <div className="profile-container d-flex flex-column align-items-center gap-5">
        <img src={profile} alt="Profile" className="profile-photo" style={smallProfilePhotoStyle}/>
       <div style={functionbutton}>
         <ButtonToolbar aria-label="Toolbar with button groups">
      {/* <ButtonGroup className="me-2" aria-label="First group">
      <Button variant="info" type="submit">
        View Itenerary
      </Button>
      </ButtonGroup> */}
      <ButtonGroup className="me-2" aria-label="Second group">
      <Button variant="secondary" type="reset" onClick={() => navigate("/profile")}>

        Back to Profile
      </Button>
      </ButtonGroup>

     
      {/* <ButtonGroup className="me-2" aria-label="Third group">
      <Button variant="danger" type="reset">
        Log Out
      </Button>
      </ButtonGroup> */}
      </ButtonToolbar>
       </div>
       </div>
       <div>
       <div style={formSectionStyle}>
      <Form onSubmit={(e) => handleChanges(e)}  >
     <Row className="g-2">
    <Col md>
        <FloatingLabel
        controlId="firstName"
        label="First Name*"
        className="mb-3"
      >
      <Form.Control defaultValue={state.name} aria-label="First name" placeholder="First Name" required/>
  </FloatingLabel>
  </Col>
       
       <Col md>
        <FloatingLabel
        controlId="lastName"
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
        controlId="email"
        label="Email Address*"
        className="mb-3"
      >
      <Form.Control isInvalid={email === ""} defaultValue={state.email} type="email" placeholder="name@example.com" onChange={(e) => handleEmailChange(e)} required/>
      <Form.Control.Feedback type='invalid'>
        {emailError}
      </Form.Control.Feedback>
  </FloatingLabel>
  </Col>
       
       <Col md>
          <FloatingLabel
        controlId="currentCity"
        label="Enter your city"
        className="mb-3"
      >
        <Form.Control defaultValue={state.currentCity} type="text" placeholder="Enter your city" required/>
        <Form.Text className="text-muted">
         We use this information only for our information. We do not share it with others.
        </Form.Text>
        </FloatingLabel>
      </Col>
  
     </Row>
      <Row className="g-2">
    <Col md>
        <FloatingLabel
        controlId="password"
        label="Password*"
        className="mb-3"
      >
        <Form.Control isInvalid={passwordError} type="password" placeholder="Enter Password" onChange={(e) => handlePasswordChange(e)} required/>
        <Form.Control.Feedback type="invalid">
        Password must contain at least 8 characters including upper and lower case letters, numbers, and special characters.
        </Form.Control.Feedback>
     </FloatingLabel>
  </Col>
       
       <Col md>
          <FloatingLabel
        controlId="confirmPassword"
        label="Re-enter Password*"
        className="mb-3"
      >
        <Form.Control isInvalid={password !== confirmPassword} type="password" placeholder="Renter Password" onChange={(e) => setConfirmPassword(e.target.value)} required/>
        <Form.Control.Feedback type="invalid">
        Passwords do not match.
        </Form.Control.Feedback>
        <Form.Text className="text-muted">
        </Form.Text>
     </FloatingLabel>
      </Col>
  
     </Row> 
     
  
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Do you wish to receive notifications via email?*" />
      </Form.Group> */}
      {status !== 200 ? (
              <div className="py-2 text-danger"> {message} </div>
            ) : null}
      {" "}
      <ButtonToolbar aria-label="Toolbar with button groups">
      <ButtonGroup className="my-4" aria-label="First group">
      <Button variant="primary" type='submit'>
        Save Changes
      </Button>
      </ButtonGroup>
      </ButtonToolbar>
      </Form>
      </div>
      </div>
      </div>
    );
}

export default Edit_Profile;