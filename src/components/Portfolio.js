import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import House from "../image/the_house.png";
import Gowes from "../image/gowes.png";
import Coffe from "../image/coffe.png";

export default function portfolioSection() {
  return (
    <section className="portfolio-area " id="portfolio">
      <Container className="px-0">
        <Row>
          <Col lg={9} className="portfolio-intro text-center mx-auto">
            <h2 className="second-title">Portofolio</h2>
            <p className="description px-2 px-md-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, saepe!
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="web-design-items pl-3 pl-md-2">
            <div className="web-design-grid">
              {webDesignContents.map((content, i) => (
                <Card className="portfolio-card" key={i}>
                  <Card.Header className="p-0">
                    <img
                      src={content.image}
                      alt={content.alt}
                      className="img-fluid"
                    />
                  </Card.Header>
                  <Card.Body>
                    <p className="card-title">{content.title}</p>
                    <p className="description">{content.body}</p>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="px-0"></Container>
    </section>
  );
}

const webDesignContents = [
  {
    image: House,
    alt: "Web Design",
    title: "Landing Page",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, quia?",
  },
  {
    image: Coffe,
    alt: "Web Design",
    title: "Landing Page",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, quia?",
  },
  {
    image: Gowes,
    alt: "Web Design",
    title: "Landing Page",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, quia?",
  },
];
