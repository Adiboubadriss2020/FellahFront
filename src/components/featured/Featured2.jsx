import React, { useEffect, useState, PureComponent } from 'react';
import axios from 'axios';
import 'react-circular-progressbar/dist/styles.css';
import './featured.scss'
import {
  ComposedChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { animals, charges, sumgainanimal, sumgaincharge } from '../../var';
const Featured2 = () => {

  var filter2 = 0
  
  const [data2, setData2] = useState([
    {
      Le: "",
      Ventes : 0,
    
    
    }
  ])
  const clearInput = () => {
    setData2([]);

  }
  const getseven = async e => {
    //let sumgain = await axios.get(sumgaincharge + `${e}`);
    let sumgain2 = await axios.get(sumgainanimal + `${e}`);
    clearInput()
    console.log(sumgain2.data)
    
   for (let i = 0; i < sumgain2.data.length; i++) {
      const element = sumgain2.data[i];   
      setData2((previousData2) => [...previousData2, {
        Le: "Le mois "+element[0],
        Ventes: element[1],
      }])
   }
    
  }
  function changer() {
    getseven(filter2.value)
  }

  useEffect(() => {
    filter2 = document.getElementById('fil')
    if (filter2)
      filter2.addEventListener('change', changer)
  }, []) 

  return (
    <div className='chart' style={{ marginLeft: "50px" }}>
      <div className="top">

        <select id="fil">
          <option value="30">Dernier mois</option>
          <option value="90">Dernier 3 mois</option>
          <option value="365">Dernière années</option>
        </select>
        <div className="title">Ventes</div>
        
      </div>
      <div className="bottom">
        <ComposedChart width={1000} height={400} data={data2} className='chart' >
          <XAxis  dataKey="Le"  />
          <YAxis unit="Dh" width={100} />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          
          <Bar dataKey="Ventes" barSize={20} units fill="green" />
        </ComposedChart>
      </div>
      
    </div>
  )
  
}

export default Featured2