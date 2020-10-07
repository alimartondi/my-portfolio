import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Slick from "./Slick";

export default function portFolioSection() {
  return (
    <section className="portfolio-area" id="portfolio">
      <Container>
        <Row>
          <Col sm={12}>
            <h2 className="second-title mt-5">Portfolio</h2>
            <h5 className="subtitle">UI UX Design</h5>
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
