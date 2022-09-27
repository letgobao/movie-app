/** @format */

import React from "react";
import Rating from "../rating/Rating";
const Slide = ({
  data: {
    id,
    cover,
    name,
    desc,
    time,
    starring,
    genres,
    tags,
    rating,
  },
}) => {
  return (
    <div className='main-container'>
      <div className='image-cover-box'>
        <img src={cover} alt={name} />
      </div>
      <div className='main-movie-content'>
        <div className='details'>
          <div className="main-movie-name">{name}</div>
          <div className='movie-attr'>
            <Rating rating={rating} />
            <label>{rating} IMDB</label>
            <h4>{time}</h4>
          </div>
          <p>{desc}</p>
          <div className='cast'>
            <h4 className='cast'>
              <span>Starring:</span>
              {starring}
            </h4>
            <h4>
              <span>Genres:</span>
              {genres}
            </h4>
            <h4>
              <span>Tags:</span>
              {tags}
            </h4>
          </div>
        </div>
        <button className="play-btn">
          <i className='fa fa-play'></i>
          GO TO WATCH NOW
        </button>
      </div>
    </div>
  );
};

export default Slide;
