import React from 'react'
import './Footer.css'
import { BsPlayCircle } from "react-icons/bs";
import { BsFillSkipBackwardFill } from "react-icons/bs";
import { BsFillSkipForwardFill } from "react-icons/bs";
import { BsShuffle } from "react-icons/bs";
import { BsArrowRepeat } from "react-icons/bs";
import { BsMusicNoteList } from "react-icons/bs";
import { Grid, Slider } from '@mui/material';

import { BsFillVolumeDownFill } from "react-icons/bs";
// import Slider from '@mui/material/Slider';
function Footer() {
    return (
        <div className='footer'>
            <div className="footer__left">
                <img className='footer__albumLogo' src="" alt="" />
                <div className="footer__songInfo">
                    <h4>No Song Playing</h4>
                    <p>.....</p>
                </div>
            </div>

            <div className="footer__center">
                <BsShuffle className='footer__green' />
                <BsFillSkipBackwardFill className='footer__icon' />
                <BsPlayCircle size={50} className='footer__icon footer__play' />
                <BsFillSkipForwardFill className='footer__icon' />
                <BsArrowRepeat className='footer__green' />
            </div>

            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <BsMusicNoteList />
                    </Grid>
                    <Grid item>
                        <BsFillVolumeDownFill />
                    </Grid>
                    <Grid item>
                        <Slider />
                    </Grid>
                </Grid>

            </div>
        </div>
    )
}

export default Footer
