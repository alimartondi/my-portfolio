import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faCss3Alt,
  faHtml5,
  faJs,
  faBootstrap,
  faXbox,
  faFigma,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import Tailwind from "../image/tailwind.svg";
import Illustrator from "../image/illustrator.svg";
import Adobexd from "../image/adobexd.svg";

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
                  <img src={content.img} alt="" />
                </div>
                <div className="tools-card-body">
                  <h5 className="card-title">{content.title}</h5>
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
    icon: faCss3Alt,
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
    img: Tailwind,
    title: "Tailwindcss",
  },
  {
    icon: faBootstrap,
    title: "Bootstrap",
  },
  {
    icon: faGitAlt,
    title: "GIT",
  },
  {
    icon: faFigma,
    title: "Figma",
  },
  {
    img: Adobexd,
    title: "Adobe XD",
  },
  {
    img: Illustrator,
    title: "Illustrator",
  },
];
