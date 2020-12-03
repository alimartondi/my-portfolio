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
            className="contact-card d-block d-md-flex h-md-50 mt-5 align-items-md-center"
          >
            <div className="card-body text-center text-md-left">
              <h5 className="third-title text-light">
                Tertarik bekerja sama dengan saya?
              </h5>
              <Button variant="outline-light rounded-pill mt-2 mb-3">
                Kontak Saya
              </Button>
            </div>
            <div className="card-contact-img text-center text-md-right pr-md-4">
              <img
                src={Alianda}
                alt="Alianda Batubara"
                className="img-fluid mt-md-n5"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
