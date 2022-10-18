import React, {useState } from 'react'
import axios from 'axios';
import "./emp.css"
import FormInput from '../Inputpopup/FormInput'
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { addemployee } from '../../../var';
const NewEmployee = () => {
    const [snackbar, setSnackbar] = React.useState(null);
    const handleCloseSnackbar = () => setSnackbar(null);
    const [values, setValues] = useState({
        adresse: "",
        age: "",
        nom: "",
        prenom:"",
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
            name: "prenom",
            type: "text",
            placeholder: "Prenom",
            errorMessage:
                "Le prenom doit comporter de 3 à 16 caractères et ne doit pas inclure de caractère spécial !",
            label: "Prenom",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 3,
            name: "adresse",
            type: "text",
            placeholder: "Adresse",
            errorMessage:
                "L'adresse doit comporter de 3 à 16 caractères et ne doit pas inclure de caractère spécial !",
            label: "Adresse",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 4,
            name: "age",
            type: "text",
            placeholder: "Age",
            errorMessage:
                "Respecter l'age!",
            label: "Age",
            pattern: "^(1[89]|[2-9]{2})$",
            required: true,
        },
    ];

   
  
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
        axios.post(addemployee,values).catch(error => {
            setSnackbar({ children: error.message, severity: 'error' });
        });

        setSnackbar({ children: 'Employé bien enregistré', severity: 'success' });
        window.location.reload(false);
    }
    
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    return (
        <div >
            <form onSubmit={handleSubmit}>
                <h1>Employé</h1>
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

export default NewEmployee;
