import React, { useState } from 'react';
import './bovin.css';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import FormInput from '../Inputpopup/FormInput';
import { addanimal } from '../../../var';
export const NewAnimal = () => {
   
  const [snackbar, setSnackbar] = React.useState(null);
  const handleCloseSnackbar = () => setSnackbar(null);
  const [animal, setAnimal] = useState({
    date_achat:"",
    ref:"",
    date_vente:"",
    origine:"",
    poid_achat:"",
    poid_vente:"",
    prix_achat:"",
    infos:"",
    etat:""
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
    name: "date_achat",
    type: "date",
    placeholder: "Date d'achat",
    label: "Date d'achat",
    required: true,
  },
  {
    id: 3,
    name: "prix_achat",
    type: "text",
    placeholder: "Prix d'achat",
    errorMessage:
      "Respecter le prix d'arrivage!",
    pattern: "^([0-9'\.]{2,10})$",
    label: "Prix d'achat",
    required: true,
  },
  {
    id: 4,
    name: "prix_vente",
    type: "text",
    placeholder: "Prix de vente",
    errorMessage:
      "Respecter le prix de vente!",
    pattern: "^([0-9'\.]{2,10})$",
    label: "Prix de vente (Optionnel)"
  },
  {
    id: 5,
    name: "origine",
    type: "text",
    placeholder: "Race",
    errorMessage:
      "La race est une chaine de caractère!",
    label: "Race",
    pattern: "^[A-Za-z]{3,16}$",
    required: true,
  },
  {
    id: 6,
    name: "poid_achat",
    type: "text",
    placeholder: "Poid d'achat ",
    errorMessage:
      "Poid supérieur à 100!",
    label: "Poid (kg)",
    pattern: "^([0-9'\.]{2,4})$",
    required: true,
  },
  {
    id: 7,
    name: "poid_vente",
    type: "text",
    placeholder: "Poid de vente ",
    errorMessage:
      "Poid supérieur à 100!",
    label: "Poid de vente  (Optionnel)",
    pattern: "^([0-9'\.]{2,4})$",
    
  },

];

const handleSubmit = (e) => {
  e.preventDefault()
  axios.post(addanimal, animal).catch(error => {
    setSnackbar({ children: "Ref déja existe!", severity: 'error' });
  });

  setSnackbar({ children: "Ref bien enregistrer", severity: 'success' });
  window.location.reload(false);

}


const onChange = (e) => {
  setAnimal({ ...animal, [e.target.name]: e.target.value });
};
return (
  <div >
    <form onSubmit={handleSubmit}>
      <h1>Bovin</h1>
      {inputs.map((input) => (
        <FormInput
          key={input.id}
          {...input}
          animal={animal[input.name]}
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

export default NewAnimal;
