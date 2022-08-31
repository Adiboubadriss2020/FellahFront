import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import PetsIcon from '@mui/icons-material/Pets';
import BarChartIcon from '@mui/icons-material/BarChart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import {Link, useNavigate} from 'react-router-dom';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import HealingIcon from '@mui/icons-material/Healing';
import { UserContext } from '../../Usercontext';
export const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);
    const navigate = useNavigate();
  return (
    <div className='sidebar'>
        <div className='top'>
              <Link to="/Doshboard"style={{textDecoration:"none"}}>
        <span className="logo">GAS</span>
        </Link>
               
        </div> 
        <hr />
        <div className='center'>
        <ul>
            <p className="title">MAIN</p>
            <li>
                <DashboardIcon className='icon'/>
                      <Link to="/Doshboard"style={{textDecoration:"none"}}>
                <span>Dashboard</span>
                </Link>
            </li>
            <p className="title">LISTES</p>
            <li>
                <PersonOutlinedIcon className='icon'/>
                <Link to="/fournisseurs"style={{textDecoration:"none"}}>
                <span>Fournissuers</span>
                </Link>
            </li>
            <li>
                <PersonOutlinedIcon className='icon'/>
                <Link to="/client"style={{textDecoration:"none"}}>
                <span>Clients</span>
                </Link>
            </li>
            <li>
                <PersonOutlinedIcon className='icon'/>
                <Link to="/employee"style={{textDecoration:"none"}}>
                <span>Employé</span>
                </Link>
            </li>
            <li>
                <PetsIcon className='icon'/>
                <Link to="/bovin"style={{textDecoration:"none"}}>
                <span>Bovin</span>
                </Link>
            </li>
            <li>
            <Link to="/veterinaire" style={{ textDecoration: "none" }}>
                          <HealingIcon className='icon'/>
                <span>Veterinaire</span>
                      </Link>

            </li>
            <li>
                <EmojiNatureIcon className='icon'/>
                <Link to="/alimentation" style={{ textDecoration: "none" }}>
                <span>Alimentation</span>
                      </Link>
            </li>
                  <p className="title"></p>

            <li>
                <LogoutIcon className='icon'/>
                      <Link to="/login" style={{ textDecoration: "none" }}>
                <span>Déconnecté</span>
                      </Link>
            </li>
        </ul>
        </div>
        <div className='bottom'>
            <div className="colorOption" 

            onClick={() => dispatch({ type: "LIGHT" })}

            ></div>
            <div className="colorOption" 

            onClick={() => dispatch({ type: "DARK" })}
            
            >

            </div>
        </div>
    </div>
  )
}
export default Sidebar;
