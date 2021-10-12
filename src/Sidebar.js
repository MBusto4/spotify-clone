import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import { BsHouseDoor } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsMusicNote } from "react-icons/bs";



function Sidebar() {
    return (
        <div className='sideBar'>
            <img
                className='sideBar__logo'
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
            <SidebarOption
                title="Home"
                Icon={BsHouseDoor}
            />
            <SidebarOption
                title="Search"
                Icon={BsSearch}
            />
            <SidebarOption
                title="Your Library"
                Icon={BsMusicNote}
            />
            <br />
            <strong className='sideBar__title'>PLAYLISTS</strong>
            <hr />

            <SidebarOption
                title="Hip hop"
            />
            <SidebarOption
                title="Rock"
            />
            <SidebarOption
                title="Country"
            />
        </div>

    )
}

export default Sidebar
