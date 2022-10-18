import React, { useState } from 'react';
import './almb.css';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import FormInput from '../Inputpopup/FormInput'
import Snackbar from '@mui/material/Snackbar';
import { addalimentationanimal, addalimentationanimal_check, check_alimentation_qnt } from '../../../var';
export const NewAnimalAlimentation = () => {
    const [quantite, setQuantite] = useState('')
    const [date_alimentation, setDate_alimentation] = useState('')
    var [alimentation, setAlimentation] = useState()
    const [snackbar, setSnackbar] = React.useState(null);
    const handleCloseSnackbar = () => setSnackbar(null);
    const alimentation_animal = {
        quantite,
        date_alimentation,
        alimentation
    }
    const inputs = [
        {
            id: 1,
            name: "alimentation",
            type: "text",
            placeholder: "Le Ref de l'alimentation",
            errorMessage:
                "Ref n'existe pas!",
            pattern: "^([0-9]{1,10})$",
            label: "Ref alimentation",
            onChange: (e) => setAlimentation(e.target.value),
            required: true,
        },
        {
            id: 2,
            name: "quantite",
            type: "text",
            placeholder: "Quantite",
            errorMessage:
                "Respecter la Quantité!",
            label: "Quantite",
            pattern: "^([0-9]{1,10})$",
            onChange: (e) => setQuantite(e.target.value),
            required: true,
        },
        {
            id: 3,
            name: "date_alimentation",
            type: "date",
            placeholder: "Enter la date d'alimentation",
            label: "Date",
            onChange: (e) => setDate_alimentation(e.target.value),
            required: true,
        },
    ];



    const handleSubmit = (e) => {
        e.preventDefault()

        //Check object bovin

        axios.get(addalimentationanimal_check+`${alimentation}`)
            .then(function (response) {
                alimentation_animal.alimentation = response.data

                if (alimentation_animal.alimentation.quantite_arrivage === 0 || alimentation_animal.alimentation.quantite_arrivage < alimentation_animal.quantite) {
                    setSnackbar({ children: " Alimentation insuffisante! ", severity: 'error' });
                } else {
                    alimentation_animal.alimentation = response.data
                    axios.post(addalimentationanimal, alimentation_animal).catch(error => {
                        setSnackbar({ children: error.message, severity: 'error' });
                    });
                    setSnackbar({ children: 'Alimentation bien enregistré', severity: 'success' });
                     window.location.reload(false);
                    axios.put(check_alimentation_qnt+`${alimentation_animal.quantite}/${alimentation_animal.alimentation.id}`).catch(error => {
                        setSnackbar({ children: error.message + " quantite problem!", severity: 'error' });
                    });

                }
            }).catch(error => {
                setSnackbar({ children:", Verifier l'identifiant de l'alimentation", severity: 'error' });
            });

        /* */

    

    }

    return (
        <div >
            <form onSubmit={handleSubmit}>
                <h1>Alimentation Bovin</h1>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        alimentation_animal={alimentation_animal[input.name]}
                    //onChange={onChange}
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
export default NewAnimalAlimentation;
