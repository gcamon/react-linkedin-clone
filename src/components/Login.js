import React, { useState } from 'react'
import './Login.css';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';

const Login = () => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  const loginNow = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(user.email, user.password)
    .then(userAuth => {
        dispatch(login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: user.name,
            photoUrl: user.photoUrl
        }))
    })
    .catch(err => alert(err.message))
  }

  const register = () => {
      if(!user.name){
        return alert("Please enter full name")
      }

      if(!user.email){
        return alert("Please enter Email")
      }

      if(!user.password){
        return alert("Please enter password")
      }

      auth.createUserWithEmailAndPassword(user.email,user.password)
      .then((userAuth) => {
         userAuth.user.updateProfile({
            displayName: user.name,
            photoURL: user.photoUrl
         }).then(() => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: user.name,
                photoUrl: user.photoUrl
            }))
         })
      }).catch((err) => alert(err.message))
  }


  return (
    <div className='login'>
        <img src='https://www.paperlesslabacademy.com/wp-content/uploads/2017/02/linkedin-logo-transparent.png' alt=""/>
        <form className='form'>
            <input type='text' placeholder='Full name required if registering' 
            onChange={(e) => setUser({...user,name: e.target.value})} />
            <input type='text' placeholder='Profile picture URL (optional)'
            onChange={(e) => setUser({...user,photoUrl: e.target.value})}/>
            <input type='email' placeholder='Email' 
            onChange={(e) => setUser({...user,email: e.target.value})}/>
            <input type='password' placeholder='Password'
            onChange={(e) => setUser({...user,password: e.target.value})}/>
            <button type='submit' onClick={loginNow}>Sign In</button>
            <p>Not a member? <span className='login_register' onClick={register}>Register now!</span></p>
        </form>
    </div>
  )
}

export default Login