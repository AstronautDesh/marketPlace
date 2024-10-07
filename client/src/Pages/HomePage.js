import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "../css/homePage.css";
import gShock from "../Asset/G-shock-red.webp";

function HomePage() {
  return (
    <div className="homePage">
      <motion.div className="scroll-container">
        {[1, 2].map((index) => (
          <motion.div
            key={index}
            className="sales-pitch"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.8 }}
          >
            <Container fluid>
              <Row>
                <Col
                  xs={12}
                  className="watch-grid d-flex justify-content-center align-items-center"
                >
                  <img src={gShock} className="img-box" alt="wrist-watch" />
                </Col>
                <div className="sales-pitch-text">
                  <Col xs={12}>
                    <Row>
                      <div className="box-grid">
                        <Col xs={5} md={6} className="box1">
                          <p className="rating">11</p>
                        </Col>
                        <Col xs={5} md={6} className="box2">
                          <h3 className="price">N34,500</h3>
                        </Col>
                      </div>
                    </Row>
                  </Col>
                  <Col xs={12} className="desc">
                    G-Shock G-Rescue Red Dial Men's Watch - Shock Resistant, Moon/Tide
                    Graphs, World Time, Chronograph - 200m Water Resistant
                  </Col>
                </div>
              </Row>
            </Container>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default HomePage;