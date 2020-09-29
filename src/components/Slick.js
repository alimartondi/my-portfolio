import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slick from "../image/slick1.jpg";
import Slick2 from "../image/slick2.png";
import Slide from "../image/slide-portfolio.png";
import { Row, Col } from "react-bootstrap";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            arrows: false,
            variableWidth: true,
            dots: false,
          },
        },
      ],
    };
    return (
      <Slider {...settings}>
        <Col lg={12}>
          <div className="portfolio-card-wrap">
            <img className="img-fluid" src={Slide}></img>
          </div>
        </Col>
        <Col lg={12}>
          <div className="portfolio-card-wrap">
            <img className="img-fluid" src={Slide}></img>
          </div>
        </Col>
        <Col lg={12}>
          <div className="portfolio-card-wrap">
            <img className="img-fluid" src={Slick}></img>
          </div>
        </Col>
        <Col lg={12}>
          <div className="portfolio-card-wrap">
            <img className="img-fluid" src={Slide}></img>
          </div>
        </Col>
      </Slider>
    );
  }
}
