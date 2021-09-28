import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import Idf from "../image/web-idf.png";

export default function Project() {
  return (
    <section className="project" id="project">
      <Container>
        <Row className="align-items-lg-center">
          <Col
            md={6}
            className="text-left pr-md-5 order-2 order-md-1 mt-5 mt-md-0"
          >
            <h2 className="second-title">Pertama kali kenal React</h2>
            <h5 className="description mt-4 mb-5">
              Pertama kali dikenalin React oleh teman, membuat Website Landing
              Page untuk Infradigital Foundation. Dapat tugas untuk
              menerjemahkan desain UI kedalam kode HTML dan CSS menggunakan
              React dan Bootstrap.
            </h5>
            <a href="https://foundation.infradigital.io/" target="blank">
              Selengkapnya
              <FontAwesomeIcon icon={faChevronRight} className="ms-2 small" />
            </a>
          </Col>
          <Col md={6} className="order-1 order-md-2">
            <div className="project-image">
              <img src={Idf} alt="project-idf" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
