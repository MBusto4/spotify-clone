import React from 'react'
import "./Player.css"
import { useDataLayerValue } from './DataLayer';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Body from './Body';
import './Player.css'


function Player({ spotify }) {

    const [{ user }, dispatch] = useDataLayerValue()

    return (
        <div className='player'>
            <div className="player__body">
                <Sidebar />
                <Body spotify={spotify} />

            </div>

            <Footer />
        </div>
    )
}

export default Player
