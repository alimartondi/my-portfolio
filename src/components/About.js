import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import Dybala from "../image/dyb.png";

export default function () {
  return (
    <section className="about-area" id="about">
      <Container>
        <Row>
          {contents.map((content, i) => (
            <Col sm={6} className="about-content mt-6" key={i}>
              <h2 className="second-title">{content.title}</h2>
              <p className="about-desc" style={{ whiteSpace: "pre-line" }}>
                {content.message}
              </p>
              <Row>
                <Col>
                  <a className="information-link" href="/">
                    Lebih Lanjut
                    <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
                  </a>
                </Col>
              </Row>
            </Col>
          ))}
          <Col sm={6} className="about-profile">
            <div className="about-card text-center mt-5 d-block d-xl-flex">
              <div className="card-image justify-content-center">
                <img
                  src={Dybala}
                  className="img-fluid
                rounded-circle"
                  height="300"
                  alt=""
                />
              </div>
              <div className="card-body text-center">
                <div className="card-title">
                  <h5>Ali Martondi</h5>
                </div>
                <div className="card-description">
                  <p>
                    Frontend Developer
                    <br />
                    alimartondi88@gmail.com
                    <br />
                    +6281 38274 8686
                  </p>
                </div>
              </div>
            </div>
            <div className="about-skill mt-5">
              {skillContents.map((content, i) => (
                <SkillProgress
                  key={i}
                  title={content.title}
                  percent={content.percent}
                  progresbar={content.progresbar}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

const contents = [
  {
    title: `About Me`,
    message: `Direx ipsum dolor sit amet consectetur adipisicing elit. Aut natus sit magnam laboriosam, dolorem unde, autem eligendi molestias praesentium dignissimos consequatur deleniti optio earum tenetur eos porro ad ipsum illo voluptatum sunt reiciendis,repudiandae repellendus incidunt perferendis quaerat reiciendis,repudiandae expedita. 

    Unde sequi natus laboriosam aperiam nemo error earum quia ea, perspiciatis deleniti, eaque temporibus.reiciendis,repudiandae reiciendis,repudiandae Illum nihil voluptatum facere doloremque ab? Minima ipsam est expedita reiciendis,repudiandae. Accusamus, consequatur reiciendis,repudiandae  earum. Tempora, natus autem. reiciendis,repudiandae Inventore iusto nemo eaque consequuntur?`,
  },
];

function SkillProgress(props) {
  return (
    <div className="skill-item">
      <div className="skill-header d-flex justify-content-between mt-3">
        <h6>{props.title}</h6>
        <h6>{props.percent}</h6>
      </div>
      <div className="skill-bar">
        <ProgressBar now={props.progresbar} />
      </div>
    </div>
  );
}

const skillContents = [
  {
    title: "HTML",
    percent: "92%",
    progresbar: "92",
  },
  {
    title: "CSS",
    percent: "90%",
    progresbar: "90",
  },
  {
    title: "JavaScript",
    percent: "78%",
    progresbar: "78",
  },
];
