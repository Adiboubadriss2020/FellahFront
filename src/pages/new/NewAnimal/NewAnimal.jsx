import React, { useEffect, useState } from 'react';
import './new.scss';
import axios from 'axios';
import moment from 'moment';
import Sidebar from '../../../components/sidebar/Sidebar';
import Navbar from '../../../components/navbar/Navbar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import Alert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

export const NewAnimal = ({inputs,title}) => {
    const [date_achat, setDate_achat] = useState('')
    const[date_vente,setDate_vente]=useState('')
    const [origine, setOrigine] = useState('')
    const [prix_achat, setPrix_achat] = useState('')
    const [poid_achat, setPoid_achat] = useState('')
    const [poid_vente, setPoid_vente] = useState('')
    const [ref, setRef] = useState('')
    const [infos, setInfos] = useState('')
    const [etat, setEtat] = useState('')
    var k=""
    const[animal,setAnimal]=useState([])

  const newdate = moment(date_achat).format('YYYY-MM-DD')
  const newdate2 = moment(date_vente).format('YYYY-MM-DD')
  const [snackbar, setSnackbar] = React.useState(null);
  const handleCloseSnackbar = () => setSnackbar(null);


    const handleClick=(e)=>{
      e.preventDefault()
      const animal = {
        date_achat,
        ref,
        date_vente,
        origine,
        poid_achat,
        poid_vente,
        prix_achat,
        infos,
        etat
}
console.log(ref)

     
     axios.post(`http://localhost:8080/animal/add`, animal).catch(error => {
       setSnackbar({ children: "Ref déja existe!", severity: 'error' });  
         });
      
      setSnackbar({ children: "Ref bien enregistrer", severity: 'success' }); 
     }

  useEffect(()=>{
    fetch("http://localhost:8080/animal/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setAnimal(result);

    }
  )
  },[])
  return (
    <div className="new">
      <Sidebar/>
      <div className="newcontainer">
        <Navbar/>
      <div className="top">
      <h1 className="title">{title}</h1>
      </div>
      <div className="bottom">
     
        <div className="right">
        <form action=""  noValidate autoComplete="off">
              <div className="forminput">
                <label >Identifiant</label>
                <input type="number" placeholder="Identifiant" value={ref} onChange={(e) => setRef(e.target.value)} required />
              </div>
    <div className="forminput">
 <label >Date d'achat</label>
 <input type="date" placeholder="Date d'achat" value={newdate} onChange={(e)=>setDate_achat(e.target.value)} required/>
</div>
<div className="forminput">
 <label >Date de vente</label>
  <input type="date" placeholder="Date de vente" value={newdate2} onChange={(e)=>setDate_vente(e.target.value)}required/>
</div>
<div className="forminput">
 <label >Origine</label>
 <input type="text" placeholder="Enter L'origine" value={origine} onChange={(e)=>setOrigine(e.target.value)} required/>
              </div>
  <div className="forminput">
     <label >Poid d'achat</label>
                <input type="number" placeholder="Poid d'achat" value={poid_achat} onChange={(e) => setPoid_achat(e.target.value)} required />
                </div>
<div className="forminput">
<label >Poid de vente</label>
<input type="number" placeholder="Poid de vente" value={poid_vente} onChange={(e) => setPoid_vente(e.target.value)} required />
                  </div>
<div className="forminput">
  <label >Prix d'achat</label>
  <input type="number" placeholder="Prix d'achat" value={prix_achat} onChange={(e) => setPrix_achat(e.target.value)} required />
</div>
            <div className="forminput">
              <label >S'il ya de maladie, ajouter les informations</label>
              <input type="text" placeholder="ajouter des infos sur la maladie" value={infos} onChange={(e) => setInfos(e.target.value)} required />
            </div>
          <button onClick={handleClick}>Envoyer</button>
        </form>
            {!!snackbar && (
              <Snackbar
                open
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                onClose={handleCloseSnackbar}
                autoHideDuration={6000}
              >
                <Alert {...snackbar} onClose={handleCloseSnackbar} />
              </Snackbar>
            )}
        </div>
      </div>
      </div>
      
    </div>
  )
}
export default NewAnimal;
