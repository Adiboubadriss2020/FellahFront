import React, { useEffect, useState } from 'react'
import './fournisseur.scss'
import { DataGrid} from '@mui/x-data-grid';
import { userColumns } from '../../datatabledata';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert, { AlertProps } from '@mui/material/Alert';
import CustomizedDialogs from '../../pages/new/Inputpopup/dialog'
import NewFournisseur from '../../pages/new/NewFournisseur/NewFournisseur';
import { allfournisseur, deletefournisseur, updatefournisseur, value } from '../../var';

const useFakeMutation = () => {
  return React.useCallback(
    (user) =>
      new Promise((resolve, reject) =>
        setTimeout(() => {
          console.log(user)
          if (user.email === '') {
            reject(new Error("Erreur: Email est obligatoire!"));
          } else {
            resolve({ ...user, email: user.email });
          }
        }, 200),
      ),
    [],
  );
};
const Datatable = () => {

const [fournisseurs, setFournisseurs] = useState([]);  
const mutateRow = useFakeMutation();
const [snackbar, setSnackbar] = React.useState(null);
const handleCloseSnackbar = () => setSnackbar(null);


const handleUpdate = React.useCallback(async(data) => 
{

  axios.put(updatefournisseur+`${data.id}`,data);
    const response = await mutateRow(data);
    setSnackbar({ children: 'Fournisseur bien enregistrer', severity: 'success' });
    return response;
  },
    [mutateRow],
  );
  

  const handleProcessRowUpdateError = React.useCallback((error) => {
    setSnackbar({ children: error.message, severity: 'error' });
  }, []);
  

  const handleDelete = (id) => {

   console.log('Printing id', id);
    axios.delete(deletefournisseur+`${id}`).catch(error => {
      setSnackbar({ children: error.message, severity: 'error' });
    })
    setSnackbar({ children: 'Deleted successfully', severity: 'success' });
    window.location.reload(false);

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

    <div className="deleteButton" >Delete</div>  

</div>
 
)
}}];

  return (


         <div className="datatable">
           <div className="datatabletitle">Fournisseurs
        <CustomizedDialogs title="Ajouter un fournisseur" button="Nouveau fournisseur">
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