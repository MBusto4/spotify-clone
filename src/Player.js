import React from 'react'
import "./Player.css"
import { useDataLayerValue } from './DataLayer';


function Player() {

    const [{ user }, dispatch] = useDataLayerValue()

    return (
        <div className='player'>
            <h1>Welcome</h1>
        </div>
    )
}

export default Player
