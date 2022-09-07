import React from 'react'
import './list.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Employee from '../../components/datatable/Employee';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
export const EmployeeList = () => {
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
        <Employee/>
      </div>
    </div>
  )
}
export default EmployeeList;