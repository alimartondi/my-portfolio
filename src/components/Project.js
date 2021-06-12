import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Idf from "../image/idf__mockup.jpg";

export default function ProjectSection() {
  return (
    <section className="project-area mt-5" id="project">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <h2 className="second-title">Projek</h2>
            <h5 className="subtitle">Apa yang bisa saya kerjakan?</h5>
          </Col>
          <Col lg={12}>
            <img
              src={Idf}
              alt="infradigital-foundation"
              className="img-fluid rounded-lg mt-3"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
