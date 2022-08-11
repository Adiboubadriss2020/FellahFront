import React from 'react'
import './list.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Animal from '../../components/datatable/Animal';
export const AnimalList = () => {
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