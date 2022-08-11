import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './chart.scss'
import { AreaChart,Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = ({aspect, title}) => {
  var filter=0
  var filter2= 0
  const URL1 = `http://localhost:8080/charge/threedays`;
  const URL2 = `http://localhost:8080/fournisseur/sevendays`;
  const URL3 = `http://localhost:8080/charge/month`;

  const [data, setData] = useState([
    { 
      date: "1",
      total: 540,
    }
  ])

  const clearInput = () => {
    setData([]);

  };

  const getseven = (id1,id2) => {

console.log(id1,id2)

    fetch(`http://localhost:8080/${id1}/days/${id2}/`
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
        console.log(v)
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
    getseven(filter.value,filter2.value)
  }

  useEffect(() => {
    filter = document.getElementById('filter')
    filter2 = document.getElementById('filter2')
    if (filter && filter2)
      filter.addEventListener('change', changer)
    filter2.addEventListener('change', changer)
  }, []) 
  return (
    
    <div className='chart'>
<div className="title">{title}</div>
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
      <div className="selecbox">
        <select id="filter">
          <option value="fournisseur">Fournisseurs</option>
          <option value="employee">Employés</option>
          <option value="client">Client</option>
        </select>
      </div>
      <div className="selecbox">
        <select id="filter2">
          <option value="3">Dernier 3 jours</option>
          <option value="7">Dernier semaine</option>
          <option value="30">Dernier mois</option>
        </select>
      </div>
    </div>
    
  )
  
}



export default Chart