import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../css/nav-icon.css';

const NavMenu = ({ setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMensDropdownOpen, setIsMensDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const offcanvasRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Toggle menu state
  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);

  // Toggle dropdown states
  const toggleMensDropdown = useCallback(() => setIsMensDropdownOpen(prev => !prev), []);
  const toggleServicesDropdown = useCallback(() => setIsServicesDropdownOpen(prev => !prev), []);

  // Handle click outside to close menu
  const handleClickOutside = useCallback((event) => {
    if (offcanvasRef.current && !offcanvasRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, []);

  // Handle nav link clicks
  const handleNavClick = (page) => {
    console.log('Navigating to:', page); // Debug log
    setCurrentPage(page);
    navigate(`/${page}`); // Use navigate to change route
    setIsOpen(false);
  };

  // Add/remove event listener for clicking outside
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  // Animation variants
  const menuVariants = {
    closed: { width: 0, opacity: 0 },
    open: { 
      width: '50%',
      opacity: 1, 
      transition: { duration: 0.5 }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2 + index * 0.1,
        duration: 0.4
      }
    })
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            className="nav-toggle"
            onClick={toggleMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.div
        className="custom-offcanvas"
        ref={offcanvasRef}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <button 
          className="close-offcanvas" 
          onClick={toggleMenu}
        >
          &times;
        </button>

        <Nav className="nav-grid">
          <motion.div
            className="motion-grid"
            variants={linkVariants}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            custom={0}
          >
            <Nav.Link
              onClick={() => handleNavClick('home')}
              className="nav-link"
            >
              Home
            </Nav.Link>
          </motion.div>

          {/* Mens dropdown */}
          <motion.div
            className="motion-grid"
            variants={linkVariants}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            custom={1}
          >
            <div className="nav-link dropdown-toggle" onClick={toggleMensDropdown}>
              Mens <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <AnimatePresence>
              {isMensDropdownOpen && (
                <motion.div
                  className="dropdown-menu"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <Nav.Link onClick={() => handleNavClick('mens/classic')} className="dropdown-item">
                    Classic
                  </Nav.Link>
                  <Nav.Link onClick={() => handleNavClick('mens/heritage')} className="dropdown-item">
                    Heritage
                  </Nav.Link>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Services dropdown */}
          <motion.div
            className="motion-grid"
            variants={linkVariants}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            custom={2}
          >
            <div className="nav-link dropdown-toggle" onClick={toggleServicesDropdown}>
              Services <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <AnimatePresence>
              {isServicesDropdownOpen && (
                <motion.div
                  className="dropdown-menu"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <Nav.Link onClick={() => handleNavClick('services/design')} className="dropdown-item">
                    Design
                  </Nav.Link>
                  <Nav.Link onClick={() => handleNavClick('services/consulting')} className="dropdown-item">
                    Consulting
                  </Nav.Link>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="motion-grid"
            variants={linkVariants}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            custom={3}
          >
            <Nav.Link
              onClick={() => handleNavClick('contact')}
              className="nav-link"
            >
              Contact
            </Nav.Link>
          </motion.div>
        </Nav>
      </motion.div>
    </>
  );
};

export default NavMenu;