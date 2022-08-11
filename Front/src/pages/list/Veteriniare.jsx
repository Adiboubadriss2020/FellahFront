import React from 'react'
import './list.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Veteriniare from '../../components/datatable/Veteriniare';
export const VeterinaireList = () => {
    return (
        <div className='list'>
            <Sidebar />
            <div className="listcontainer">
                <Navbar />
                <Veteriniare />
            </div>
        </div>
    )
}
export default VeterinaireList;