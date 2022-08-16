import React, { useEffect, useState } from 'react';
import './newF.scss';
import Sidebar from '../../../components/sidebar/Sidebar';
import Navbar from '../../../components/navbar/Navbar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import axios from 'axios';
import Alert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
export const NewFournisseur = ({inputs,title}) => {
    const[file,setFile] = useState("");
    const[nom,setNom]=useState('')
    const[adresse,setAdresse]=useState('')
    const[email,setEmail]=useState('')
    const[fournisseurs,setFournisseurs]=useState([])
    const [snackbar, setSnackbar] = React.useState(null);
    const handleCloseSnackbar = () => setSnackbar(null);

    const handleClick=(e)=>{
      e.preventDefault()
      const fournisseur={nom,email,adresse}
      console.log(fournisseur)
      axios.post(`http://localhost:8080/fournisseur/add`, fournisseur).catch(error => {
        setSnackbar({ children: error.message, severity: 'error' });
      });

      setSnackbar({ children: 'Fournisseur est bien enregistrer', severity: 'success' });
  }

  useEffect(()=>{
    fetch("http://localhost:8080/fourniseeur/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setFournisseurs(result);
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
 <label >Nom</label>
 <input type="text" placeholder="Enter le nom" value={nom} onChange={(e)=>setNom(e.target.value)}/>
</div>
<div className="forminput">
 <label >Email</label>
 <input type="text" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
</div>
<div className="forminput">
 <label >Adresse</label>
 <input type="text" placeholder="Enter Adresse" value={adresse} onChange={(e)=>setAdresse(e.target.value)} required/>
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
export default NewFournisseur;
