import React, { useEffect, useState } from 'react'
import './new.scss';
import axios from 'axios';

const RegistrationForm = () => {
    const [employee, setEmp] = useState([])
    const [snackbar, setSnackbar] = React.useState(null);
    const handleCloseSnackbar = () => setSnackbar(null);
    const initialValues = { nom: "", adresse: "", prenom: "", age: "", salaire:"" };
    const [values, setValues] = useState({
        nom: "",
        prenom:"",
        adresse: "",
        age: "",
        salaire: "",
    });

    const inputs = [
        {
            id: 1,
            nom: "nom",
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
            type: "number",
            placeholder: "Age",
            errorMessage:
                "Respecter l'age!",
            label: "Prenom",
            pattern: "^(1[89]|[2-9]\d)$",
            required: true,
        },
        {
            id: 4,
            name: "age",
            type: "number",
            placeholder: "Age",
            errorMessage:
                "Salaire invalide",
            label: "Prenom",
            pattern: "^([0-9]{3})$",
            required: true,
        },
    ];

   
  
    const handleClick = (e) => {
        e.preventDefault()
        const emp = {}
        console.log(emp)
        axios.post(`http://localhost:8080/employee/add`, emp).catch(error => {
            setSnackbar({ children: error.message, severity: 'error' });
        });

        setSnackbar({ children: 'Employee successfully saved', severity: 'success' });
    }
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    return (
        <div className="app">
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <button>Submit</button>
            </form>
        </div>
    )
}

export default RegistrationForm;