import React, {  useState } from 'react';
import './fr.css';
import axios from 'axios';
import Alert  from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import FormInput from '../Inputpopup/FormInput';
import { addfournisseur } from '../../../var';
export const NewFournisseur = () => {
  const [snackbar, setSnackbar] = React.useState(null);
  const handleCloseSnackbar = () => setSnackbar(null);
  const [values, setValues] = useState({
    adresse: "",
    email: "",
    nom: "",
    commercial:""
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
      pattern: "^[A-Za-z]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "adresse",
      type: "text",
      placeholder: "Adresse",
      errorMessage:
        "L'adresse doit comporter de 3 à 16 caractères et ne doit pas inclure de caractère spécial !",
      label: "Adresse",
      pattern: "^[A-Za-z0-9'\.\-\s\,]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage:
        "Respecter l'email!",
      label: "Email",
      required: true,
    },
    {
      id: 4,
      name: "commercial",
      type: "text",
      placeholder: "Commercial",
      errorMessage:
        "Le commercial doit comporter de 3 à 16 caractères et ne doit pas inclure de caractère spécial !",
      label: "Commercial",
      pattern: "^[A-Za-z]{3,16}$",
      required: true,
    },
   
  ];



  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(addfournisseur, values).catch(error => {
      setSnackbar({ children: error.message, severity: 'error' });
    });

    setSnackbar({ children: 'Fournissur bien enregistrer', severity: 'success' });
    window.location.reload(false);
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div >
      <form onSubmit={handleSubmit}>
        <h1>Fournisseur</h1>
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
export default NewFournisseur;
