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
              <h6>Hello, I am</h6>
              <h1 className="main-title">
                Frontend
                <br />
                Developer
              </h1>
              <p className="mt-4">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
              <div className="hero-btn d-block d-md-flex text-center mt-5">
                <Button className="main-button shadow-sm">Hire Me!</Button>
                <Button className="second-button shadow-sm">
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
