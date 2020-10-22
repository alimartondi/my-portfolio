import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Slick from "./Slick";
import MacBook from "../image/81.png";

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
        <Row className="align-items-center">
          <Col sm={5}>
            <h5>Infra Digital Foundation</h5>
            <p>
              Merupakan project pertama saya secara profesional, dibuat
              menggunakan react dan react-bootstrap. Saya mengerjakan projek ini
              bersama satu orang teman saya teman saya, dan kami mengerjakan
              khusus di frontend-nya saja, sedangkan design-nya sudah di
              sediakan klien.
            </p>
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
