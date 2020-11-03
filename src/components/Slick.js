import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slick2 from "../image/slick2.png";
import Slide from "../image/slide-portfolio.png";
import { Col } from "react-bootstrap";

export default class PortfolioSlider extends Component {
  render() {
    const settings = {
      // className: "portfolio-slider",
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      draggable: true,
      useCss: false,
      variableWidth: true,
      responsive: [
        // {
        //   breakpoint: 1024,
        //   settings: {
        //     arrows: false,
        //     slidesToShow: 2,
        //     slidesToScroll: 1,
        //   },
        // },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            arrows: false,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            arrows: false,
          },
        },
      ],
    };
    return (
      <Slider {...settings} className="">
        {contents.map((content, i) => (
          <Col sm={12} key={i}>
            <div className="portfolio-card-wrap">
              <div className="c-card__img">
                <img
                  className="img-fluid"
                  src={content.image}
                  alt={content.alt}
                ></img>
              </div>
              <p className="c-card__body">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
                tempora ipsam doloribus numquam facere soluta esse! Dolor
                dolores qui temporibus iure eaque soluta molestiae. Quisquam?
              </p>
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
