import React from 'react'
import './list.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Alimentation from '../../components/datatable/Alimentation';
export const AlimentationList = () => {
    return (
        <div className='list'>
            <Sidebar />
            <div className="listcontainer">
                <Navbar />
                <Alimentation />
            </div>
        </div>
    )
}
export default AlimentationList;