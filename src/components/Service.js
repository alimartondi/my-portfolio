import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Uiux from "../image/uiux.svg";
import Frontend from "../image/frontend.svg";
import Design from "../image/design.svg";

export default function ServiceSection() {
  return (
    <section className="service-area" id="service">
      <Container className="px-0">
        <Row className="justify-content-center">
          <Col lg={7} className="text-center">
            <h2 className="second-title">Yang saya kerjakan</h2>
            <h5 className="description">
              Selain programming, saya juga menyukai UI-UX Design dan Graphic
              Design seperti membuat logo, poster dll.
            </h5>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="service-items pl-md-2">
            <div className="service-items__grid">
              {contents.map((content, i) => (
                <Card className="service-card rounded-lg border-0 pt-3" key={i}>
                  <Card.Header className="bg-white border-0">
                    <img
                      src={content.image}
                      alt={content.title}
                      className="img-fluid"
                    />
                  </Card.Header>
                  <Card.Body>
                    <h5 className="card-title">{content.title}</h5>
                    <p className="description mt-4 px-3">
                      {content.description}
                    </p>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
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
    title: "Front-end",
    description:
      "Untuk Frontend saya menggunakan React, Bootstrap dan Tailwind, atau murni CSS",
  },
  {
    image: Design,
    title: "Web Design",
    description:
      "Untuk melengkapi logo dan banner website menggunakan Illustrator atau CorelDraw",
  },
];
