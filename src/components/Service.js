import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";

const contents = [
  {
    icon: faPalette,
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias adipisci unde voluptate amet, hic aspernatur perspiciatis possimus ?",
  },
  {
    icon: faPalette,
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias adipisci unde voluptate amet, hic aspernatur perspiciatis possimus ?",
  },
  {
    icon: faPalette,
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias adipisci unde voluptate amet, hic aspernatur perspiciatis possimus ?",
  },
];

export default function ServiceSection() {
  return (
    <section className="service-area" id="service">
      <Container>
        <Row className="justify-content-end">
          <Col lg={6} className="text-right">
            <h2 className="second-title mt-5">Service</h2>
            <h5 className="subtitle">What i Do?</h5>
          </Col>
        </Row>
        <Row>
          <Col
            lg={12}
            className="service-items d-flex flex-wrap justify-content-between mt-5"
          >
            {contents.map((content, i) => (
              <div className="service-card" key={i}>
                <div className="card-head d-flex pt-3 justify-content-center">
                  <div className="card-icon">
                    <FontAwesomeIcon icon={content.icon}></FontAwesomeIcon>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center mb-4">
                    {content.title}
                  </h5>
                  <p className="description">{content.description}</p>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
