import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TheHouse from "../image/the_house.png";
import { Col } from "react-bootstrap";

export default class PortfolioSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      draggable: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            arrows: false,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
          },
        },

        {
          breakpoint: 480,
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
          <Col lg={12} className="portfolio-slider pr-2 pr-md-4" key={i}>
            <div className="portfolio-card-wrap">
              <div className="c-card__img">
                <img
                  className="img-fluid"
                  src={content.image}
                  alt={content.alt}
                ></img>
              </div>
              <p className="c-card-body d-none d-md-block p-4">
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
  // {
  //   image: Portfolio,
  //   alt: "Slick Slider Image",
  // },
  // {
  //   image: TheHouse,
  //   alt: "Slick Slider Image",
  // },
  // {
  //   image: Slide,
  //   alt: "Slick Slider Image",
  // },
  // {
  //   image: Slick2,
  //   alt: "Slick Slider Image",
  // },
];
