import React from 'react'
import './list.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Fournisseur from '../../components/datatable/Fournisseur';
export const FournisseurList = () => {
  return (
    <div className='list'>
            <Sidebar/>
      <div className="listcontainer">
      <Navbar/>
        <Fournisseur/>
      </div>
    </div>
  )
}
export default FournisseurList;