import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
    const myStyle = {
        height: '100vh',
        // backgroundImage: "url('../../public/Login_bg.jpeg')"
        backgroundColor: 'blue'
    }
  return (
    <>
    <div className='p-5 d-flex flex-column justify-content-around' style={myStyle}>
        <h1 className='p-3 mx-auto'>Welcom Back to WanderWiz</h1>
        <Form  className='p-3 mx-auto p-4 bg-secondary'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
        </div>
    </>
  );
}

export default Login;