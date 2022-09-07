import React from 'react'
import './list.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Client from '../../components/datatable/Client';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
export const ClientList = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      navigate("/Login");
    }
    else {
      console.log("")
    }
  }, [])
  return (
    <div className='list'>
            <Sidebar/>
      <div className="listcontainer">
      <Navbar/>
        <Client/>
      </div>
    </div>
  )
}
export default ClientList;