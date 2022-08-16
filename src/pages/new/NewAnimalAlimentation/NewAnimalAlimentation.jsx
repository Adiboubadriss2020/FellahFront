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
export const NewAnimalAlimentation = ({ inputs, title }) => {
    const [quantite, setQuantite] = useState('')
    const [date_alimentation, setDate_alimentation] = useState('')
    const [msg, setMsg] = useState([])
    var [animal, setAnimal] = useState() 

    const [ref, setRef] = useState('')
    const URL1 = `http://localhost:8080/animal/getAll`;
    var [alimentation, setAlimentation] = useState()
    const newdate = moment(date_alimentation).format('YYYY-MM-DD')
    const [snackbar, setSnackbar] = React.useState(null);
    const handleCloseSnackbar = () => setSnackbar(null);
  

    const handleClick = (e) => {
        e.preventDefault()
        const alimentation_animal = {
            date_alimentation,
            quantite,
            alimentation
        }

            //Check object alimentation
            axios.get(`http://localhost:8080/alimentation/check/${alimentation}`)
                .then(function (response) {
                    alimentation_animal.alimentation=response.data
                 
                    console.log(alimentation_animal.alimentation.quantite_arrivage)
                    console.log(alimentation_animal.quantite)
                    if (alimentation_animal.alimentation.quantite_arrivage == 0 || alimentation_animal.alimentation.quantite_arrivage < alimentation_animal.quantite) {
                        setSnackbar({ children:" Alimentation insuffisant! ", severity: 'error' });
                    }else{
                        alimentation_animal.alimentation = response.data
                        axios.post(`http://localhost:8080/alimentationanimal/add`, alimentation_animal).catch(error => {
                            setSnackbar({ children: error.message, severity: 'error' });
                        });
                        setSnackbar({ children: 'Alimentation bien enregistrer', severity: 'success' });
                        axios.put(`http://localhost:8080/alimentation/updatequantite/${alimentation_animal.quantite}/${alimentation_animal.alimentation.id}`).catch(error => {
                            setSnackbar({ children: error.message + " quantite problem!", severity: 'error' });
                        });

                    }
                    

                }).catch(error => {
                    setSnackbar({ children: error.message + ", Verifier l'identifiant de l'alimentation", severity: 'error' });
                });           
                    
           /* */

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
                                <label >Alimentation</label>
                                <input type="number" placeholder="Enter le réference de l'alimentation'" value={alimentation} onChange={(e) => setAlimentation(e.target.value)} required />
                            </div>
                            <div className="forminput">
                                <label >Quantite</label>
                                <input type="number" placeholder="Enter la quantité" value={quantite} onChange={(e) => setQuantite(e.target.value)} required />
                            </div>
                            <div className="forminput">
                                <label >Date d'alimentation</label>
                                <input type="date" placeholder="Date d'alimentation" value={newdate} onChange={(e) => setDate_alimentation(e.target.value)} required />
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
export default NewAnimalAlimentation;
