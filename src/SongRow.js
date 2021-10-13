
import React from 'react'
import './SongRow.css'
// import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from "react-h5-audio-player";
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

function SongRow({ track }) {


    /*
    preview_url is the audio url of the preview of the song
    external_urls.spotify takes u too the song on spotify
    */
    return (
        <div className='songRow'>
            <img className='songRow__album' src={track.album.images[0].url} alt="" />
            <div className="songRow__info">
                <h1>{track.name}</h1>
                <p>{track.artists.map((artist) => artist.name).join(", ")} -{" "}
                    {track.album.name}
                </p>
                {/* <ReactAudioPlayer
                    src={track.preview_url}
                    autoPlay={false}
                    controls
                /> */}
                <AudioPlayer
                    className="songRow__audio"
                    autoPlay={false}
                    src={track.preview_url}
                    onPlay={e => console.log("onPlay")}
                />
                <div className="songRow__audio__icons">
                    <ThumbUpIcon className='songRow__audio__icons__thumbsUp' />
                    <ThumbDownIcon className='songRow__audio__icons__thumbsDown' />
                </div>
            </div>
        </div>
    )
}

export default SongRow
