import React, { useState,useEffect } from 'react';

import './chart.scss'
import { AreaChart,Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CustomizedDialogs from './dialog';
import Addcharge from '../charge_form/addcharge';
import Sum from './Summ';
import Summ from './Summ';
import { charges } from '../../var';

const Chart = ({aspect, title}) => {
  var filter=0
  const [data, setData] = useState([
    { 
      date: "1",
      total: 540,
    }
  ])

  const clearInput = () => {
    setData([]);

  };

  const getseven = (id1) => {
    fetch(charges+`${id1}`
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        // console.log(response)
        return response.json();
      })
      .then(function (myJson) {
        let v = myJson
        clearInput()
        for (let index = 0; index < v.length; index++) {
          const element = v[index];
          setData((previousData) => [...previousData, {
            date: element[0],
            total: element[1],
          
          }])
        }
      });
  }

  function changer(){
    getseven(filter.value)
  }

  useEffect(() => {
    filter = document.getElementById('filter')
    if (filter)
      filter.addEventListener('change', changer)
  }, []) 
  return (
    
    <div className='chart'>
 
      <div className="selecbox">
        <select id="filter">
          <option value="30">Dernier mois</option>
          <option value="90">Dernier 3 mois</option>
          <option value="365">Dernière années</option>
        </select>
      </div>
<div className="title">{title} </div>

      <CustomizedDialogs>
        <Addcharge/>
      </CustomizedDialogs>
     
<ResponsiveContainer width="100%" aspect={aspect}>
<AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="green" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="green" stopOpacity={0}/>
    </linearGradient> 
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="blue" stopOpacity={0.8} />
              <stop offset="95%" stopColor="blue" stopOpacity={0} />
            </linearGradient> 
 
  </defs>
  <XAxis dataKey="date" color='gray'/>

  <CartesianGrid strokeDasharray="3 3" className='chartgrid'/>
  <Tooltip />
          <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
</AreaChart>
      </ResponsiveContainer>  
     
      
    </div>
    
  )
  
}



export default Chart