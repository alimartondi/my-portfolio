import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Uiux from "../image/uiux-design.svg";
import Frontend from "../image/frontend.svg";
import Design from "../image/design.svg";

export default function Service() {
  return (
    <section className="service" id="service">
      <Container>
        <Row className="justify-content-center mb-2 mb-md-4">
          <Col lg={6} className="text-center px-3">
            <h2 className="second-title">Yang saya lakukan</h2>
          </Col>
        </Row>
        <Row>
          {contents.map((content, i) => (
            <Col lg={4} className="service-items pl-md-2" key={i}>
              <Card className="service-card border-0 pt-3 mt-4 py-4">
                <Card.Header className="bg-white border-0">
                  <img
                    src={content.image}
                    alt={content.title}
                    className="img-fluid"
                  />
                </Card.Header>
                <Card.Body>
                  <h5 className="card-title">{content.title}</h5>
                  <p className="description mt-4 px-3">{content.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

const contents = [
  {
    image: Uiux,
    title: "UI-UX Design",
    description:
      "Seperti desain Landing Page, Mobile App dll. Menggunakan Adobe XD dan Figma",
  },
  {
    image: Frontend,
    title: "Frontend Development",
    description:
      "Untuk Frontend saya menggunakan React, Bootstrap dan Tailwind, atau murni CSS",
  },
  {
    image: Design,
    title: "Graphic Design",
    description:
      "Untuk melengkapi logo dan banner website menggunakan Illustrator atau CorelDraw",
  },
];
