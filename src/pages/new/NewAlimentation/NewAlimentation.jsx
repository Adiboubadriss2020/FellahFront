import React, { useState } from 'react';
import './new.scss';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import FormInput from '../Inputpopup/FormInput';
import { addalimentation } from '../../../var';
export const NewAlimentation = () => {
    //const [alimentation, setAlimentation] = useState([])
    const [snackbar, setSnackbar] = React.useState(null);
    const handleCloseSnackbar = () => setSnackbar(null);
    const [alimentation, setAlimentation] = useState({
        ref:"",
        date_arrivage:"",
        prix_arrivage:"",
        quantite_arrivage:"",
        type_alimentation:"",
    });

    const inputs = [
        {
            id: 1,
            name: "ref",
            type: "text",
            placeholder: "Ref d'alimentation",
            errorMessage:
                "Respecter le Ref, exp: 054451",
            label: "Ref",
            pattern: "^([0-9]{3,10})$",
            required: true,
        },
        {
            id: 2,
            name: "date_arrivage",
            type: "date",
            placeholder: "Date d'arrivage",
            label: "Date d'arrivage",
            required: true,
        },
        {
            id: 3,
            name: "prix_arrivage",
            type: "text",
            placeholder: "Prix d'arrivage",
            errorMessage:
                "Respecter le prix d'arrivage!",
            pattern: "^([0-9']{2,10})$",
            label: "Prix d'arrivage",
            required: true,
        },
        {
            id: 4,
            name: "type_alimentation",
            type: "text",
            placeholder: "Type d'alimentation",
            errorMessage:
                "Respecter le type d'alimentation!",
            label: "Type d'alimentation",
            pattern: "^[A-Za-z]{3,16}$",
            required: true,
        },
        
        {
            id: 5,
            name: "quantite_arrivage",
            type: "text",
            placeholder: "Quantite ",
            errorMessage:
                "Respecter la Quantité!",
            label: "Quantite (kg)",
            pattern: "^([0-9']{1,10})$",
            required: true,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(addalimentation, alimentation).catch(error => {
            setSnackbar({ children: "Ref déja existe!", severity: 'error' });
        });
        setSnackbar({ children: 'Alimentation bien enregistrer', severity: 'success' });
        window.location.reload(false);

    }


    const onChange = (e) => {
        setAlimentation({ ...alimentation, [e.target.name]: e.target.value });
    };
    return (
        <div >
            <form onSubmit={handleSubmit}>
                <h1>Alimentation</h1>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        alimentation={alimentation[input.name]}
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
export default NewAlimentation;
