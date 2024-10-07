import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/homePage.css';
import gShock from '../Asset/G-shock-red.webp';

function HomePage() {
  return (
    <div className='homePage'>
      <Container fluid className='sales-pitch-container'>
        <Row className='sales-pitch'>
        <Col xs={8} className='watch-grid'>
            <img
              src={gShock}
              class="img-box"
              alt='wrist-watch'
            />
            
          </Col>
          <Col xs={5} md={6} className='box1'>
            <p className='rating'>11</p>
          </Col>
          <Col xs={5} md={6} className='box2'>
            <h3 className='price'>N34,500</h3>
          </Col>
          <Col xs={12} className='desc'>
            <div className='box3'>
            G-Shock G-Rescue Red Dial Men's Watch -
            Shock Resistant, Moon/Tide
            Graphs, World Time,
            Chronograph - 200m Water Resistant
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomePage;