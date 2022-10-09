import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import { Avatar } from '@material-ui/core';
import Post from './Post';
import firebase from 'firebase'
import { db } from './firebase'
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';
import FlipMove from 'react-flip-move';

const Feed = () => {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [inputText, setInputText ] = useState("")

  useEffect(() => {
    db.collection('posts')
    .orderBy('timestamp','desc')
    .onSnapshot((snapshot) => {
        setPosts(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            }))
        
        )
    })
  },[])

  const sendPost = (e) => {
      e.preventDefault();
      db.collection('posts').add({
          name: user.displayName,
          description: user.email,
          message: inputText,
          photoUrl: user.photoUrl,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
      setInputText("");
  }


  return (
    <div className='feed'>
        <div className='feed_inputContainer'>
            <div className='feed_header'>
                <Avatar className='feed_avatar' src={user?.photoUrl}>{user?.displayName[0]}</Avatar>
                <div className='feed_input'>
                    <CreateIcon />
                    <form>
                        <input type="text" placeholder='Start a post' value={inputText} onChange={(e) => setInputText(e.target.value)}/>
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
            </div>
            <div className='feed_inputOption'>
                <InputOption Icon={ImageIcon} title="Photo" color="#7265f9"/>
                <InputOption Icon={SubscriptionsIcon} title="Video" color="#95b545"/>
                <InputOption Icon={EventNoteIcon} title="Event" color="#ab2f1a"/>
                <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#23366b"/>
            </div>
        </div>
        {/* Posts */}
       <FlipMove>
            {   
                posts.map(({id, data: {name, description, message, photoUrl}}) => (
                    <Post 
                        key={id}
                        name= {name}
                        description= {description}
                        message={message}
                        photoUrl={photoUrl}
                    />
                ))
            }
        </FlipMove>
      
        
    </div>
  )
}

export default Feed