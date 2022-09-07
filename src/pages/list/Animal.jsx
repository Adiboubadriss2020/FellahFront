import React from 'react'
import './list.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Animal from '../../components/datatable/Animal';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
export const AnimalList = () => {
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
        <Animal/>
      </div>
    </div>
  )
}
export default AnimalList;