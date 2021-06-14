import React from "react";
import Alianda from "../image/alianda1.png";
import { Container, Button } from "react-bootstrap";
import "../style/style.css";

export default function mainSection() {
  return (
    <section className="main-area" id="main">
      <div className="banner bg-light">
        <Container>
          <div className="hero-banner d-block d-lg-flex justify-content-between">
            <div className="hero-content">
              <h1 className="main-title">
                Hallo, Saya Seorang Frontend Developer
              </h1>
              <p className="description mt-4">
                Saya lulusan Teknik Informatika, bisa React, Bootstrap dan
                Tailwindcss. Selain Programming saya juga menyukai Desain UI-UX,
                Fotografi dan Desain Grafis.
              </p>
              <div className="hero-btn d-block d-md-flex mt-5">
                <Button
                  href="mailto:alimartondi88@gmail.com"
                  className="main-button"
                >
                  Hubungi Saya
                </Button>
              </div>
            </div>
            <div className="hero-image px-5 text-center">
              <img src={Alianda} className="img-fluid" alt="banner" />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
