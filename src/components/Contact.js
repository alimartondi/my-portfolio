import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Alianda from "../image/a__about.png";

export default function ContactSection() {
  return (
    <section className="contact-area" id="contact">
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
              <p className="description text-white w-sm-50 mt-4">
                Sedang menjalani profesi sebagai Freelance, sambil mencari
                pekerjaan full time
              </p>
              <Button
                variant="light rounded-lg px-3 mt-5 mb-4 mb-md-0"
                href="mailto:alimartondi88@gmail.com"
              >
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
