import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Alianda from "../image/a__about.png";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="contact-card mt-lg-5">
              <div className="contact-card__body d-block d-md-flex align-items-md-center justify-content-md-between px-4 px-lg-0 ">
                <div className="contact-card__content pl-md-3 pl-lg-5">
                  <h1 className="second-title text-light">
                    Tertarik bekerja sama dengan saya?
                  </h1>
                  <p className="description text-white mt-4">
                    Sedang menjalani profesi sebagai Freelance, sambil mencari
                    pekerjaan full time
                  </p>
                  <Button
                    className="second-button px-3 mt-3 mb-4 mb-md-0"
                    href="mailto:alimartondi88@gmail.com"
                  >
                    Kontak Saya
                  </Button>
                </div>
                <img
                  src={Alianda}
                  alt="alianda-batubara"
                  className="card-contact-img text-center pr-md-3 pr-lg-5 img-fluid "
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
