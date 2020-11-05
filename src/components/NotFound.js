import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function NotFoundScreen() {
  return (
    <section className="404-not-found">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="not-found-card">
              <p>Mohon maaf, saat ini belum konten belum tersedia!</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
