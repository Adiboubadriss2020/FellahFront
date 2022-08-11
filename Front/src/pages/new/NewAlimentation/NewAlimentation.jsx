import React, { useEffect, useState } from 'react';
import './new.scss';
import axios from 'axios';
import moment from 'moment';
import Sidebar from '../../../components/sidebar/Sidebar';
import Navbar from '../../../components/navbar/Navbar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { setRef } from '@mui/material';

export const NewAlimentation = ({ inputs, title }) => {
    const [type_alimentation, setType_alimentation] = useState('')
    const [date_arrivage, setDate_arrivage] = useState('')
    const [quantite_arrivage, setQuantite_arrivage] = useState('')
    const [prix_arrivage, setPrix] = useState('')
    const [ref, setRef] = useState('')
    const [alimentation, setAlimentation] = useState([])
    var k =""
    const newdate = moment(date_arrivage).format('YYYY-MM-DD')
    const [snackbar, setSnackbar] = React.useState(null);
    const handleCloseSnackbar = () => setSnackbar(null);


    const handleClick = (e) => {
        e.preventDefault()
        const alimentation = {
            ref,
            date_arrivage,
            prix_arrivage,
            quantite_arrivage,
            type_alimentation,         
        }

        console.log(ref)

       

        axios.post(`http://localhost:8080/alimentation/add`, alimentation).catch(error => {
            setSnackbar({ children: "Ref déja existe!", severity: 'error' });
        });

        setSnackbar({ children: 'Alimentation bien enregistrer', severity: 'success' });
    }

    useEffect(() => {
        fetch("http://localhost:8080/alimentation/getAll")
            .then(res => res.json())
            .then((result) => {
                setAlimentation(result);

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
                                <label >Ref d'alimentation</label>
                                <input type="number" placeholder="Number..." value={ref} onChange={(e) => setRef(e.target.value)} required />
                            </div>
                            <div className="forminput">
                                <label >Type d'alimentation</label>
                                <input type="text" placeholder="Type d'alimentation" value={type_alimentation} onChange={(e) => setType_alimentation(e.target.value)} required />
                            </div>
                            <div className="forminput">
                                <label >Date d'arrivage</label>
                                <input type="date" placeholder="Date d'arrivage'" value={newdate} onChange={(e) => setDate_arrivage(e.target.value)} required />
                            </div>
                            <div className="forminput">
                                <label >Quantité d'arrivage</label>
                                <input type="number" placeholder="Enter la quantité" value={quantite_arrivage} onChange={(e) => setQuantite_arrivage(e.target.value)} required />
                            </div>
                            <div className="forminput">
                                <label >Prix</label>
                                <input type="number" placeholder="Enter le prix" value={prix_arrivage} onChange={(e) => setPrix(e.target.value)} required />
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
export default NewAlimentation;
