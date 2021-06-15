import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faCss3,
  faHtml5,
  faJs,
  faBootstrap,
  faXbox,
  faFigma,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

import { Col, Container, Row } from "react-bootstrap";

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
          <Col lg={12} className="tools-grid">
            {toolsContents.map((content, i) => (
              <div className="tools-card" key={i}>
                <div className="tools-card-header">
                  <FontAwesomeIcon icon={content.icon} />
                </div>
                <div className="tools-card-body">
                  <h5 className="description">{content.title}</h5>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

const toolsContents = [
  {
    icon: faHtml5,
    title: "HTML",
  },
  {
    icon: faCss3,
    title: "CSS",
  },
  {
    icon: faJs,
    title: "JavaScript",
  },
  {
    icon: faReact,
    title: "React Js",
  },
  {
    icon: faXbox,
    title: "Adobe XD",
  },
  {
    icon: faBootstrap,
    title: "Bootstrap",
  },
  {
    icon: faHtml5,
    title: "Tailwind",
  },
  {
    icon: faFigma,
    title: "Figma",
  },
  {
    icon: faFigma,
    title: "Illustrator",
  },
  {
    icon: faGitAlt,
    title: "GIT",
  },
];
