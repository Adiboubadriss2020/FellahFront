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
import Summ from '../../components/chart/Summ';
import Featured2 from '../../components/featured/Featured2';

export const Home = () => {
  const navigate = useNavigate();
 useEffect(() => {
    if (localStorage.getItem("user") === null) {
      navigate("/Login");
    }
    else{
      console.log("")
    }
  }, [])
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
        <Chart aspect={2.6/1} title="Charges"/>
        </div>
        <Featured2 />
      </div>
    </div>
  )
}
export default Home;
