import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faStoreAlt } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";

const contents = [
  {
    icon: faUserTie,
    title: "Personal Website",
    description: "Website portfolio",
  },
  {
    icon: faBuilding,
    title: "Company Profile",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias adipisci unde voluptate amet, hic aspernatur perspiciatis possimus ?",
  },
  {
    icon: faStoreAlt,
    title: "Online Shop",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias adipisci unde voluptate amet, hic aspernatur perspiciatis possimus ?",
  },
];

export default function ServiceSection() {
  return (
    <section className="service-area" id="service">
      <Container>
        <Row className="justify-content-end">
          <Col lg={12} className="text-center">
            <h2 className="second-title">Layanan</h2>
            <h5 className="subtitle">Apa yang bisa saya kerjakan?</h5>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="service-items mt-4">
            <div className="service-items-grid">
              {contents.map((content, i) => (
                <div className="service-card" key={i}>
                  <div className="card-icon mx-auto">
                    <FontAwesomeIcon icon={content.icon}></FontAwesomeIcon>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{content.title}</h5>
                    <p className="description mt-2">{content.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
