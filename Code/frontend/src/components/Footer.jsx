import Container from "react-bootstrap/esm/Container";
import github from "../assets/github.png";

export default function Footer() {
    return (
        <>
        <Container fluid style={{ width: "100%" }} className="bg-secondary p-3 d-flex justify-content-center align-items-center">
                    <span className="mx-2">© 2023</span>
                    <span className="mx-2">WanderWiz</span>
                    <a href="https://github.com/harshal2804/WanderWiz">
                    <img src={github} style={{ height: "25px", width: "25px", marginLeft: "10px", marginRight: "10px" }}/>
                    </a>
        </Container>
        </>
    )
};