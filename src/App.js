import React, { useEffect } from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Feed from './components/Feed';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout, login } from './redux/userSlice'
import Login from './components/Login';
import { auth } from "./components/firebase";
import './App.css';
import Widgets from './components/Widgets';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          photoUrl: userAuth.photoURL,
          displayName: userAuth.displayName
        }))
      } else {
        dispatch(logout())
      }
    })
  },[])

  return (
    <div className="App">
        <Router> 
          <Header/>      
          {!user ? <Login/> :       
          <div className='app_body'> 
              <Routes>  
                <Route path='/' exect element={[
                <SideBar />,
                <Feed />,
                <Widgets />
                ]}>
                </Route> 
                <Route path='network' exect element={[
                <SideBar />,
                <Feed />,
                <Widgets />
                ]}>
                </Route> 
                <Route path='jobs' exect element={[
                <SideBar />,
                <Feed />,
                <Widgets />
                ]}>
                </Route> 
                <Route path='messages' exect element={[
                <SideBar />,
                <Feed />,
                <Widgets />
                ]}>
                </Route>    
                <Route path='notifications' exect element={[
                <SideBar />,
                <Feed />,
                <Widgets />
                ]}>
                </Route>                  
              </Routes> 
          </div>         
          }
        </Router>   
    </div>
  );
}

export default App;
