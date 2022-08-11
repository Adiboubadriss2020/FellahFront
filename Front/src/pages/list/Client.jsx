import React from 'react'
import './list.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Client from '../../components/datatable/Client';
export const ClientList = () => {
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