import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import Courses from "../image/alianda-courses.png";
import Myportfolio from "../image/my-portfolio1.png";
import Gadjian from "../image/gadjian.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFigma,
  faReact,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

export default function Portfolio() {
  return (
    <section className="portfolio " id="portfolio">
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
                <Card className="portfolio-card border-0 text-left" key={i}>
                  <Card.Header className="p-0 border-0">
                    <img
                      src={content.image}
                      alt={content.alt}
                      className="img-fluid"
                    />
                  </Card.Header>
                  <Card.Body className="px-3">
                    <p className="card-title m-0">{content.title}</p>
                    <p className="description mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Animi, reiciendis!
                    </p>
                    <div className="card-content d-flex justify-content-start">
                      <FontAwesomeIcon icon={faFigma} />
                      <FontAwesomeIcon icon={faReact} />
                      <FontAwesomeIcon icon={faBootstrap} />
                      <Card.Link
                        href={content.link}
                        target="blank"
                        className="ml-auto"
                      >
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                      </Card.Link>
                    </div>
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
    image: Courses,
    alt: "Landing page ounline courses",
    title: "Ounline Courses",
    body: "Made with React & Bootstrap",
    link: "https://aliandacourses.netlify.app/",
  },
  {
    image: Myportfolio,
    alt: "Landing page my portfolio",
    title: "My Portfolio",
    body: "Made with React & Bootstrap",
    link: "https://aliandabatubara.netlify.app/",
  },
  {
    image: Gadjian,
    alt: "Admin dashboard gadjian",
    title: "Gadjian",
    body: "Made with React & Bootstrap",
    link: "https://aliandagadjian.netlify.app/",
  },
];
