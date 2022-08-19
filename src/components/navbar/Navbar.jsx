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
     
        </div>
      
    </div>
  )
}
export default Navbar;