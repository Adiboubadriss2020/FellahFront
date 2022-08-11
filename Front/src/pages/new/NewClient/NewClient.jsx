import React, { useEffect, useState } from 'react';
import './new.scss';
import Sidebar from '../../../components/sidebar/Sidebar';
import Navbar from '../../../components/navbar/Navbar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import axios from 'axios';
import Alert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
export const NewClient = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [nom, setNom] = useState('')
  const [adresse, setAdresse] = useState('')
  const [prenom, setPrenom] = useState('')
  const [tel, setTel] = useState('')
  const [client, setClt] = useState([])
  const [snackbar, setSnackbar] = React.useState(null);
  const handleCloseSnackbar = () => setSnackbar(null);

  const handleClick = (e) => {
    e.preventDefault()
    const clt = { nom, prenom, adresse, tel }
    console.log(clt)
    axios.post(`http://localhost:8080/client/add`, clt).catch(error => {
      setSnackbar({ children: error.message, severity: 'error' });
    });

    setSnackbar({ children: 'Employee successfully saved', severity: 'success' });
  }


  useEffect(() => {
    fetch("http://localhost:8080/client/getAll")
      .then(res => res.json())
      .then((result) => {
        setClt(result);
      }
      )
  }, [])
  return (
    <div className="new">
      <Sidebar />
      <div className="newcontainer">
        <Navbar />
        <div className="top">
          <h1 className="title">{title}</h1>
        </div>
        <div className="bottom">
     
          <div className="right">
            <form action="" noValidate autoComplete="off">

              <div className="forminput">
                <label >Nom</label>
                <input type="text" placeholder="Entrer le nom" value={nom} onChange={(e) => setNom(e.target.value)} />
              </div>
              <div className="forminput">
                <label >Prenom</label>
                <input type="text" placeholder="Enter le prénom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
              </div>
              <div className="forminput">
                <label >Adresse</label>
                <input type="text" placeholder="Enter Adresse" value={adresse} onChange={(e) => setAdresse(e.target.value)} required />
              </div>
              <div className="forminput">
                <label >Tel</label>
                <input type="number"  placeholder="Enter le numero de telephone" value={tel} onChange={(e) => setTel(e.target.value)} required />
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
export default NewClient;