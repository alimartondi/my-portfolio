import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FooterBrand from "../image/web-brand.png";
import Facebook from "../image/facebook-icon.svg";
import Instagram from "../image/instagram-fill-icon.svg";
import Twitter from "../image/twitter-icon.svg";

export default function footerSection() {
  return (
    <section className="footer-area" id="footer">
      <div className="footer">
        <Container>
          <Row>
            <Col lg={12} className="justify-content-center">
              <div className="footer-items text-center mx-auto">
                <div className="footer-brand">
                  <img src={FooterBrand} alt="web-brand" />
                </div>

                <div className="footer-link">
                  <ul className="d-flex justify-content-between">
                    <li>Home</li>
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>Service</li>
                    <li>Contact</li>
                  </ul>
                </div>

                <h5 className="footer-email mt-4">
                  <a href="/">alimartondi88@gmail.com</a>
                </h5>

                <div className="social-media d-flex mt-3 w-50 justify-content-around mx-auto">
                  <a
                    href="https://www.instagram.com/alianda_batubara/"
                    className="footer-social-media"
                  >
                    <img src={Instagram} alt="Instagram Icon" />
                  </a>
                  <a
                    href="https://www.instagram.com/alianda_batubara/"
                    className="footer-social-media"
                  >
                    <img src={Facebook} alt="Facebook Icon" />
                  </a>
                  <a
                    href="https://www.facebook.com/alianda_batubara/"
                    className="footer-social-media"
                  >
                    <img src={Twitter} alt="Instagram Icon" />
                  </a>
                </div>
              </div>
              <hr />
              <h6 className="copyright-text">&copy; All Rights Reserved.</h6>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
