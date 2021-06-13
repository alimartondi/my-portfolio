import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Project from "../image/idf.png";

export default function ProjectSection() {
  return (
    <section className="project-area" id="project">
      <Container>
        <Row className="align-items-md-center">
          <Col
            md={6}
            className="text-left pr-md-5 order-2 order-md-1 mt-4 mt-md-0"
          >
            <h2 className="second-title">
              Buah dari pertama kali kenalan dengan React
            </h2>
            <h5 className="description mt-4 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur non earum est debitis possimus perferendis enim,
              nesciunt doloremque laboriosam dignissimos.
            </h5>
            <Button className="main-button">Visit Website</Button>
            {/* <a href="https://foundation.infradigital.io/" target="blank">
              Kunjungi website
              <FontAwesomeIcon
                className="small ml-2"
                icon={faChevronRight}
              ></FontAwesomeIcon>
            </a> */}
          </Col>
          <Col md={6} className="project-image mt-5 mt-md-0 order-1 order-md-2">
            <img src={Project} alt="project-idf" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
