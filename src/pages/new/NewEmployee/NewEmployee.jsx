import React, { useEffect, useState } from 'react';
import './new.scss';
import axios from 'axios';
import Sidebar from '../../../components/sidebar/Sidebar';
import Navbar from '../../../components/navbar/Navbar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import Alert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';



export const NewEmployee = ({inputs,title}) => {
    const[file,setFile] = useState("");
    const[nom,setNom]=useState('')
    const[adresse,setAdresse]=useState('')
    const[prenom,setPrenom]=useState('')
  const [age, setAge] = useState('')
  const [salaire, setSalaire] = useState('')
    const[employee,setEmp]=useState([])
  const [snackbar, setSnackbar] = React.useState(null);
  const handleCloseSnackbar = () => setSnackbar(null);

    const handleClick=(e)=>{
      e.preventDefault()
      const emp={nom,prenom,age,adresse,salaire}
      console.log(emp)
      axios.post(`http://localhost:8080/employee/add`, emp).catch(error => {
        setSnackbar({ children: error.message, severity: 'error' });
      });

      setSnackbar({ children: 'Employee successfully saved', severity: 'success' });
    }
  

  useEffect(()=>{
    fetch("http://localhost:8080/employee/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setEmp(result);
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
 <input type="text" placeholder="Entrer le nom" value={nom} onChange={(e)=>setNom(e.target.value)}/>
</div>
<div className="forminput">
 <label >Prenom</label>
 <input type="text" placeholder="Enter le prénom" value={prenom} onChange={(e)=>setPrenom(e.target.value)}/>
</div>
<div className="forminput">
 <label >Adresse</label>
 <input type="text" placeholder="Enter Adresse" value={adresse} onChange={(e)=>setAdresse(e.target.value)} required/>
</div>
<div className="forminput">
  <label >Age</label>
  <input type="number" placeholder="Enter l'age" value={age} onChange={(e) => setAge(e.target.value)} required />
</div>
<div className="forminput">
  <label >Salaire</label>
  <input type="number" placeholder="Enter Le salaire" value={salaire} onChange={(e) => setSalaire(e.target.value)} required />
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
export default NewEmployee;
