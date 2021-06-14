import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Idf from "../image/idf.png";

export default function Project() {
  return (
    <section className="project pb-5" id="project">
      <Container>
        <Row className="align-items-lg-center">
          <Col
            md={6}
            className="text-left pr-md-5 order-2 order-md-1 mt-4 mt-md-0"
          >
            <h2 className="second-title">
              Buah dari pertama kali kenalan dengan React
            </h2>
            <h5 className="description mt-4 mb-5">
              Pertama kali dikenalin React oleh teman, membuat Website Landing
              Page untuk Infradigital Foundation. Dapat tugas untuk
              menerjemahkan desain UI kedalam kode HTML dan CSS menggunakan
              Bootstrap.
            </h5>
            <Button
              className="main-button"
              href="https://foundation.infradigital.io/"
              target="blank"
            >
              Lebih lanjut
              <FontAwesomeIcon icon={faChevronRight} className="ml-2 small" />
            </Button>
          </Col>
          <Col md={6} className="project-image order-1 order-md-2">
            <img src={Idf} alt="project-idf" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
