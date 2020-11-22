import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Container } from "react-bootstrap";
import Slick from "./Slick";
import Idf from "../image/idf__mockup.jpg";

export default function portFolioSection() {
  return (
    <section className="portfolio-area" id="portfolio">
      <Container>
        <Row>
          <Col lg={12} className="portfolio-content text-center">
            <h2 className="second-title">Portofolio</h2>
            <p className="description px-2">
              Website dan desain web yang pernah saya buat
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg={6} className="order-xl-2">
            <h3 className="third-title d-block d-xl-none mb-4">
              InfraDigital Foundation
            </h3>
            <div className="c_portfolio-frontend mb-4">
              <a href="https://foundation.infradigital.io/">
                <img src={Idf} alt="Infra digital" className="img-fluid" />
              </a>
            </div>
          </Col>
          <Col lg={6} className="pr-md-5">
            <p className="subtitle">Website Company Profile</p>
            <h3 className="third-title mb-4 d-none d-xl-block">
              InfraDigital Foundation
            </h3>
            <p className="description">
              Merupakan hasil kolaborasi dengan seorang teman, sebuah website
              company profile untuk InfraDigital Foundation. Dibuat menggunakan
              Gatsby dan Bootstrap, dengan UI yang sudah disipakan oleh klien.
            </p>
            <Row>
              <Col className="mt-xl-5">
                <a className="c_portfolio-link" href="/">
                  Baca selengkapnya{" "}
                  <FontAwesomeIcon className="ml-1" icon={faArrowRight} />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className="container-fluid full-width">
        <Row>
          <Col className="c_portfolio-ui mt-5">
            <h5 className="third-title">Web Desain</h5>
          </Col>
          <Col lg={12} className="portfolio-card mt-2 mt-md-5">
            <Slick />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
