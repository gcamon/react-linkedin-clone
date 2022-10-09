import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { HeaderOption } from './HeaderOption';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { logout } from '../redux/userSlice';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { selectUser } from '../redux/userSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();
  }
  return (
    <div className='header'>
        <div className='header_left'>
            <img src="https://cdn.icon-icons.com/icons2/3041/PNG/512/linkedin_logo_icon_189225.png" alt=''/>
            <div className='header_search'>
              <SearchIcon/>
              <input type="text" placeholder='Search for jobs, people, posts...'/>
            </div>
        </div>
        <div className='header_right'>
            <HeaderOption Icon={HomeIcon} title='Home' nav='/'/>
            <HeaderOption Icon={SupervisorAccountIcon} title='My Network' nav='network'/>
            <HeaderOption Icon={BusinessCenterIcon} title='Jobs' nav='jobs'/>
            <HeaderOption Icon={ChatIcon} title='Messaging' nav='messages'/>
            <HeaderOption Icon={NotificationsIcon} title='Notifications' nav='notifications'/>
            <HeaderOption onClick={logoutOfApp} avatar={user?.photoUrl} title={'Me'}/>
        </div>
    </div>
  )
}

export default Header