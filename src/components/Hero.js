import React from "react";
import Alianda from "../image/alianda1.png";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../style/style.css";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <Container>
        <Row className="hero d-block d-md-flex justify-content-between">
          <Col md={6} className="hero-content">
            <h1 className="main-title">
              Hallo, Saya Seorang Frontend Developer
            </h1>
            <p className="description mt-4">
              Lulusan Teknik Informatika, bisa React, Bootstrap dan Tailwindcss.
              Selain Programming saya juga menyukai Desain UI-UX, Fotografi dan
              Desain Grafis.
            </p>

            <Button
              variant="main-button"
              href="mailto:alimartondi88@gmail.com"
              className="main-button mt-4"
            >
              Hubungi Saya
            </Button>
          </Col>
          <Col
            md={6}
            className="hero-image text-center px-5 pr-md-0 text-md-right"
          >
            <img
              src={Alianda}
              className="img-fluid"
              alt="hero"
              loading="lazy"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
