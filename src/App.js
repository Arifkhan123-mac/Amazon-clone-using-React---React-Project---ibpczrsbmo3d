
import React,{useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Header from "./components/Header"
import Login from "./screens/Login";
import  Home from "./screens/Home" 
import Checkout from './screens/Checkout';
import {auth} from "./firebase"
import { useStateValue } from './StateProvider';

function App() {
  const [{},dispatch] = useStateValue();
  useEffect(()=>{
  auth.onAuthStateChanged((authUser)=>{
console.log("the user is ",authUser);
if(authUser){
  dispatch({
    type: "SET_USER",
    user: authUser,
  })
}else{
  dispatch({
    type: "SET_USER",
    user: null,
  });
}
  })
  },[])
  return (
    <Router>

    <div className="App">
    <Routes>
      <Route path='/checkout' element={<><Header/><Checkout/></>}/>
      <Route path='/login' element={<><Login/></>} />
      <Route path='/' element={<><Header/><Home/></>}
        />
    </Routes>
    </div>
    </Router>
  );
}

export default App;
