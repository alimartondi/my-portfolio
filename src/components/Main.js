import React from "react";
import Alianda from "../image/alianda1.png";
import { Container, Button } from "react-bootstrap";
import "../style/style.css";

export default function mainSection() {
  return (
    <section className="main-area" id="main">
      <div className="banner bg-light shadow-sm">
        <Container>
          <div className="hero-banner d-block d-md-flex justify-content-between">
            <div className="hero-content">
              <p className="description ml-1">Hallo, Saya Ali Martondi</p>
              <h1 className="main-title">
                Frontend
                <br />
                Developer
              </h1>
              <p className="description mt-4 ml-1">
                Lulusan S1 Teknik Informatika Nusa Mandiri Jakarta tahun 2020,
                familiar dengan React dan Bootstrap, bisa bekerja secara tim
                maupun individu. Saya berasal dari Mandailing Sumatera Utara.
              </p>
              <div className="hero-btn d-block d-md-flex text-center mt-5">
                <Button
                  href="mailto:alimartondi88@gmail.com"
                  variant="dark"
                  className="main-button shadow-sm ml-md-1"
                >
                  Hire Me!
                </Button>
                <Button variant="none" className="second-button">
                  Download My CV!
                </Button>
              </div>
            </div>
            <div className="hero-image">
              <img src={Alianda} className="img-fluid" alt="banner" />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
