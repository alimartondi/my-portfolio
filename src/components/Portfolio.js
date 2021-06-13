import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import Courses from "../image/alianda-courses.png";
import Portfolio from "../image/my-portfolio.png";
import Gadjian from "../image/gadjian.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function portfolioSection() {
  return (
    <section className="portfolio-area " id="portfolio">
      <Container className="px-0">
        <Row>
          <Col lg={7} className="portfolio-intro text-center mx-auto">
            <h2 className="second-title">Sudah pernah buat apa</h2>
            <p className="description px-2 px-md-5">
              Beberapa project website yang sudah dideploy menggunakan layanan
              gratis dari netlify
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="portfolio-items pl-md-2">
            <div className="portfolio-items__grid">
              {webDesignContents.map((content, i) => (
                <Card
                  className="portfolio-card border-0 rounded-lg text-left"
                  key={i}
                >
                  <Card.Header className="p-0 rounded-top-lg border-0">
                    <img
                      src={content.image}
                      alt={content.alt}
                      className="img-fluid"
                    />
                  </Card.Header>
                  <Card.Body className="px-3">
                    <p className="card-title">{content.title}</p>
                    <p className="description">{content.body}</p>
                  </Card.Body>
                  <hr className="p-0 m-0" />
                  <Card.Link className="text-right py-3 px-4">
                    <a href={content.link} target="blank">
                      KUNJUNGI{" "}
                      <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                    </a>
                  </Card.Link>
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
    image: Courses,
    alt: "Landing page ounline courses",
    title: "Ounline Courses",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, quia?",
    link: "https://aliandacourses.netlify.app/",
  },
  {
    image: Portfolio,
    alt: "Landing page my portfolio",
    title: "My Portfolio",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, quia?",
    link: "https://aliandabatubara.netlify.app/",
  },
  {
    image: Gadjian,
    alt: "Admin dashboard gadjian",
    title: "Gadjian",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, quia?",
    link: "https://aliandagadjian.netlify.app/",
  },
];
