import React from 'react'
import ZoomInMapIcon from '@mui/icons-material/ZoomInMap';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import './navbar.scss';
export const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className='navbar'>
      <div className="wrapper">
      <div className="search">
        <input type="text" placeholder='search...' />
        <ManageSearchIcon/>
      </div>
      <div className="items">
        <div className="item" >
        <ZoomInMapIcon  onClick={() => dispatch({ type: "DARK" })}/>
        </div>
        <div className="item">
        <CircleNotificationsIcon/>
        <div className="counter">2</div>
        </div>
        <div className="item">
          <img 
          src="https://images.unsplash.com/photo-1652345408448-94bceb27c6a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt=""
          className='avatar'
          />
          
        </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar;