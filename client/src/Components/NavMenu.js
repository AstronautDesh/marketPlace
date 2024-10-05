import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Navbar 
      bg="light" 
      expand={false} 
      className="mb-3" 
      style={{ 
        position: 'fixed', 
        top: '60px',
        left: '10px',
        zIndex: 1030,
        width: 'auto'
      }}
    >
      <Container fluid>
        <Navbar.Toggle 
          aria-controls="offcanvasNavbar" 
          onClick={toggleMenu}
          style={{ border: 'none' }}
        >
          <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
        </Navbar.Toggle>
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
          show={isOpen}
          onHide={() => setIsOpen(false)}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>
              <Nav.Link href="#action3">Services</Nav.Link>
              <Nav.Link href="#action4">Contact</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavMenu;