import React, { useEffect, useState, PureComponent } from 'react';
import axios from 'axios';
import 'react-circular-progressbar/dist/styles.css';
import './featured.scss'
import AsyncSelect from 'react-select/async'
import makeAnimated from 'react-select/animated'
const Featured = () => {


  const URL1 = `http://localhost:8080/objectif/getAll`;
  let objectifinfos=""
  let tach={}
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">Objectifs</h1>
      </div>
      <div className="bottom">
        <div className="featuredchart">
        </div>
      </div>
    </div>
  )
}

export default Featured