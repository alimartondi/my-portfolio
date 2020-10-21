import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Slick from "./Slick";
import MacBook from "../image/idf.png";

export default function portFolioSection() {
  return (
    <section className="portfolio-area" id="portfolio">
      <Container>
        <Row>
          <Col sm={12}>
            <h2 className="second-title">Portfolio</h2>
            <h5 className="subtitle">Frontend</h5>
          </Col>
        </Row>
        <Row className="mt-5 pt-5">
          <Col sm={5}>
            <h5 className="subtitle">Infra Digital Foundation</h5>
          </Col>
          <Col sm={7}>
            <div className="f__portfolio">
              <img src={MacBook} alt="MacBook" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="px-0">
        <div className="portfolio-card mt-5">
          <Slick />
        </div>
      </Container>
    </section>
  );
}
