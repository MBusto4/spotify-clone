import React from 'react'
import './Footer.css'
import { BsPlayCircle } from "react-icons/bs";
import { BsFillSkipBackwardFill } from "react-icons/bs";
import { BsFillSkipForwardFill } from "react-icons/bs";
import { BsShuffle } from "react-icons/bs";
import { BsArrowRepeat } from "react-icons/bs";

function Footer() {
    return (
        <div className='footer'>
            <div className="footer__left">
                <p>Album & Song Details</p>
            </div>

            <div className="footer__center">
                <BsShuffle className='footer__green' />
                <BsFillSkipBackwardFill className='footer__icon' />
                <BsPlayCircle size={50} className='footer__icon footer__play' />
                <BsFillSkipForwardFill className='footer__icon' />
                <BsArrowRepeat className='footer__green' />
            </div>

            <div className="footer_right">
                <p>Volume Controls</p>
            </div>
        </div>
    )
}

export default Footer
