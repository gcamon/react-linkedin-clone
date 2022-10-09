import React, { forwardRef } from 'react'
import { Avatar } from '@material-ui/core';
import './Post.css';
import InputOption from './InputOption';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Post = forwardRef(({ name, description, message, photoUrl},ref) => {
  return (
    <div ref={ref} className='post'>
       <div className='post_header'>
            <Avatar src={photoUrl}>{name[0]}</Avatar>
            <div className='post_info'>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
       </div>
       <div className='post_body'>
            <p>{message}</p>
       </div>
       <div className='post_buttons'>
            <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like"/>
            <InputOption Icon={ChatOutlinedIcon} title="Comment"/>
            <InputOption Icon={ShareOutlinedIcon} title="Share"/>
            <InputOption Icon={SendOutlinedIcon} title="Send"/>
       </div>
    </div>
  )
})

export default Post