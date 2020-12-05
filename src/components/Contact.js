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
            <div className="contact-card-body text-center text-md-left mb-3 pl-md-4">
              <h5 className="third-title text-light">
                Tertarik bekerja sama dengan saya?
              </h5>
              <Button variant="light rounded-pill px-3 mt-2 mb-4 mb-md-0 shadow-lg">
                Kontak Saya
              </Button>
            </div>
            <div className="card-contact-img text-center pr-md-4">
              <img src={Alianda} alt="Alianda Batubara" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
