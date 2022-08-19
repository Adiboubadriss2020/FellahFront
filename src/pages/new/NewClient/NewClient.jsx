import React, {  useState } from 'react';
import './clt.css';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import FormInput from '../Inputpopup/FormInput'
import { addclt } from '../../../var';
export const NewClient = () => {
 

  const [snackbar, setSnackbar] = React.useState(null);
  const handleCloseSnackbar = () => setSnackbar(null);
  const [values, setValues] = useState({
    adresse: "",
    date: "",   
    nom: "",
    prenom: "",
    tel: "",
    transaction: "",
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
      name: "tel",
      type: "text",
      placeholder: "Télephone: 'ex:0666666666'",
      errorMessage:
        "Respecter le numéro de telephone",
      label: "Télephone",
      pattern: "^(0[675][0-9]{8})$",
      required: true,
    },
    {
      id: 5,
      name: "transaction",
      type: "text",
      placeholder: "Transaction",
      errorMessage:
        "Transaction invalide",
      label: "Transaction",
      pattern: "^([0-9]{3})$",
      required: true,
    },
    {
      id: 6,
      name: "date",
      type: "date",
      placeholder: "Date",
      errorMessage:
        "Salaire invalide",
      label: "Date",
      required: true,
    },
  ];



  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
    axios.post(addclt, values).catch(error => {
      setSnackbar({ children: error.message, severity: 'error' });
    });

    setSnackbar({ children: 'Client bien enregistrer', severity: 'success' });
    window.location.reload(false);
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div >
      <form onSubmit={handleSubmit}>
        <h1>Client</h1>
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
export default NewClient;