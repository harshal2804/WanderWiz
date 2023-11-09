// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';

// function Signup() {
//   return (
//     <div display:inline-block className="d-flex justify-content-center my-5 " >
//         <Form className style={{maxWidth: 500}} >
      
//       <div className="px-5 my-3" >
//           <Form.Group as={Col} controlId="formGridEmail">
//           <Form.Label>Email</Form.Label>
//           <Form.Control type="email" placeholder="Enter email" />
//           </Form.Group>
//       </div>
      
//       <div className="px-5">
//       <Form.Group as={Col} controlId="formGridPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" />
//       </Form.Group>
//       </div>
    

//     {/* <Form.Group className="mb-3" controlId="formGridAddress1">
//       <Form.Label>Address</Form.Label>
//       <Form.Control placeholder="1234 Main St" />
//     </Form.Group> */}

//     {/* <Form.Group className="mb-3" controlId="formGridAddress2">
//       <Form.Label>Address 2</Form.Label>
//       <Form.Control placeholder="Apartment, studio, or floor" />
//     </Form.Group> */}

//     <Row className="mb-5 px-5 my-3">
//       <Form.Group as={Col} controlId="formGridCity">
//         <Form.Label>City</Form.Label>
//         <Form.Control />
//       </Form.Group>

//       <Form.Group as={Col} controlId="formGridState">
//         <Form.Label>State</Form.Label>
//         <Form.Select defaultValue="Choose...">
//           <option>Choose...</option>
//           <option>...</option>
//         </Form.Select>
//       </Form.Group>

//       <Form.Group as={Col} controlId="formGridZip">
//         <Form.Label>Zip</Form.Label>
//         <Form.Control />
//       </Form.Group>
//     </Row>

//     <Form.Group className="px-5 my-3" id="formGridCheckbox" >
//       <Form.Check type="checkbox" label="Check me out" />
//     </Form.Group>

//     <div className='px-5'>
//     <Button variant="primary" type="submit" >
//          Submit
//     </Button>
//     </div>
//   </Form>
//     </div>
    
//   );
// }

// export default Signup;

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

  // const myStyle = {
  //   height: "100vh",
  //   backgroundImage: `url(${loginBg})`,
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "cover",
  // };

  const navigation = useNavigate();
  const [user, setUser] = useState({});

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
    setUser({
      name: e.target.formGridFirstName.value + " " + e.target.formGridLastName.value,
      email: e.target.formGridEmail.value,
      password: e.target.formGridPassword.value,
      curretCity: e.target.formGridCity.value,
    })
    signupMutation.mutate(user);
  };

  const ms={
    backgroundImage: `url(${Signupp})`, 
      backgroundPosition: 'center',
       backgroundSize: 'cover',
       backgroundRepeat: 'no-repeat',
       width: '100vw',
      height: '100vh',
      
    }

      const textStyle = {
        // textAlign: "center",
        fontSize: "15px",
        fontWeight: 600,
        color: "#efefef",
        letterSpacing: "1px",
        fontFamily: "Montserrat, sans-serif",
        textShadow: "4px 4px 4px rgba(0, 0, 0, 0.7)",
      };

      const insi={
            height: 545,
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
          <Form.Control type="text" placeholder="Enter first name" />
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
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      </div>
      
      <div className="p-2" style={textStyle}>
        <Form.Group controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </div>
      <div className="p-1" style={textStyle}>
        <Form.Group controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control type="City" placeholder="Enter city" />
        </Form.Group>
      </div>
      {/* <div className="p-1">
        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
      </div> */}

      
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

    
    // <div className="signup-container d-flex justify-content-center p-5" 
    //   style={ms}>

    //   <div className=" text-white p-3 square border border-5"  style={insi}>
    //     <div className="p-2">
    //       <h2>Sign Up</h2>
    //     </div>
    //     <Form style={{width: "300px"}}>

    //       <div className="p-2 " style={textStyle} >
    //       <Form.Group controlId="formGridEmail">
    //         <Form.Label>Email</Form.Label>
    //         <Form.Control type="email" placeholder="Enter email"  />
    //       </Form.Group>
    //       </div>

    //       <div className="p-2" style={textStyle}>
    //       <Form.Group controlId="formGridPassword">
    //         <Form.Label>Password</Form.Label>
    //         <Form.Control type="password" placeholder="Password" />
    //       </Form.Group>

    //       </div>

          

    //       {/* <Row>
    //         <Form.Group as={Col} controlId="formGridCity">
    //           <Form.Label>City</Form.Label>
    //           <Form.Control />
    //         </Form.Group>

    //         <Form.Group as={Col} controlId="formGridState">
    //           <Form.Label>State</Form.Label>
    //           <Form.Control as="select" defaultValue="Choose...">
    //             <option>Choose...</option>
    //             <option>...</option>
    //           </Form.Control>
    //         </Form.Group>

    //         <Form.Group as={Col} controlId="formGridZip">
    //           <Form.Label>Zip</Form.Label>
    //           <Form.Control />
    //         </Form.Group>
    //       </Row> */}

          

    //       <div className="p-3">
    //       <Form.Group id="formGridCheckbox">
    //         <Form.Check type="checkbox" label="Check me out" />
    //       </Form.Group>

    //       </div>

    //       <div className="p-3">
    //       <Button variant="primary" type="submit">
    //         Submit
    //       </Button>
    //       </div>
    //     </Form>
    //   </div>
    // </div>
  );
}

export default Signup;

