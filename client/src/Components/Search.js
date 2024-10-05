import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your search logic here
    console.log('Searching for:', searchTerm);
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <Row className="w-100">
        <Col xs={12} md={8} lg={6} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 position-relative">
              <Form.Control
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-5"
              />
              <Button 
                variant="primary" 
                type="submit"
                className="position-absolute"
                style={{ right: '0', bottom: '0' }}
              >
                <FontAwesomeIcon icon={faPaperPlane} />
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;