import React, { useState } from 'react';
import './vete.css';

import FormInput from '../Inputpopup/FormInput'
import axios from 'axios';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import 'react-phone-input-2/lib/style.css'
import { addveterinaire } from '../../../var';
export const NewVeterinaire = () => {
  

    const [snackbar, setSnackbar] = React.useState(null);
    const handleCloseSnackbar = () => setSnackbar(null);
    const [values, setValues] = useState({
        nom: "",
        telephone: "",
    });

    const inputs = [
        {
            id: 1,
            name: "nom",
            type: "text",
            placeholder: "Nom",
            errorMessage:
                "Le nom doit comporter de 3 à 16 caractères et ne doit pas inclure de caractère spécial !",
            label: "Nom",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "telephone",
            type: "text",
            placeholder: "Télephone: 'ex:0666666666'",
            errorMessage:
                "Respecter le numéro de telephone",
            label: "Télephone",
            pattern: "^(0[675][0-9]{8})$",
            required: true,
        },
    ];



    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
        axios.post(addveterinaire, values).catch(error => {
            setSnackbar({ children: error.message, severity: 'error' });
        });

        setSnackbar({ children: 'Veterianire bien enregistrer', severity: 'success' });
        window.location.reload(false);
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    return (
        <div >
            <form onSubmit={handleSubmit}>
                <h1>Veterianire</h1>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <button>Ajouter</button>
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

            </form>
        </div>
    )
}
export default NewVeterinaire;