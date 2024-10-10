import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "../css/homePage.css";
import { salesPitchData } from "../Data/salesPitchData";

function HomePage() {
  return (
    <div className="homePage">
      <motion.div className="scroll-container">
        {salesPitchData.map((pitch) => (
          <motion.div
            key={pitch.id}
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
                  className="watch-grid"
                >
                  <img src={pitch.image} className="img-box" alt="wrist-watch" />
                </Col>
                <div className="sales-pitch-text">
                  <Col xs={12}>
                    <Row>
                      <div className="box-grid">
                        <Col xs={5} md={6} className="box1">
                          <p className="rating">{pitch.rating}</p>
                        </Col>
                        <Col xs={5} md={6} className="box2">
                          <h3 className="price">{pitch.price}</h3>
                        </Col>
                      </div>
                    </Row>
                  </Col>
                  <Col xs={12} className="desc">
                    {pitch.description}
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