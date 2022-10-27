import "./header.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <div className="nav-bar">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Help" id="navbarScrollingDropdown">
                <NavDropdown.Item>Rules</NavDropdown.Item>
                <NavDropdown.Item>Administration</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="enter">Log in</Nav.Link>
              <Nav.Link href="registration">Registration</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-dark">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );

  // return (
  //     <div className="header" >
  //         <div className="information-block">
  //             <Link to="/">
  //                 <div className="logo">
  //                     Logo
  //                 </div>
  //             </Link>

  //             <div>
  //                 <input type="text" placeholder="search"></input>
  //             </div>
  //             <div>
  //                 <select>
  //                     <option value="help">rules</option>
  //                     <option value="administration">administration</option>
  //                 </select>
  //             </div>
  //         </div>
  //         <div className="autorithetion-block">
  //             <Link to="/registration">
  //             <Button variant="secondary" className="registration">registration</Button>
  //             </Link>
  //             <Link to="/enter">

  //             <Button variant="secondary" className="enter">enter</Button>
  //             </Link>

  //         </div>
  //     </div>
  // )
};
export default Header;
