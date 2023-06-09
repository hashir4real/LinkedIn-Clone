import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
 
function Sidebar() {
    const user = useSelector(selectUser)

    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )

  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src='https://i0.wp.com/www.entertainmentmesh.com/wp-content/uploads/2015/08/cute-coffee-owl-timeline-photo.jpg?ssl=1' alt='' />
            <Avatar src={user.photoUrl} className='sidebar__avatar' >{user.email[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>


        <div className='sidebar__stats'>
            <div className='sidebar__stat'>
                <p>Who viewed you</p>
                <p className='sidebar__statNumber'>2543</p>
            </div>
            <div className='sidebar__stat'>
                <p>Views on post</p>
                <p className='sidebar__statNumber'>2488</p>
            </div>
        </div>


        <div className='sidebar__bottom'>
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('softwarengineering')}
            {recentItem('programming')}
            {recentItem('design')}
        </div>
    </div>
  )
}

export default Sidebar