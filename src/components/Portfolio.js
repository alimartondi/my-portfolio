import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import Idf from "../image/idf__mockup.jpg";
import House from "../image/the_house.png";
import Gowes from "../image/gowes.png";
import Coffe from "../image/coffe.png";

export default function portfolioSection() {
  return (
    <section className="portfolio-area" id="portfolio">
      <Container>
        <Row>
          <Col lg={9} className="portfolio-intro text-center mx-auto">
            <h2 className="second-title">Portofolio</h2>
            <p className="description px-2 px-md-5">
              Berikut beberapa website dan desain web yang pernah saya buat,
              sebagian masih merupakan desain dan sebagian sudah menjadi website
              yang utuh
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg={6} className="order-xl-2">
            <h3 className="third-title d-block d-lg-none mb-4">
              Website Company Profile
            </h3>
            <div className="c_portfolio-frontend mb-4">
              <a href="https://foundation.infradigital.io/">
                <img src={Idf} alt="Infra digital" className="img-fluid" />
              </a>
            </div>
          </Col>
          <Col lg={6} className="portfolio-content pr-xl-5 pl-lg-5 pl-xl-0">
            <p className="subtitle">Frontend Development</p>
            <h3 className="third-title mb-4 d-none d-lg-block">
              Website Company Profile
            </h3>
            <p className="description">
              Merupakan hasil kolaborasi dengan seorang teman, sebuah website
              company profile untuk InfraDigital Foundation. Dibuat menggunakan
              Gatsby dan Bootstrap, dengan UI yang sudah disipakan oleh klien.
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="px-0">
        <Row className="web-design-intro mt-5 p-3">
          <Col lg={12}>
            <p className="subtitle">Web Design</p>
            <h3 className="third-title">Landing Page</h3>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="web-design-items pl-3 pl-md-2">
            <div className="web-design-grid">
              {webDesignContents.map((content, i) => (
                <Card className="web-design-card" key={i}>
                  <Card.Header>
                    <img
                      src={content.image}
                      alt={content.alt}
                      className="img-fluid"
                    />
                  </Card.Header>
                  {/* <Card.Body>
                    <p className="subtitle">{content.title}</p>
                  </Card.Body> */}
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

const webDesignContents = [
  {
    image: House,
    alt: "Web Design",
    title: "Landing Page",
  },
  {
    image: Coffe,
    alt: "Web Design",
    title: "Landing Page",
  },
  {
    image: Gowes,
    alt: "Web Design",
    title: "Landing Page",
  },
];
