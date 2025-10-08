import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Search, Bell, PersonCircle } from "react-bootstrap-icons";

import logo from "../assets/logo.png";

const MyNavbar = () => {
  return (
    <Navbar style={{ backgroundColor: "#221f1f" }} expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="logo Netflix" style={{ width: "100px", height: "55px" }} />
        </Navbar.Brand>
        <Navbar.Toggle className="bg-white" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="fs-6 me-auto">
            <Nav.Link href="#" className="nav-link active fw-bold text-white">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="nav-link fw-bold text-white-50">
              Tv Show
            </Nav.Link>
            <Nav.Link href="#" className="nav-link fw-bold text-white-50">
              Movies
            </Nav.Link>
            <Nav.Link href="#" className="nav-link fw-bold text-white-50">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#" className="nav-link fw-bold text-white-50">
              My List
            </Nav.Link>
          </Nav>
          <div className="d-flex align-items-center gap-3 fs-4">
            <Search style={{ cursor: "pointer" }} className="text-white"></Search>
            <div style={{ cursor: "pointer" }} id="kids" className="fw-bold">
              KIDS
            </div>
            <Bell style={{ cursor: "pointer" }} className="text-white"></Bell>
            <PersonCircle style={{ cursor: "pointer" }} className="text-white"></PersonCircle>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
