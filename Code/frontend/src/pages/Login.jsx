import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
  };

  const handleSignUp = (e) => {
    e.preventDefault();
  };

  const myStyle = {
    height: "100vh",
    backgroundImage: `url(${import.meta.env.BASE_URL}bg_login.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
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
              controlId="formBasicUsername"
            >
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" required/>
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              className="mb-3 text-light"
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Text className="py-2 text-light" id="signupRedirect">
                Are you new here?
              </Form.Text>
              <Button variant="link btn-sm" onClick={(e) => handleSignUp(e)}>
                Sign Up
              </Button>
            </Form.Group>
            <div className="d-flex justify-content-center">
              {" "}
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Login;
