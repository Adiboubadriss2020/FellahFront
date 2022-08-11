import React from 'react'
import './list.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Employee from '../../components/datatable/Employee';
export const EmployeeList = () => {
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