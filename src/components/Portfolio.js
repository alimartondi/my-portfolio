import React from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import Courses from "../image/alianda-courses.png";
import Myportfolio from "../image/my-portfolio.png";
import Gadjian from "../image/gadjian.png";

export default function Portfolio() {
  return (
    <section className="portfolio " id="portfolio">
      <Container className="px-0">
        <Row>
          <Col lg={7} className="portfolio-intro text-center mx-auto">
            <h2 className="second-title">Portofolio</h2>
            <p className="description px-2 px-md-5">
              Beberapa website yang sudah dideploy menggunakan layanan hosting
              dari netlify
            </p>
          </Col>
        </Row>
        <Row>
          <div className="portfolio-items pl-md-2">
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
                  <Card.Body className="px-3 d-flex align-items-center justify-content-between">
                    <div className="card-content">
                      <p className="card-title m-0">{content.title}</p>
                      <p className="small">Figma, React & Bootsrtap</p>
                    </div>
                    <Button
                      href={content.link}
                      target="blank"
                      variant="third-button rounded-lg px-4"
                    >
                      View
                    </Button>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
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
