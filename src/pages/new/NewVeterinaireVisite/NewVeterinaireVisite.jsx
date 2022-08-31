import React, { useState } from 'react';
import './vetevst.css';
import FormInput from '../Inputpopup/FormInput'
import axios from 'axios';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { addvisite, checkanimal, checkveterinaire } from '../../../var';
export const NewVeterinaireVisite = () => {
    var [veterinaire, setVeterinare] = useState()
    var [animal, setAnimal] = useState() 
    const [date_visite, setDate_visite] = useState('')
    const [snackbar, setSnackbar] = React.useState(null);
    const handleCloseSnackbar = () => setSnackbar(null);
    const visite = {
        date_visite,
        animal,
        veterinaire
    }
    const inputs = [
        {
            id: 1,
            name: "date_visite",
            type: "Date",
            placeholder: "Date visite",
            errorMessage:
                "Respecter la date!",
            label: "Date visite",
            onChange: (e) => setDate_visite(e.target.value),
            required: true,
        },
    
        {
            id: 2,
            name: "animal",
            type: "text",
            placeholder: "Enter le Ref du bovin!",
            label: "Ref",
            onChange: (e) => setAnimal(e.target.value),
            required: true,
        },
        {
            id: 3,
            name: "veterinaire",
            type: "text",
            placeholder: "Enter le nom du veterinaire!",
            label: "Nom veterinaire",
            onChange: (e) => setVeterinare(e.target.value),
            required: true,
            
        },
    ];



    const handleSubmit = (e) => {
        e.preventDefault()

        //Check object bovin
        
        axios.get(checkanimal+`${animal}`).then(function (response) {
            visite.animal = response.data
           

            //Check object alimentation
           
            axios.get(checkveterinaire+`${veterinaire}`).then(function (response) {
                 
                visite.veterinaire = response.data
                console.log(visite)
                axios.post(addvisite, visite).catch(error => {
                        setSnackbar({ children: error.message, severity: 'error' });
                    });
                    setSnackbar({ children: 'Visite bien enregistrer', severity: 'success' });
                  //  window.location.reload(false);

                }).catch(error => {
                    setSnackbar({ children: error.message + ", Verifier le nom de veterinaire", severity: 'error' });
                });
        }).catch(error => {
            setSnackbar({ children: error.message + ", Verifier l'identifiant du Bovin", severity: 'error' });
        });

    }

    return (
        <div >
            <form onSubmit={handleSubmit}>
                <h1>Visite médicale</h1>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        visite={visite[input.name]}
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
export default NewVeterinaireVisite;