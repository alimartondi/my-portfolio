import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Uiux from "../image/uiux.svg";
import Frontend from "../image/frontend.svg";
import Design from "../image/design.svg";

export default function ServiceSection() {
  return (
    <section className="service-area mt-5" id="service">
      <Container className="px-0">
        <Row className="justify-content-end">
          <Col lg={12} className="text-center">
            <h2 className="second-title">Layanan</h2>
            <h5 className="subtitle">Apa yang bisa saya kerjakan?</h5>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="service-items pl-md-2">
            <div className="service-items__grid">
              {contents.map((content, i) => (
                <Card className="service-card rounded-lg border-0 pt-3" key={i}>
                  <Card.Header className="bg-white border-0">
                    <img
                      src={content.image}
                      alt={content.title}
                      className="img-fluid"
                    />
                  </Card.Header>
                  <Card.Body>
                    <h5 className="card-title">{content.title}</h5>
                    <p className="description mt-4 px-3">
                      {content.description}
                    </p>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

const contents = [
  {
    image: Uiux,
    title: "UI/UX Design",
    description:
      "Solusi untuk anda yang butuh website dengan tampilan yang menarik, User Friendly dan Responsive menarik, User Friendly dan Responsive",
  },
  {
    image: Frontend,
    title: "Front-end",
    description:
      "Tidak punya desain website sendiri? saya bisa buatkan website mulai dari desain UI, banner maupun logo sesuai kebutuhan",
  },
  {
    image: Design,
    title: "Web Design",
    description:
      "Atau butuh paket komplit untuk kebutuhan usaha anda, mulai dari website sampai aplikasi mobile? tim kami siap membantu",
  },
];
