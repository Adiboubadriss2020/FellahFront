import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { sumanimal, sumcharge } from '../../var';
import './chart.scss'


const Summ = () => {
    const getColor = (quantity) => {
        if (quantity <= 0) return 'red';
        else{
return'green';
        }
  
    };
    const [result, setResult] = useState();
    const [charges, setCharges] = useState();
    useEffect(() => {
        getAnimalById();
    }, [])
    const getAnimalById = async e => {
        var animal = await axios.get(sumanimal);
        var  charge= await axios.get(sumcharge);
        console.log(charge.data)
        setResult(animal.data - charge.data)
        setCharges(charge.data)
    }
    return (

        <div >
            <div  style={{ color: getColor(result), fontSize: "15px",fontFamily: "sans-serif"
 }}>
                Revenue :
                 {result} Dh
                </div>
            <div style={{ color: "red", fontSize: "15px", fontFamily: "sans-serif" }}>
               Charges :
                {charges} Dh
            </div>
        
        </div>

    )

}



export default Summ