import React, { useEffect } from 'react'
import './widget.scss'
import axios from 'axios';

import KeyboardControlKeyIcon from '@mui/icons-material/KeyboardControlKey';
import PetsIcon from '@mui/icons-material/Pets';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import GroupIcon from '@mui/icons-material/Group';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Widget = ({type}) => {

    const URL1 = `https://fellah-back.herokuapp.com/fournisseur/allF`;
    const URL2 = `https://fellah-back.herokuapp.com/animal/allAn`;
    const URL3 = `https://fellah-back.herokuapp.com/employee/allEmp`;
    const URL4 = `https://fellah-back.herokuapp.com/client/allClt`;

    const [animal, setAnimal] = useState([]);
    const [fournisseur, setFournisseur] = useState([]);
    const [client, setClient] = useState([]);
    const [employee, setEmployee] = useState([]);
    
    useEffect(() => {
        getAnimalById();
        getFournisseurById();
        getClientById();
        getEmployeeById();
    })
    const getFournisseurById = async e => {
        const fournisseurinfos = await axios.get(URL1);
        setFournisseur(fournisseurinfos.data);
    }
    const getAnimalById = async e => {
        const animalinfos = await axios.get(URL2);
        setAnimal(animalinfos.data);
    }
    const getEmployeeById = async e => {
        const employeeinfos = await axios.get(URL3);
        setEmployee(employeeinfos.data);
    }
    const getClientById = async e => {
        const clientinfos = await axios.get(URL4);
        setClient(clientinfos.data);
    }
    let data;
    switch (type) {
        case "bovins":
            data={
                title:"BOVINS",
                quantite:animal,
                link: (<Link to="/bovin" style={{ textDecoration: "none", size: 10 }}>Plus </Link>),
                icon:( 
                <PetsIcon 
                className='icon'
                style={{backgroundColor:"#CE2E17", color:"white"}}
                />
                ),
            }
            break;
            case "fournisseurs":
            data={
                title:"FOURNISSEURS",
                quantite:  fournisseur ,
                link: (<Link to="/fournisseurs" style={{ textDecoration: "none", size: 10 }}>Plus </Link>),
                icon: (<PersonOutlinedIcon className='icon'
                style={{color:"white"}}
                />
                ),
            }
            break;
            case "employees":
            data={
                title:"EMPLOYEES",
                quantite:employee,
                link: (<Link to="/employee" style={{ textDecoration: "none", size: 10 }}>Plus </Link>),
                icon: (<GroupIcon className='icon'
                style={{backgroundColor:"#3399FF", color:"white"}}
                />
                ),
            }
            break;
            case "client":
            data={
                title:"CLIENT",
                quantite:client,
                link: (<Link to="/client" style={{ textDecoration: "none", size: 10 }}>Plus </Link>),
                icon: (<PetsIcon className='icon'
                style={{backgroundColor:"#FFFF66", color:"white"}}
                />
                
                ),
            }
            break;
    
        default:
            break;
    }
  return (
    <div className='widget'>
        <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.quantite}</span>
        <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positif">
            <KeyboardControlKeyIcon/> 
            
            </div>
            {data.icon}
        </div>
    </div>
    
  )
}

export default Widget