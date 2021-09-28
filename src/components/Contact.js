import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <Container>
        <Row>
          <Col lg={12} className="justify-content-center">
            <div className="contact-content">
              <Col md={6} className="mx-auto py-5">
                <h1 className="second-title text-light">
                  Tertarik bekerja sama dengan saya?
                </h1>
                <p className="description text-white mt-3">
                  Saya bisa membantu membuat website yang menarik dan
                  responsive, baik secara team maupun individu
                </p>
                <Button
                  variant="second-button"
                  size="lg"
                  className="mt-5"
                  href="mailto:alimartondi88@gmail.com"
                >
                  Kontak Saya
                </Button>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
