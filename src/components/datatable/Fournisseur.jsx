import React, { useEffect, useState } from 'react'
import './fournisseur.scss'
import { DataGrid} from '@mui/x-data-grid';
import { userColumns } from '../../datatabledata';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert, { AlertProps } from '@mui/material/Alert';
import CustomizedDialogs from '../../pages/new/Inputpopup/dialog'
import NewFournisseur from '../../pages/new/NewFournisseur/NewFournisseur';
import { allfournisseur, deletefournisseur, updatefournisseur } from '../../var';

const useFakeMutation = () => {
  return React.useCallback(
    (user) =>
      new Promise((resolve, reject) =>
        setTimeout(() => {
          if (user.email === '' || user.nom === '' || user.adresse === ''  ) {
            reject(new Error("Erreur: Champ est vide!"));
          }
          else {
            resolve({ ...user, email: user.email });
            resolve({ ...user, nom: user.nom });
            resolve({ ...user, adresse: user.adresse });
          }
        }, 200),
      ),
    [],
  );
};
const Datatable = () => {
let value =0
const [fournisseurs, setFournisseurs] = useState([]);  
const mutateRow = useFakeMutation();
const [snackbar, setSnackbar] = React.useState(null);
const handleCloseSnackbar = () => setSnackbar(null);


const handleUpdate = React.useCallback(async(data) => 
{

  axios.put(updatefournisseur+`${data.id}`,data);
    const response = await mutateRow(data);
    setSnackbar({ children: 'Fournisseur bien enregistreé', severity: 'success' });
    return response;
  },
    [mutateRow],
  );
  

  const handleProcessRowUpdateError = React.useCallback((error) => {
    setSnackbar({ children: error.message, severity: 'error' });
  }, []);
  

  const handleDelete = (id) => {

   console.log('Printing id', id);
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet élément ?')) {
      axios.delete(deletefournisseur + `${id}`).catch(error => {
        setSnackbar({ children: "Fournisseur active!", severity: 'error' });
      })
      setSnackbar({ children: 'Bien supprimé', severity: 'success' });
      window.location.reload(false);    
    } else {
      console.log('Thing was not saved to the database.');
    }
  
  }

useEffect(()=>{
  getFournisseurById();
},[])
const getFournisseurById= async e =>{
  const fournisseurinfos = await axios.get(allfournisseur);
  setFournisseurs(fournisseurinfos.data);
  
}


  const actionColumn=[{field:"action",headerName:"Action",width:200,
   renderCell:(params)=>{


return(


<div className="cellAction">

    <div className="deleteButton" >Supprimer</div>  

</div>
 
)
}}];

  return (


         <div className="datatable">
           <div className="datatabletitle">Fournisseurs
        <CustomizedDialogs title="Ajouter un fournisseur" button="Ajouter">
          <NewFournisseur />
        </CustomizedDialogs>

           </div>
           
 
          
      <DataGrid
     
        rows={fournisseurs}
        columns={userColumns.concat(actionColumn) }
        pageSize={5}
        disableMultipleSelection={true}
        rowsPerPageOptions={[5]}
        disableSelection={true}
        disableSelectionOnClick={true}
        disableColumnSelector={true}
        rowReordering 
        
        onCellClick={(row)=>{
          value=row.field;
          if(value=="action"){
          handleDelete(row.id)
          }
        }}
       
        processRowUpdate={handleUpdate}
        onProcessRowUpdateError={handleProcessRowUpdateError}

        experimentalFeatures={{ newEditingApi: true }}

      />
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
    </div>
  
  )
}

export default Datatable
