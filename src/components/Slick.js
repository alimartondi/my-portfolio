import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slick2 from "../image/slick2.png";
import Slide from "../image/slide-portfolio.png";
import { Col } from "react-bootstrap";

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
          },
        },
      ],
    };
    return (
      <Slider {...settings}>
        {contents.map((content, i) => (
          <Col lg={12} key={i}>
            <div className="portfolio-card-wrap">
              <img
                className="img-fluid"
                src={content.image}
                alt={content.alt}
              ></img>
            </div>
          </Col>
        ))}
      </Slider>
    );
  }
}

const contents = [
  {
    image: Slide,
    alt: "Slick Slider Image",
  },
  {
    image: Slick2,
    alt: "Slick Slider Image",
  },
  {
    image: Slide,
    alt: "Slick Slider Image",
  },
  {
    image: Slick2,
    alt: "Slick Slider Image",
  },
];
