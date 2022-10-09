import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';


export const HeaderOption = ({avatar, Icon, title, nav, onClick}) => {
  return (
    <div className='headerOption' onClick={onClick}>
        {Icon && <Link to={nav}><Icon className='headerOption_icon icon'/></Link>}
        {avatar && 
        <Avatar className="headerOption_icon" src={avatar}>{title[0]}</Avatar>}
        <h3 className='headerOption_title'>{title}</h3>
    </div>
  )
}
