import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faEdit,
  faBezierCurve,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";

const contents = [
  {
    icon: faCode,
    title: "Frontend Development",
    description:
      "Solusi untuk anda yang butuh website dengan tampilan yang menarik, User Friendly dan Responsive menarik, User Friendly dan Responsive",
  },
  {
    icon: faEdit,
    title: "Web Design",
    description:
      "Tidak punya desain website sendiri? saya bisa buatkan website mulai dari desain UI, banner maupun logo sesuai kebutuhan",
  },
  {
    icon: faBezierCurve,
    title: "Graphic Design",
    description:
      "Atau butuh paket komplit untuk kebutuhan usaha anda, mulai dari website sampai aplikasi mobile? tim kami siap membantu",
  },
];

export default function ServiceSection() {
  return (
    <section className="service-area" id="service">
      <Container className="px-0">
        <Row className="justify-content-end">
          <Col lg={12} className="text-center">
            <h2 className="second-title">Layanan</h2>
            <h5 className="subtitle">Apa yang bisa saya kerjakan?</h5>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="service-items mt-4 pl-3 pl-md-2">
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
