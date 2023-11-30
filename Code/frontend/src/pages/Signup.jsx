

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from "react-bootstrap/Alert";
import Signupp from "../assets/bg_Signup.jpg";
import { useNavigate } from 'react-router';
import { useMutation } from 'react-query';
import axios from 'axios';


const postUser = async (user) => {
  const res = await axios.post("http://localhost:3001/api/user", user);
  if(res.status !== 200){
    return { 
      status: res.status,
      message: res.data.message,
    }
  }
  return {...res.data, status: res.status };
}

function Signup() {

  const navigation = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validatePassword, setValidatePassword] = useState(true);
  const [passwordError, setPasswordError] = useState('');
  const [status, setStatus] = useState(200);
  const [message, setMessage] = useState("");

  const signupMutation = useMutation({
    mutationFn: postUser,
    onSuccess: (data) => {
      setStatus(data.status);
      setMessage(data.message);
      navigation("/login");
    },
    onError: (error) => {
      setStatus(error.response.status);
      setMessage(error.response.data.message);
    }
  })

  const handleLogin = (e) => {
    e.preventDefault();
    navigation("/login");
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    if(password !== confirmPassword) {
      setStatus(200);
      setValidatePassword(false);
      return;
    }else{
      setValidatePassword(true);
      signupMutation.mutate({
        name: e.target.formGridFirstName.value + " " + e.target.formGridLastName.value,
        email: e.target.formGridEmail.value,
        password: e.target.formGridPassword.value,
        curretCity: e.target.formGridCity.value,
      });
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    const isValidPassword = checkPassword(e.target.value);
    if (!isValidPassword) {
      setPasswordError('Password must contain at least 8 characters including upper and lower case letters, numbers, and special characters.');
    } else {
      setPasswordError('');
    }
  };
    
  const checkPassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return passwordRegex.test(password);
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setValidatePassword(false);
    } else {
      setValidatePassword(true);
    }
  };
  

  const ms={
    backgroundImage: `url(${Signupp})`, 
      backgroundPosition: 'center',
       backgroundSize: 'cover',
       backgroundRepeat: 'no-repeat',
      //  width: '100vw',
      // height: '100vh',
      
    }

      const textStyle = {
        // textAlign: "center",
        fontSize: "2.2vh",
        fontWeight: 600,
        color: "#efefef",
        letterSpacing: "1px",
        fontFamily: "Montserrat, sans-serif",
        textShadow: "4px 4px 4px rgba(0, 0, 0, 0.7)",
      };

      const insi={
            backgroundColor: "#0f0f0f",
            minHeight : 450,
            maxWidth : 600,
            opacity : 0.9,
      };
  

  return (

  <div className="signup-container d-flex justify-content-center p-5" style={ms}>
  <div className="text-white p-3 square border-5 rounded" style={insi}>
    <Form style={{ width: "400px" }} onSubmit={(e) => handleSignUp(e)}>
      <div className="p-2 text-center">
        <h2>Sign up</h2> {/* Replace with your desired text */}
      </div>
      <div className='d-flex space-around'>
      <div className="p-1" style={textStyle}>
        <Form.Group controlId="formGridFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter first name" required/>
        </Form.Group>
        

      </div>
      <div className="p-1" style={textStyle}>
        <Form.Group controlId="formGridLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter last name" />
        </Form.Group>
      </div>
      </div>
      <div className="p-2" style={textStyle}>
        <Form.Group controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required/>
        </Form.Group>
      </div>
      
      <div className="p-2" style={textStyle}>
        <Form.Group controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(e) => handlePasswordChange(e)} type="password" placeholder="Password" required/>
        </Form.Group>
      </div>
      {passwordError && 
      <div className='p-2' style={textStyle}>
      <Form.Group controlId="passwordErrorMessage">
        <Form.Text className="text-danger">{passwordError}</Form.Text>
      </Form.Group>
      </div> }
      <div className="p-2" style={textStyle}>
        <Form.Group controlId="formGridPassword2">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control onChange={(e) => handleConfirmPasswordChange(e)} type="password" placeholder="Confirm Password" required/>
        </Form.Group>
      </div>
      {!validatePassword && 
      <div className='p-2' style={textStyle}>
      <Form.Group controlId="passwordErrorMessage">
        <Form.Text className="text-danger">Passwords do not match</Form.Text>
      </Form.Group>
      </div> }
      <div className="p-1" style={textStyle}>
        <Form.Group controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control type="City" placeholder="Enter city" required/>
        </Form.Group>
      </div>
      <div className="px-1 py-2">
        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
      </div>

      
      <div className="px-1">

        
        <Form.Text className="text-light" id="signupRedirect">
          Already have an account?
        </Form.Text>
        <Button variant="link btn-sm" onClick={(e) => handleLogin(e)}>
          Login
        </Button>
        <br />
        { status !== 200 ? 
          // <Alert variant="danger"> {message} </Alert>
          <div className='py-2 text-danger'> {message} </div>
        : null }
        <div className="d-flex justify-content-center">
              {" "}
              <Button className='my-3' variant="primary" type="submit">
                Signup
              </Button>
            </div>
        
      </div>
    </Form>
  </div>
  </div>

  );
}


export default Signup;

