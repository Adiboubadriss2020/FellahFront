import React, { useState } from 'react'
import FormInput from '../new/Inputpopup/FormInput';
import axios from 'axios';
import "./login.scss"
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export const Register = () => {
    var va=""
    const navigate = useNavigate();

    const [snackbar, setSnackbar] = React.useState(null);
    const handleCloseSnackbar = () => setSnackbar(null);
    const [registeru, setRegister] = useState({
        name: "",
        email: "",
        motdepasse: "",
       // motdepasse2: "",
    });

    const inputs = [
        {
            id: 1,
            name: "name",
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
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage:"Respecter l'email!",
            label: "Email",
            required: true,
        },
        {
            id: 3,
            name: "motdepasse",
            type: "password",
            placeholder: "Password",
            errorMessage:
                "Le Mot de passe doit comporter de 3 à 16 caractères",
            label: "mot de passe",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
      /*  {
            id: 4,
            name: "motdepasse2",
            type: "password",
            placeholder: "Password",
            errorMessage:
                "Mot de passe n'est pas identique!",
            label: "Confirmer le mot de passe",
            pattern: registeru.password,
            required: true,
        },*/
      
    ];
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(registeru)
        axios.post(`http://localhost:8080/account/register`, registeru).then(val => {
            va =val.data
            if(va.includes('Emai'))
            {
                setSnackbar({ children: va, severity: 'error' });

            }
            else{
                setSnackbar({ children: va, severity: 'success' });
                navigate("/Login");

            }


        })
        
       
    }

    const onChange = (e) => {
        setRegister({ ...registeru, [e.target.name]: e.target.value });
    };
    return (
        <div style={{ marginTop: '100px' }}>
        <div style={{alignItems:'center', alignContent: 'center',marginLeft:'500px'}}>

            <form onSubmit={handleSubmit}>
                    <h1 style={{ marginRight: '550px', fontFamily: "Helvetica Neue" + ',' + "Helvetica, Arial" }}>Register</h1>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        registeru={registeru[input.name]}
                        onChange={onChange}
                    />
                ))}
                    <button>Créer</button><br/>
                    <Link to={"/login"} >Login</Link>
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
        </div>
    )
}
export default Register;