import React from 'react'
import {BiDonateBlood,BiUserCircle} from "react-icons/bi"
import { useSelector } from 'react-redux';
const Header = () => {
    const {user}= useSelector((state)=>state.auth);
    // Logout Handler
    const logoutHandler=()=>{
        localStorage.clear();
        alert("Logout Sucessfully")
        window.location.href='/login';

    }
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-brand h1">
           <BiDonateBlood color='red'/> Blood Bank App</div>
          <ul className="navbar-nav flex-row">
            <li className="nav-item mx-3">
              <p className="nav-link">
               <BiUserCircle/> Welcome    {user?.name}</p>
            </li>
            <li className="nav-item mx-3 ">
              <button className='btn btn-danger' onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header
