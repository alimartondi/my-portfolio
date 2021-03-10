import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TheHouse from "../image/the_house.png";
import { Col, Container, Row } from "react-bootstrap";

export default class PortfolioSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
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
            slidesToShow: 2,
            arrows: false,
          },
        },
      ],
    };
    return (
      <Container className="px-0">
        <Slider {...settings} className="">
          {contents.map((content, i) => (
            <Col lg={12} className="portfolio-slider mt-5" key={i}>
              <div className="portfolio-card-wrap">
                <p className="c-card-body p-2">
                  Lorem ipsum dolor, sit amet consectetur
                </p>
              </div>
            </Col>
          ))}
        </Slider>
      </Container>
    );
  }
}

const contents = [
  {
    image: TheHouse,
    alt: "Slick Slider Image",
  },
  {
    image: TheHouse,
    alt: "Slick Slider Image",
  },
  {
    image: TheHouse,
    alt: "Slick Slider Image",
  },
  {
    image: TheHouse,
    alt: "Slick Slider Image",
  },
];
