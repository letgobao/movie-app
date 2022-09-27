/** @format */

import React from "react";
import Slide from "./Slide";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slide.css";
import {NextSlideBtn, PrevSlideBtn} from '../slidecontrol/SliderControl'
const Slides= ({data}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextSlideBtn/>,
    prevArrow: <PrevSlideBtn/>
  };
  return (
    <div className='slide-container'>
      <Slider {...settings}>
        {data.map((movie) => (
          <Slide key={movie.id} data={movie} />
        ))}
      </Slider>
    </div>
  );
};

export default Slides;
