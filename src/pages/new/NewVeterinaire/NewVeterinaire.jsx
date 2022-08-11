import React, { useEffect, useState } from 'react';
import './new.scss';
import moment from 'moment';

import Sidebar from '../../../components/sidebar/Sidebar';
import Navbar from '../../../components/navbar/Navbar';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import 'react-phone-input-2/lib/style.css'
export const NewVeterinaire = ({ inputs, title }) => {
  
    const [nom, setNom] = useState('')
    const [date, setDate] = useState('')
    const [telephone, setTel] = useState('')
    const [transaction, setTransaction] = useState([])
    const [snackbar, setSnackbar] = React.useState(null);
    const handleCloseSnackbar = () => setSnackbar(null);
    const newdate = moment(date).format('YYYY-MM-DD')
    

    const handleClick = (e) => {
        e.preventDefault()
        const obj = {
            nom,
            telephone,
            transaction,
            date
         }
        console.log(obj)
        axios.post(`http://localhost:8080/veterinaire/add`, obj).catch(error => {
            setSnackbar({ children: "Veterinaire avec ce nom déja existe!", severity: 'error' });
        });

        setSnackbar({ children: 'Veterinaire bien enregister', severity: 'success' });
    }


    useEffect(() => {
        fetch("http://localhost:8080/veterinaire/getAll")
            .then(res => res.json())
            .then((result) => {
               // setClt(result);
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
                                <input type="text" placeholder="Un nom doit etre unique" value={nom} onChange={(e) => setNom(e.target.value)} />
                            </div>
                            <div className="forminput">
                                <label >Telephone</label>
                                <input type="number" placeholder="0645-4..." value={telephone} onChange={(e) => setTel(e.target.value)} required />
                            </div>
                            <div className="forminput">
                                <label >Transaction</label>
                                <input type="text" placeholder="0645-4..." value={transaction} onChange={(e) => setTransaction(e.target.value)} required />
                            </div>
                            <div className="forminput">
                                <label >Date de transaction</label>
                                <input type="date" placeholder="Date..." value={newdate} onChange={(e) => setDate(e.target.value)} required />
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
export default NewVeterinaire;