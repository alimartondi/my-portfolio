import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faCss3,
  faHtml5,
  faJs,
  faBootstrap,
  faXbox,
} from "@fortawesome/free-brands-svg-icons";

import { Col, Container, Row } from "react-bootstrap";

export default function ToolsSection() {
  return (
    <section className="tools-area" id="tools">
      <Container>
        <Row>
          <Col lg={12} className="tools-content text-center mt-5">
            <h2 className="second-title mt-5 mb-4">Udah bisa apa aja</h2>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="d-flex flex-wrap justify-content-around">
            {toolsContents.map((content, i) => (
              <div className="tools-card mt-3" key={i}>
                <div className="tools-card-header">
                  <FontAwesomeIcon icon={content.icon} />
                </div>
                <div className="tools-card-body mt-3 d-none d-md-block">
                  <h5>{content.title}</h5>
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
];
