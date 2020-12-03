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
              <p className="description ml-1">Hallo, saya seorang</p>
              <h1 className="main-title">
                Frontend
                <br />
                Developer
              </h1>
              <p className="description mt-4 ml-1">
                Lulusan S1 Teknik Informatika Nusa Mandiri Jakarta, saya berasal
                dari Mandailing Natal - Sumatera Utara, marga saya batubara.
                Selain programming saya juga menyukai dunia Fotografi dan Desain
                Grafis.
              </p>
              <div className="hero-btn d-block d-md-flex text-center mt-5">
                <Button
                  href="mailto:alimartondi88@gmail.com"
                  variant="dark"
                  className="main-button shadow-sm ml-md-1"
                >
                  Hire Me!
                </Button>
                <Button variant="outline-dark" className="second-button">
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
