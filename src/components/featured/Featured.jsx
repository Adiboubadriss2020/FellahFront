import React, { useEffect, useState, PureComponent } from 'react';
import axios from 'axios';
import 'react-circular-progressbar/dist/styles.css';
import './featured.scss'
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import CustomizedDialogs from '../chart/dialog';
import NewAnimalAlimentation from '../../pages/new/NewAnimalAlimentation/NewAnimalAlimentation';
import { api } from '../../var';
const Featured = () => {

  var filter = 0
  const [data, setData] = useState([
    {
      Le: "",
      Quantité : 0,
    }
  ])
  const clearInput = () => {
    setData([]);

  }
  const getseven = (id2) => {

    console.log(id2)

    fetch(api+`/alimentations/days/${id2}/`
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
        console.log("ja:",v)
        clearInput()
        for (let index = 0; index < v.length; index++) {
          const element = v[index];
          setData((previousData) => [...previousData, {
            Le: element[0],
            Quantité: element[1],

          }])
        }
      });
  
  }
  function changer() {
    getseven(filter.value)
  }

  useEffect(() => {
    filter = document.getElementById('filter1')
    if (filter)
      filter.addEventListener('change', changer)
  }, []) 

  return (
    <div className='chart'>
      <div className="top">
        <select id="filter1">
          <option value="3">Dernier 3 jours</option>
          <option value="7">Dernier semaine</option>
          <option value="30">Dernier mois</option>
        </select>
        <div className="title">Alimentation</div>
        <CustomizedDialogs>
          <NewAnimalAlimentation />
        </CustomizedDialogs>
      </div>
      <div className="bottom">
        <ComposedChart width={450} height={250} data={data} className='chart'>
          <XAxis dataKey="Le"  />
          <YAxis unit="kg" />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          <Bar dataKey="Quantité" barSize={20} units fill="#C98474" />
          
        </ComposedChart>
      </div>
      
    </div>
  )
  
}

export default Featured