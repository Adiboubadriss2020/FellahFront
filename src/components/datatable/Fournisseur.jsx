import React, { useEffect, useState } from 'react'
import './datatable.scss'
import { DataGrid} from '@mui/x-data-grid';
import { userColumns } from '../../datatabledata';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert, { AlertProps } from '@mui/material/Alert';

const useFakeMutation = () => {
  return React.useCallback(
    (user) =>
      new Promise((resolve, reject) =>
        setTimeout(() => {
          if (user.name?.trim() === '') {
            reject(new Error("Error while saving user: name can't be empty."));
          } else {
            resolve({ ...user, name: user.name?.toUpperCase() });
          }
        }, 200),
      ),
    [],
  );
};
const Datatable = () => {

const [fournisseurs, setFournisseurs] = useState([]);  
let value=0
  const URL = `http://fellah-back.herokuapp.com/fournisseur/update/`;
  const URL1 =`https://fellah-back.herokuapp.com/fournisseur/getAll`;
const mutateRow = useFakeMutation();
const [snackbar, setSnackbar] = React.useState(null);
const handleCloseSnackbar = () => setSnackbar(null);


const handleUpdate = React.useCallback(async(data) => 
{

  axios.put( `http://fellah-back.herokuapp.com/fournisseur/update/${data.id}`,data);
    const response = await mutateRow(data);
    setSnackbar({ children: 'User successfully saved', severity: 'success' });
    return response;
  },
    [mutateRow],
  );
  

  const handleProcessRowUpdateError = React.useCallback((error) => {
    setSnackbar({ children: error.message, severity: 'error' });
  }, []);
  

  const handleDelete = (id) => {

   console.log('Printing id', id);
    axios.delete(`http://localhost:8080/fournisseur/delete/${id}`).catch(error => {
      setSnackbar({ children: error.message, severity: 'error' });
    })
    setSnackbar({ children: 'Deleted successfully', severity: 'success' });
    window.location.reload(false);

  }

useEffect(()=>{
  getFournisseurById();
},[])
const getFournisseurById= async e =>{
  const fournisseurinfos = await axios.get(URL1);
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
           <Link to="/fournisseurs/new/NewFournisseur"style={{textDecoration:"none"}} className="newF">
             Nouveau Fournisseur
             
</Link>

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