import React from 'react'
import { Tooltip } from 'react-tooltip'
import '../../Styles/SideDrawer.css'
const SideDrawer = () => {
    return (
        <>
            <div className='header-container'>
                <div className='header'>
                    <div className='search-button' data-tooltip-id="user-search-tooltip" data-tooltip-content="Search users to Chat">
                        <ion-icon name="search"></ion-icon>
                        <div>Search User</div>
                    </div>
                    <Tooltip id="user-search-tooltip" />
                    <div className='header-text'>
                        Chat App
                    </div>
                    <div className='header-right'>
                        <ion-icon id="notifications-img" ></ion-icon>
                        <ion-icon name="person-circle-outline" id="ion-profile"></ion-icon>
                        <ion-icon name="chevron-down"></ion-icon>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SideDrawer