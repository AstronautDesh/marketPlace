import React, { useState, useEffect, useRef, useCallback } from 'react';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../css/nav-icon.css';

const NavMenu = ({ setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const offcanvasRef = useRef(null);

  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);

  const handleClickOutside = useCallback((event) => {
    if (offcanvasRef.current && !offcanvasRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, []);

  const handleClickInsideOffcanvas = useCallback((event) => {
    if (!event.target.closest('.nav-link')) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    const offcanvasElement = offcanvasRef.current;
  
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      offcanvasElement?.addEventListener('click', handleClickInsideOffcanvas);
    }
  
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      offcanvasElement?.removeEventListener('click', handleClickInsideOffcanvas);
    };
  }, [isOpen, handleClickOutside, handleClickInsideOffcanvas]);

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsOpen(false);
  };

  return (
    <>
      <button
        className={`nav-toggle ${isOpen ? 'nav-toggle-open' : ''}`} 
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      <Offcanvas
        show={isOpen}
        onHide={() => setIsOpen(false)}
        placement="start"
        className="custom-offcanvas"
      >
        <Offcanvas.Header>
          <Offcanvas.Title>
            <button className="close-offcanvas" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body ref={offcanvasRef}>
          <Nav className="flex-column">
            <Nav.Link onClick={() => handleNavClick('home')}>Home</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('about')}>About</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('services')}>Services</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('contact')}>Contact</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavMenu;