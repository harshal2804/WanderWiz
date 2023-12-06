import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router";
import { UserContext } from "../context/UserContext";
import bg_login from "../assets/Login_Page.jpg"


const fetchUser = async ({ email, password}) => {
  const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const res = await axios.post(`${VITE_BACKEND_URL}api/auth/login`, {
    email: email,
    password: password,
  })

  return res.data;
};

function Login({ handleUser }) {

  const navigation = useNavigate();
  const user = useContext(UserContext);
  const [status, setStatus] = useState(200);
  const [message, setMessage] = useState("");

  const loginMutation = useMutation({
    mutationFn: fetchUser,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      handleUser({
        user: true,
        token: data.token,
      });
      navigation("/");
    },
    onError: (error) => {
      setStatus(error.response.status);
      setMessage(error.response.data.message);    }
  })

  const handleLogin = (e) => {
    e.preventDefault();
    loginMutation.mutate({
      email: e.target.formBasicEmail.value,
      password: e.target.formBasicPassword.value
    })
  };

  const handleSignup = (e) => {
    e.preventDefault();
    navigation("/signup");
  };

  const myStyle = {
    height: "100vh",
    backgroundImage: `url(${bg_login})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    opacity : "0.8",
  };
  const textStyle = {
    textAlign: "center",
    fontSize: "25px",
    fontWeight: 600,
    color: "#efefef",
    letterSpacing: "1px",
    fontFamily: "Montserrat, sans-serif",
    textShadow: "4px 4px 4px rgba(0, 0, 0, 0.7)",
  };
  return (
    <>
      {user.user ? 
        useEffect(() => {
          navigation("/");
        }
      )
      :
      <div
        className="p-5 d-flex align-items-center gap-4"
        style={myStyle}
      >
        <Form
          className="d-flex flex-column mx-auto p-4 border rounded shadow-lg"
          style={{
            backgroundColor: "#0f0f0f",
          }}
          onSubmit={(e) => handleLogin(e)}
        >
          <h1 className="mx-auto pt-3 px-2" style={textStyle}>
            Welcome Back to
          </h1>
          <h1 className="pb-4 px-2" style={textStyle}>
            WanderWiz
          </h1>
          <div>
            <Form.Group
              className="mb-3 text-light"
              controlId="formBasicEmail"
            >
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Enter email" required/>
              <Form.Control.Feedback type="invalid">
                Please choose a email.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              className="mb-3 text-light"
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required/>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Text className="py-2 text-light" id="signupRedirect">
                Are you new here?
              </Form.Text>
              <Button variant="link btn-sm" onClick={(e) => handleSignup(e)}>
                Sign Up
              </Button>
            </Form.Group>
            <div className="py-2 text-danger">{message}</div>
            <div className="my-2 d-flex justify-content-center">
              {" "}
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>
          </div>
        </Form>
      </div>}
    </>
  );
}

export default Login;
