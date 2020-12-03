import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import Profil_pic from "../image/a__profil.jpg";
import { Link } from "react-router-dom";
import AboutPic from "../image/a___about.png";

export default function () {
  return (
    <section className="about-area mt-5" id="about">
      <Container>
        <Row>
          <Col lg={9} className="about-intro text-center mt-4 mb-4 mx-auto">
            <h2 className="second-title">Tentang Saya</h2>
          </Col>
        </Row>
        <Row>
          <Col lg={6} className="about-content justify-content-center">
            <img
              src={AboutPic}
              alt="About profile"
              className="img-fluid d-none d-md-block mx-auto mb-3"
            />
          </Col>
          <Col lg={6} className="about-profile">
            <p>
              Kenalin nama saya Alimartondi, biasa dipanggil Ali. Sejak di
              bangku sekolah menengah atas saya sangat menyukai yang namanya
              komputer, saat itu dikampung saya lagi maraknya warnet,
            </p>
            <img
              src={AboutPic}
              alt="About profile"
              className="img-fluid d-bloc d-md-none mb-3"
            />
            <p>
              Datang ke Jakarta pada tahun 2015 dengan tekad kuliah jurusan
              komputer, sesederhana itu. dengan berbagai alasan dan pertimbangan
              akhirnya saya terdaftar di salah satu perguruan tinggi di jakarta
            </p>
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
