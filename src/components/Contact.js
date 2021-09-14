import React from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <Container>
        <Row>
          <Col lg={12}>
            <Card className="contact-card mt-lg-5 py-5 border-0">
              <div className="contact-card__body d-block d-md-flex align-items-md-center justify-content-md-between px-4 px-lg-0 ">
                <div className="contact-card__content pl-md-3 pl-lg-5 text-center text-md-left">
                  <h1 className="second-title text-light">
                    Tertarik bekerja sama dengan saya?
                  </h1>
                  <p className="description text-white mt-4">
                    Sedang menjalani profesi sebagai Freelance, sambil mencari
                    pekerjaan full time
                  </p>
                  <Button
                    variant="second-button"
                    size="lg"
                    className="mt-5"
                    href="mailto:alimartondi88@gmail.com"
                  >
                    Kontak Saya
                  </Button>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
