// src/components/Search.js

import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Carousel from "./CarouselSlide";
import headerContent from '../App';
import "../css/search.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your search logic here
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="search-container">
      <header className="App-header">
        {headerContent}
        Time Square.
      </header>
      <Carousel />
      <Container fluid className="search-overlay">
        <Row className="row-div">
          <Col xs={12} md={8} lg={6} className="mx-auto">
            <Form onSubmit={handleSubmit} className="search-form">
              <Form.Group className="mb-3 position-relative search-group">
                <Form.Control
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-5 search-input custom-placeholder"
                />
                <Button
                  variant="custom"
                  type="submit"
                  className="position-absolute search-button"
                >
                  <FontAwesomeIcon icon={faPaperPlane} className="search-icon" />
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Search;