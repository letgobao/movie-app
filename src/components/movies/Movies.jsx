/** @format */

import React from "react";
import Movie from "./Movie";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Movie.css";
import {
  NextSlideBtn,
  PrevSlideBtn,
} from "../slidecontrol/SliderControl";
const Movies = ({ data, title, release }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextSlideBtn/>,
    prevArrow: <PrevSlideBtn/>,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <section className='list-movies'>
      <div className='list-movies-container'>
        <div className='heading flexer-sb'>
          <h1>{title}</h1>
        </div>
        <div className='movie-slider'>
          <Slider {...settings}>
            {data.map((movie) => (
              <Movie key={movie.id} data={movie} release={release}/>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Movies;
