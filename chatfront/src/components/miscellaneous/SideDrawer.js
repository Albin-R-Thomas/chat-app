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
                </div>

            </div>
        </>
    )
}

export default SideDrawer