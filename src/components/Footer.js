import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import FooterBrand from "../image/web-brand.png";
import Logo from "../image/logo.png";
import BatubaraWhite from "../image/batubara_white.png";
import BatubaraWhiteMobile from "../image/batubara_white_xs.png";
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function footerSection() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <section className="footer-area" id="footer">
      <div className="footer">
        <Container>
          <Row>
            <Col lg={12} className="footer-items text-center">
              <div className="footer-brand mt-5">
                <img
                  src={BatubaraWhite}
                  alt="footer-logo"
                  onClick={scrollToTop}
                  className="d-none d-md-block mx-auto"
                />
                <img
                  src={BatubaraWhiteMobile}
                  alt="footer-logo"
                  onClick={scrollToTop}
                  className="d-block d-md-none mx-auto"
                />
              </div>

              <h5 className="footer-email mt-3 mt-md-5">
                <a href="mailto:alimartondi88@gmail.com">
                  alimartondi88@gmail.com
                </a>
              </h5>
              <div className="social-media d-flex justify-content-around mt-3 px-5">
                <a
                  href="https://www.instagram.com/alianda_batubara/"
                  className="footer-social-media"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://www.instagram.com/alianda_batubara/"
                  className="footer-social-media"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  href="https://www.facebook.com/alianda_batubara/"
                  className="footer-social-media"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="https://wa.me/6281382748686"
                  className="footer-social-media"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={12} className="text-right">
              <hr />
              <h6 className="copyright-text text-center text-md-right mb-5">
                &copy; All Rights Reserved.
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
