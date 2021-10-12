import React from 'react'
import "./Player.css"
import { useDataLayerValue } from './DataLayer';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Body from './Body';


function Player({ spotify }) {

    const [{ user }, dispatch] = useDataLayerValue()

    return (
        <div className='player'>
            <div className="plauer__body">
                <Sidebar />
                <Body />

            </div>

            <Footer />
        </div>
    )
}

export default Player
