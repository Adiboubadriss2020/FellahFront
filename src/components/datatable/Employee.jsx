import React, { useEffect, useState } from 'react'

import { DataGrid } from '@mui/x-data-grid';
import { employeecol } from '../../datatabledata';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import NewEmployee from '../../pages/new/NewEmployee/NewEmployee';
import CustomizedDialogs from '../../pages/new/Inputpopup/dialog'
import { allemloyee, deleteemployee, updateemployee, value } from '../../var';
const useFakeMutation = () => {
  return React.useCallback(
    (user) =>
      new Promise((resolve, reject) =>
        setTimeout(() => {
          if (user.prenom === '' || user.nom === '' || user.age === '' || user.adresse === '' || user.salaire === '') {
            reject(new Error("Erreur: Champ est vide!"));
          }
          else {
            resolve({ ...user, prenom: user.prenom });
            resolve({ ...user, nom: user.nom });
            resolve({ ...user, adresse: user.adresse });
            resolve({ ...user, age: user.age });
            resolve({ ...user, salaire: user.salaire });
          }
        }, 200),
      ),
    [],
  );
};
const Datatable = () => {
  let value = 0

  const [Employee, setEmployee] = useState([]);
  const [snackbar, setSnackbar] = React.useState(null);
  const handleCloseSnackbar = () => setSnackbar(null);
  const mutateRow = useFakeMutation();


  const handleUpdate = React.useCallback(async (data) => {
    axios.put(updateemployee + `${data.id}`, data)
    const response = await mutateRow(data);
    setSnackbar({ children: 'Employé bien enregistrer', severity: 'success' });
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
      axios.delete(deleteemployee + `${id}`).catch(error => {
        setSnackbar({ children: error.message, severity: 'error' });
      })
      setSnackbar({ children: 'Deleted successfully', severity: 'success' });
      window.location.reload(false);
    } else {
      console.log('Thing was not saved to the database.');
    }
   

  }

  useEffect(() => {
    getEmployeeById();
  }, [])
  const getEmployeeById = async e => {
    const empinfos = await axios.get(allemloyee);
    setEmployee(empinfos.data);
  }


  const actionColumn = [{
    field: "action", headerName: "Action", width: 100,
    renderCell: (params) => {


      return (


        <div className="cellAction">
          <Link to="/fournisseurs/test" style={{ textDecoration: "none" }}>
          </Link>
          <div className="deleteButton" >Supprimer</div>

        </div>

      )
    }
  }];

  return (

    <div className="datatable">
      <div className="datatabletitle">Employees
        <CustomizedDialogs title="Ajouter un employé" button="Ajouter">
          <NewEmployee />
        </CustomizedDialogs>
      </div>
      
      <DataGrid

        rows={Employee}
        columns={employeecol.concat(actionColumn)}
        pageSize={5}
        disableMultipleSelection={true}
        rowsPerPageOptions={[5]}
        disableSelection={true}
        disableSelectionOnClick={true}
        disableColumnSelector={true}
        rowReordering

        onCellClick={(row) => {
          value = row.field;
          if (value === "action") {
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