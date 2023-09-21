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
              Books
            </Nav.Link>
            <NavDropdown
              title={<span className="text-white">Categories</span>}
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Fantastic</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Terror</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Romantic</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <div className="ml-auto d-flex">
            <Form className={`${style.search} d-flex`}>
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <Button variant="outline-success" className="text-white">
                Search
              </Button>
            </Form>
            <Button
              variant="outline-primary"
              className={`${style.login} me-2 text-white`}
            >
              Login
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
