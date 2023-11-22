import './App.js';
import axios from 'axios';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import { useEffect, useState } from 'react';
import { Route,Routes, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
function App(){
  const [user, setUser]= useState(null);
  const getUser= async()=>{
    try{
      const url=`${process.env.REACT_APP_API_URL}/auth/login/success`;
      const {data}= await axios.get(url,{withCredentials:true})
      setUser(data.user._json);
    }catch(err){
      console.log(err)
    }
  };
 
  useEffect(() => {
    getUser();
    }, []);
    
  return <div className='container'>
    <Routes>
      <Route exact path="/" element={user?<Home user={user}/>:<Navigate to="/login"/>}/>
      <Route exact path="/login" element={user?<Navigate to="/"/>: <Login/>}/>
      <Route exact path="/signup" element={user?<Navigate to="/"/>: <Signup/>}/>
    </Routes>
  </div>
}

export default App;
