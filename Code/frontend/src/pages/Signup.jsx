

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Signupp from "../../public/bg_Signup.jpg";
import { useNavigate } from 'react-router';
import { useMutation } from 'react-query';
import axios from 'axios';


const postUser = async (user) => {
  const res = await axios.post("http://localhost:3001/api/user", user);
  return res.data;
}

function Signup() {

  const navigation = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validatePassword, setValidatePassword] = useState(true);

  const signupMutation = useMutation({
    mutationFn: postUser,
    onSuccess: (data) => {
      console.log(data);
      navigation("/login");
    },
  })

  const handleLogin = (e) => {
    e.preventDefault();
    navigation("/login");
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    // const firstName = e.target.formGridFirstName.value;
    // const lastName = e.target.formGridLastName.value;
    // const email = e.target.formGridEmail.value;
    // const password = e.target.formGridPassword.value;
    // const confirmPassword = e.target.formGridConfirmPassword.value;
    // const city = e.target.formGridCity.value;

    // if (password !== confirmPassword) {
    //   console.log("Password and Confirm Password do not match");
    //   // You can handle the error here, show a message, or prevent the form submission
    //   return;
    // }

    // setUser({
    //   name: `${firstName} ${lastName}`,
    //   email,
    //   password,
    //   curretCity: city,
    // });

    setUser({
      name: e.target.formGridFirstName.value + " " + e.target.formGridLastName.value,
      email: e.target.formGridEmail.value,
      password: e.target.formGridPassword.value,
      //confirmPassword=e.target.formGridConfirmPassword.value;
      curretCity: e.target.formGridCity.value,
    })

    signupMutation.mutate(user);
  };

  
    if(password !== confirmPassword) {
      setValidatePassword(false);
      console.log("passwords do not match");
      return;
    }else{
      signupMutation.mutate({
        name: e.target.formGridFirstName.value + " " + e.target.formGridLastName.value,
        email: e.target.formGridEmail.value,
        password: e.target.formGridPassword.value,
        curretCity: e.target.formGridCity.value,
      });
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
            height: "20vh",
            // height: 545,
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
          <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required/>
        </Form.Group>
      </div>

      {/* <div className="p-2" style={textStyle}>
        <Form.Group controlId="formGridConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
      </div>
       */}
      <div className="p-2" style={textStyle}>
        <Form.Group controlId="formGridPassword2">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password" required/>
        </Form.Group>
      </div>
      <div className='p-2' style={textStyle}>
      <Form.Group controlId="passwordErrorMessage">
        <Form.Text className="text-danger">{validatePassword ? "" : "Passwords do not match"}</Form.Text>
      </Form.Group>
      </div>
      <div className="p-1" style={textStyle}>
        <Form.Group controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control type="City" placeholder="Enter city" required/>
        </Form.Group>
      </div>
      <div className="p-1">
        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
      </div>

      
      <div className="p-1">

        
        <Form.Text className="py-2 text-light" id="signupRedirect">
          Already have an account?
        </Form.Text>
        <Button variant="link btn-sm" onClick={(e) => handleLogin(e)}>
          Login
        </Button>
        <br />
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


export default Signup;

