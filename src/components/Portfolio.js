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
            <h2 className="second-title text-center">Portofolio</h2>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col lg={5}>
            <h3 className="third-title mb-4">Website Company Profile</h3>
            <p>
              Merupakan hasil kolaborasi dengan seorang teman, sebuah website
              company profile untuk InfraDigital Foundation. Dibuat menggunakan
              Gatsby dan Bootstap, dengan UI yang sudah disipakan oleh klien.
            </p>
            <Row>
              <Col className="mt-5">
                <a href="/">
                  Baca selengkapnya{" "}
                  <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
                </a>
              </Col>
            </Row>
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
