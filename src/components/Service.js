import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faBezierCurve } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";

const contents = [
  {
    icon: faPalette,
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias adipisci unde voluptate amet, hic aspernatur perspiciatis possimus ?",
  },
  {
    icon: faCode,
    title: "Frontend Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias adipisci unde voluptate amet, hic aspernatur perspiciatis possimus ?",
  },
  {
    icon: faBezierCurve,
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias adipisci unde voluptate amet, hic aspernatur perspiciatis possimus ?",
  },
];

export default function ServiceSection() {
  return (
    <section className="service-area" id="service">
      <Container>
        <Row className="justify-content-end">
          <Col lg={6} className="text-right mt-5">
            <h2 className="second-title">Layanan</h2>
            <h5 className="subtitle">Apa yang saya kerjakan?</h5>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="service-items d-flex flex-wrap mt-5">
            {contents.map((content, i) => (
              <div className="service-card" key={i}>
                <div className="card-head d-flex pt-3 justify-content-center">
                  <div className="card-icon">
                    <FontAwesomeIcon icon={content.icon}></FontAwesomeIcon>
                  </div>
                </div>
                <div className="card-body">
                  <div className="text-center mb-4">
                    <h5 className="card-title">{content.title}</h5>
                  </div>
                  <p className="card-description">{content.description}</p>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
