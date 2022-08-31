import React, { useContext, useEffect } from 'react';
import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import AnimalTable from '../../components/table/AnimalTable';
import Widget from '../../components/widgets/Widget';
import { UserContext } from '../../Usercontext';
import './home.scss'
import { useNavigate } from "react-router-dom";

export const Home = () => {
  


  return (
    <div className="home">
      <Sidebar/>
      <div className="homecontainer">
        <Navbar/>
        <div className="widgets">
          <Widget type="bovins"/>
          <Widget type="fournisseurs"/>
          <Widget type="employees"/>
          <Widget type="client"/>
        </div>
        <div className="charts">
        <Featured/>
        <Chart aspect={2.6/1} title="Les Charges"/>
        </div>
       <div className="listcontainer">
         <div className="listtitle">List </div>
          <AnimalTable />
       </div>
      </div>
    </div>
  )
}
export default Home;