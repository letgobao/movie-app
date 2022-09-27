import React from 'react'
import './SliderControl.css'

export const NextSlideBtn = (props) => {
    const {onClick} = props
    return (
        <div className="slide-control-btn" onClick={onClick}>
            <button className="next">
                <i className="fa fa-chevron-right"></i>
            </button>
        </div>
    )
}

export const PrevSlideBtn = (props) => {
    const {onClick} = props
    return (
        <div className="slide-control-btn" onClick={onClick}>
            <button className="prev">
                <i className="fa fa-chevron-left"></i>
            </button>
        </div>
    )
}