import React from "react";
import "../style/notfound.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button, Container } from "react-bootstrap";

export default function NotFoundScreen() {
  return (
    <section className="404-not-found">
      <Container>
        <div id="notfound">
          <div class="notfound">
            <div class="notfound-404">
              <h3>Oops! Page not found</h3>
              <h1>
                <span>4</span>
                <span>0</span>
                <span>4</span>
              </h1>
            </div>
            <h3>we are sorry, but the page you requested was not found</h3>
            <Button variant="outline-dark rounded-pill px-4" href="/">
              Back Home!
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
