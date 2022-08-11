import React, { useEffect, useState } from 'react';
import './new.scss';
import axios from 'axios';
import moment from 'moment';
import Select from 'react-select';
import Sidebar from '../../../components/sidebar/Sidebar';
import Navbar from '../../../components/navbar/Navbar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import SearchBar from '../../../components/Search/SearchBar';
export const NewVeterinaireVisite = ({ inputs, title }) => {
    const [prix_visite, setPrix_visite] = useState('')
    const [date_visite, setDate_visite] = useState('')
    const [msg, setMsg] = useState([])
    var [animal, setAnimal] = useState() 

    const [ref, setRef] = useState('')
    const URL1 = `http://localhost:8080/animal/getAll`;
    var [veterinaire, setVeterinare] = useState()
    const newdate = moment(date_visite).format('YYYY-MM-DD')
    const [snackbar, setSnackbar] = React.useState(null);
    const handleCloseSnackbar = () => setSnackbar(null);
  

    const handleClick = (e) => {
        e.preventDefault()
        const visite = {
            date_visite,
            prix_visite,
            animal,
            veterinaire
        }

        //Check object bovin
        axios.get(`http://localhost:8080/animal/check/${animal}`).then(function (response) { 
            visite.animal = response.data

            //Check object alimentation
            axios.get(`http://localhost:8080/veterinaire/check/${veterinaire}`)
                .then(function (response) {
                    visite.veterinaire=response.data               
                    console.log(visite.veterinaire.nom)
                    axios.post(`http://localhost:8080/visite/add`, visite).catch(error => {
                            setSnackbar({ children: error.message, severity: 'error' });
                        });
                        setSnackbar({ children: 'Visite bien enregistrer', severity: 'success' });

                    
                    

                }).catch(error => {
                    setSnackbar({ children: error.message + ", Verifier le nom de veterinaire", severity: 'error' });
                });           
                    
           /* */


        }).catch(error => {
            setSnackbar({ children: error.message+", Verifier l'identifiant du Bovin", severity: 'error' });
        });      

            

 //Check Quantity



       
                        
      /*  
       
  //  window.location.reload(false);
    */
}

    useEffect(() => {  
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
                                <label >Bovin Ref</label>
                                
                                <input type="number" placeholder="Enter le reference du bovin'" value={animal} onChange={(e) => setAnimal(e.target.value)} required />
                            </div>
                            <div className="forminput">
                                <label >Nom de veterinaire</label>
                                <input type="text" placeholder="Enter le nom de veterinaire'" value={veterinaire} onChange={(e) => setVeterinare(e.target.value)} required />
                            </div>
                            <div className="forminput">
                                <label >Date de visite</label>
                                <input type="date" placeholder="Enter la date de visite" value={newdate} onChange={(e) => setDate_visite(e.target.value)} required />
                            </div>
                            <div className="forminput">
                                <label >Prix de visite</label>
                                <input type="number" placeholder="Prix de visite" value={prix_visite} onChange={(e) => setPrix_visite(e.target.value)} required />
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
export default NewVeterinaireVisite;
