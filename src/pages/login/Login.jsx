import React, { useContext, useState } from 'react'
import FormInput from '../new/Inputpopup/FormInput';
import axios from 'axios';
import "./login.scss"
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
 import Sidebar from '../../components/sidebar/Sidebar';
export const Login = (va) => {
  localStorage.clear()
  const navigate = useNavigate();
  const [snackbar, setSnackbar] = React.useState(null);
  const handleCloseSnackbar = () => setSnackbar(null);
  const [registeru, setRegister] = useState({
    email: "",
    motdepasse: "",
    // motdepasse2: "",
  });

  const inputs = [
   
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Respecter l'email!",
      label: "Email",
      required: true,
    },
    {
      id: 2,
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
    axios.post(`https://fellah-back.herokuapp.com/account/login`,registeru).then(val => {
    va = val.data
    /*  dispatch(loginSuccess(users))
      localStorage.setItem('jwt', users.auth_token)
      localStorage.setItem('user', JSON.stringify(users))
      console.log('users', users) // undefined*/
      if(va===""){
        setSnackbar({ children: "Vérifier vos donner!", severity: 'error' });
      }
      else{
        localStorage.setItem('user', va.name)
        console.log(localStorage.getItem('user'))
        setSnackbar({ children: va, severity: 'success' });
        navigate("/Doshboard");
      }
    })


  }

  const onChange = (e) => {
    setRegister({ ...registeru, [e.target.name]: e.target.value });
  };
  return (
    <div style={{ marginTop: '100px' }}>
      <div style={{ alignItems: 'center', alignContent: 'center', marginLeft: '500px' }}>
        <form onSubmit={handleSubmit}>
          <h1 style={{ marginRight: '580px', fontFamily: "Helvetica Neue"+','+"Helvetica, Arial"}}>Se connecter</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              registeru={registeru[input.name]}
              onChange={onChange}
            />
          ))}
          
          <button>
            Login
          </button>

         <br />
          <Link to={"/"} >Créer un nouveau compte</Link>
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
export default Login;
