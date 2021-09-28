import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Courses from "../image/online-course.png";
import Moriba from "../image/moriba.png";

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <Container>
        <Row className="mb-2 mb-md-4">
          <Col lg={7} className="portfolio-intro text-center mx-auto">
            <h2 className="second-title">Hasil kerjaan saya</h2>
          </Col>
        </Row>
        <Row className="mt-4">
          {webDesignContents.map((content, i) => (
            <Col md={6} key={i} className="portfolio-items">
              <a href={content.link}>
                <img
                  src={content.image}
                  alt={content.alt}
                  className="img-fluid mb-4"
                />
              </a>
            </Col>
          ))}
        </Row>
      </Container>
      <Container className="px-0"></Container>
    </section>
  );
}

const webDesignContents = [
  {
    image: Courses,
    alt: "Landing page ounline courses",
    title: "Ounline Courses",
    body: "Made with React & Bootstrap",
    link: "https://aliandacourses.netlify.app/",
  },
  {
    image: Moriba,
    alt: "Landing page my portfolio",
    title: "My Portfolio",
    body: "Made with React & Bootstrap",
    link: "https://moriba.netlify.app/",
  },
];
