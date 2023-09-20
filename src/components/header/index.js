import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import style from "./header.module.css";
function NavScrollExample() {
  return (
    <Navbar expand="lg" className={style.bg}>
      <Container fluid>
        <Navbar.Brand href="/home" className="text-white">
          Booky{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/home" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="#action2" className="text-white">
              Link
            </Nav.Link>
            <NavDropdown
              title={<span className="text-white">Link</span>}
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className={`d-flex`}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className="text-white">
              Search
            </Button>
          </Form>
          <div className="ml-auto d-flex">
            <Button variant="outline-primary" className="me-2">
              Login
            </Button>
            <Button variant="primary">Sign Up</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
