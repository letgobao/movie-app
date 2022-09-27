/** @format */

import React from "react";

const Movie = ({
  data: { id, cover, name, time },
  release,
}) => {
  return (
    <>
      <div className='movie-box'>
        <div className='movie-img'>
          <img src={cover} alt={name} />
        </div>
        <div className='movie-content'>
          <h3>{name}</h3>
          <span>Running time: {time}</span>
          <br />
          {release && (
            <button className='play-btn'>
              <i className='fa fa-play'></i>
              PLAY NOW
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Movie;
