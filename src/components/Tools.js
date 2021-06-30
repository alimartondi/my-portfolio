import React from "react";
import htmlLogo from "../image/html.svg";
import cssLogo from "../image/css.svg";
import jsLogo from "../image/javascript.svg";
import reactLogo from "../image/react.svg";
import Tailwind from "../image/tailwind.svg";
import bootstrapLogo from "../image/bootstrap.svg";
import gitLogo from "../image/git.svg";

import { Col, Container, Row, Card } from "react-bootstrap";

export default function Tools() {
  return (
    <section className="tools" id="tools">
      <Container>
        <Row>
          <Col lg={6} className="tools-content text-center mx-auto">
            <h2 className="second-title">Udah bisa apa aja</h2>
            <p className="description">
              Skills maupun Tools pendukung yang saya bisa sebagai Frontend
              Developer di antaranya
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            lg={12}
            className="tools-grid d-flex flex-wrap justify-content-between align-items-center py-3"
          >
            {toolsContents.map((content, i) => (
              <Card
                className="tools-card border-0 align-items-center mb-3"
                key={i}
              >
                <img
                  src={content.image}
                  className="img-fluid"
                  alt={content.title}
                />

                <div className="tools-card-body">
                  {/* <h6 className="card-title">{content.title}</h6> */}
                </div>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

const toolsContents = [
  {
    image: htmlLogo,
    title: "HTML",
  },
  {
    image: cssLogo,
    title: "CSS",
  },
  {
    image: jsLogo,
    title: "JavaScript",
  },
  {
    image: reactLogo,
    title: "React Js",
  },
  {
    image: Tailwind,
    title: "Tailwindcss",
  },
  {
    image: bootstrapLogo,
    title: "Bootstrap",
  },
  {
    image: gitLogo,
    title: "GIT",
  },
];
