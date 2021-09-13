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
            <p className="description">Halo, nama saya</p>
            <h1 className="main-title">
              Alimartondi
              <br />
              Batubara
            </h1>
            <p className="description mt-3">
              Lulusan Teknik Informatika, bisa menggunakan React, Tailwindcss
              dan bootsrap. Selain Programming saya juga menyukai Desain UI-UX,
              Fotografi dan Desain Grafis.
            </p>
            <div className="hero-content__cta d-flex justify-content-between">
              <Button
                variant="main-button"
                href="mailto:alimartondi88@gmail.com"
                className="mt-5"
              >
                Hubungi Saya
              </Button>
            </div>
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
