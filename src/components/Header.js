import React from "react";
import { useState } from "react";
import "./css/Header.css";
import { Link } from "react-router-dom";
import {auth} from "../firebase";
import { onAuthStateChanged,signOut } from "firebase/auth";
import { async } from "@firebase/util";
import { useStateValue } from "../StateProvider";

function Header() {  
  const [{basket},dispatch] = useStateValue();
const [user,setUser] = useState({});
onAuthStateChanged(auth,(currentUser)=>{
  setUser(currentUser);
})
const handleAuthentication = async()=>{
  if(user){
    auth.signOut();
  }
}
  return (
    <div className="header">
   <Link to='/'>    
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link> 
    
      

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <span className="header__searchIcon" >🔍</span>
      </div>

      <div className="header__nav">
        <Link to ={!user && './login'}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">Hello   {!user ?"Guest":user?.email}</span>
            <span className="header__optionLineTwo">{user? "sign Out" : "Sign In"}</span>
          </div>
          </Link>

        
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        
        

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout"> 
          <div className="header__optionBasket">
        <img className="basket" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/shopping-basket-2166793-1838380.png" />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>  
        
      </div>
    </div>
  );
}
export default Header;
