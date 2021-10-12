import React from 'react'
import './SidebarOption.css'
function SidebarOption({ title, Icon }) {
    return (
        <div className='sideBarOption'>
            {Icon && <Icon className='sideBarOption__icon' />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}


        </div>
    )
}

export default SidebarOption
