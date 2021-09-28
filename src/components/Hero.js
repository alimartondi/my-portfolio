import React from "react";
import Alianda from "../image/alianda1.png";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../style/style.css";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <Container>
        <Row className="hero">
          <Col lg={6} className="hero-content">
            <h1 className="main-title">
              Alimartondi
              <br />
              Batubara.
            </h1>
            <hr className="w-25" />
            <p className="description mt-4">
              Lulusan Sarjana Teknik Informatika Nusa Mandiri Jakarta. Bisa
              menggunakan React, Tailwindcss dan Bootstrap. Selain Programming
              saya juga menyukai dunia Fotografi dan Desain Grafis.
            </p>
            <Button
              variant="main-button"
              size="lg"
              href="mailto:alimartondi88@gmail.com"
              className="mt-3"
            >
              Hubungi Saya
            </Button>
          </Col>
          <Col
            lg={6}
            className="hero-image text-center text-lg-end px-5 px-md-0"
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
