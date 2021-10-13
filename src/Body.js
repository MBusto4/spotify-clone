import React, { useState, useEffect } from "react";
import "./Body.css"
import Header from './Header'
import { useDataLayerValue } from './DataLayer';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow';


function Body({ spotify }) {

    // const useAudio = url => {
    //     const [audio] = useState(new Audio(url));
    //     const [playing, setPlaying] = useState(false);

    //     const toggle = () => setPlaying(!playing);

    //     useEffect(() => {
    //         playing ? audio.play() : audio.pause();
    //     },
    //         [playing]
    //     );
    //     useEffect(() => {
    //         audio.addEventListener('ended', () => setPlaying(false));
    //         return () => {
    //             audio.removeEventListener('ended', () => setPlaying(false));
    //         };
    //     }, []);

    //     return [playing, toggle];
    // };
    /*
        need a onClick listener on the songRow
        when the song is highlighted click the play button and it
     
        */

    const [{ discover_weekly }, dispatch] = useDataLayerValue()
    return (
        <div className='body'>
            <Header spotify={spotify} />

            <div className="body__info">
                <img src={discover_weekly?.images[0].url} alt="" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
                <div className="body__songs">
                    {/* <div className="body__icons">
                        <PlayCircleFilledIcon className='body__shuffle' />
                        <FavoriteIcon fontSize='large' />
                        <MoreHorizIcon />
                    </div> */}
                </div>
            </div>
            {discover_weekly?.tracks.items.map(item => (
                <SongRow spotify={spotify} track={item.track} />
            ))}
        </div>
    )
}

export default Body
