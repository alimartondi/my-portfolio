import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Container } from "react-bootstrap";
import Slick from "./Slick";
import MacBook from "../image/81.png";

export default function portFolioSection() {
  return (
    <section className="portfolio-area" id="portfolio">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="second-title">Portfolio</h2>
            <h5 className="third-title">Frontend</h5>
            <h5 className="subtitle">Website yang pernah saya buat</h5>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col lg={5}>
            <h5>Infra Digital Foundation</h5>
            <p>
              Merupakan project pertama saya secara profesional, dibuat
              menggunakan react dan react-bootstrap. Saya mengerjakan projek ini
              bersama satu orang teman saya teman saya, dan kami mengerjakan
              khusus di frontend-nya saja, sedangkan design-nya sudah di
              sediakan klien.
            </p>
            <a href="/">
              Baca selengkapnya{" "}
              <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
            </a>
          </Col>
          <Col lg={7}>
            <div className="c_portfolio-frontend mb-4">
              <a href="https://foundation.infradigital.io/">
                <img src={MacBook} alt="MacBook" className="img-fluid" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="c_portfolio-ui mt-5">
            <h5 className="third-title">UI/UX Desain</h5>
            <h5 className="subtitle">Beberapa contoh UI website</h5>
          </Col>
          <Col lg={12} className="portfolio-card mt-5">
            <Slick />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
