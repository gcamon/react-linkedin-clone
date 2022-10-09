import React from 'react'
import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';
import './SideBar.css';

const SideBar = () => {
  const user = useSelector(selectUser)
  const recentItems = (topic) => (
      <div className='sidebar_recentItem'>
        <span className='sidebar_hash'># </span>
        <p>{topic}</p>
      </div>
  )
  return (
    <div className='sidebar'>
        <div className='sidebar_header'>
            <img src='https://thumbs.dreamstime.com/b/sea-water-ocean-wave-surfing-surface-colorful-vibrant-sunset-barrel-shape-124362369.jpg' alt=''/>
            <Avatar src={user?.photoUrl} className='sidebar_avatar'>{user?.displayName[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
        <div className='sidebar_stats'>
            <div className='sidebar_stat'>
                <p>Who viewed you</p>
                <p className='sidebar_statnumber'>2,374</p>
            </div>
            <div className='sidebar_stat'>
                <p>Views on posts</p>
                <p className='sidebar_statnumber'>2,578</p>
            </div>
        </div>
        <div class="sidebar_footer">
            <div>Recent</div>
            {recentItems('Reactjs')}
            {recentItems('Programming')}
            {recentItems('Graphic Design')}
            {recentItems('Developer Guild')}
            {recentItems('Network')}
            {recentItems('Portfolio')}
        </div>
    </div>
  )
}

export default SideBar