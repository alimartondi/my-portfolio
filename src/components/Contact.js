import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Alianda from "../image/a__about.png";

export default function ContactSection() {
  return (
    <section className="contact-area mt-5" id="contact">
      <Container>
        <Row>
          <Col
            lg="12"
            className="contact-card d-block d-md-flex mt-5 align-items-md-center justify-content-md-between"
          >
            <div className="contact-card-body text-center text-md-left mb-3 pl-md-5">
              <h1 className="second-title text-light">
                Tertarik bekerja sama
                <br />
                dengan saya?
              </h1>
              <Button variant="light rounded-lg px-3 mt-5 mb-4 mb-md-0">
                Kontak Saya
              </Button>
            </div>
            <div className="card-contact-img text-center pr-md-5">
              <img src={Alianda} alt="Alianda Batubara" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
