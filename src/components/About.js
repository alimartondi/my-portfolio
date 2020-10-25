import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import Profil_pic from "../image/a__profil.jpg";
import { Link } from "react-router-dom";

export default function () {
  return (
    <section className="about-area" id="about">
      <Container>
        <Row>
          {contents.map((content, i) => (
            <Col md={6} className="about-content" key={i}>
              <h2 className="about-content-title second-title">
                {content.title}
              </h2>
              <p
                className="about-content-desc"
                style={{ whiteSpace: "pre-line" }}
              >
                {content.message}
              </p>
              <Row>
                <Col>
                  <Link className="information-link" to="/about">
                    Cerita Selengkapnya
                    <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
                  </Link>
                </Col>
              </Row>
            </Col>
          ))}
          <Col md={6} className="about-profile">
            <div className="about-card d-block d-xl-flex">
              <div className="card-image d-flex justify-content-center">
                <img
                  src={Profil_pic}
                  className="img-fluid
                rounded-circle"
                  height="300"
                  alt="Profil"
                />
              </div>
              <div className="about-card-body">
                <h5 className="card-name">Ali Martondi Batubara</h5>
                <h6 className="card-profession">Frontend Developer</h6>

                <hr />
                <div className="card-contact">
                  <ul>
                    <li className="c__card-link">
                      <a href="mailto:alimartondi88@gmail.com">
                        alimartondi88@gmail.com
                      </a>
                    </li>
                    <li className="c__card-link">
                      <a href="https://wa.me/6281382748686">+62813-8274-8686</a>
                    </li>
                  </ul>
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
    title: `Tentang saya`,
    message: `Perkenalkan nama saya Ali Martondi, saya seorang Frontend Developer, sarjana Teknik Informatika dari salah satu perguruan tinggi di Jakarta. Saya berasal dari Mandailing Natal, Sumatera Utara, dan sekarang tinggal di Pasar Minggu, Jakarta Selatan.
    
    Saya menggunakan React dan Bootstrap dalam membuat Frontend sebuah website, termasuk website Portfolio ini juga dibuat menggunakan kedua framework tersebut.
    
    Saya belum punya pengalaman bekerja full time, namun saya sudah pernah mengerjakan project sungguhan sebuah website untuk Infra Digital Foundation yang link demonya bisa ditemukan di bagian Portfolio website ini.`,
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
    percent: "80%",
    progresbar: "80",
  },
];
