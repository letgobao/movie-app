/** @format */

import React from "react";
import './Rating.css'
const Rating = ({ rating }) => {
  return (
    <label className='rating flex'>
      <i
        className={
          rating >= 1
            ? "fa fa-star is-red"
            : "fa fa-star"
        }></i>
      <i
        className={
          rating >= 2
            ? "fa fa-star is-red"
            : "fa fa-star"
        }></i>
      <i
        className={
          rating >= 3
            ? "fa fa-star is-red"
            : "fa fa-star"
        }></i>
      <i
        className={
          rating >= 4
            ? "fa fa-star is-red"
            : "fa fa-star"
        }></i>
      <i
        className={
          rating >= 5
            ? "fa fa-star is-red"
            : "fa fa-star"
        }></i>
      <i
        className={
          rating >= 6
            ? "fa fa-star is-red"
            : "fa fa-star"
        }></i>
      <i
        className={
          rating >= 7
            ? "fa fa-star is-red"
            : "fa fa-star"
        }></i>
      <i
        className={
          rating >= 8
            ? "fa fa-star is-red"
            : "fa fa-star"
        }></i>
      <i
        className={
          rating >= 9
            ? "fa fa-star is-red"
            : "fa fa-star"
        }></i>
      <i
        className={
          rating >= 10
            ? "fa fa-star is-red"
            : "fa fa-star"
        }></i>
    </label>
  );
};

export default Rating;
