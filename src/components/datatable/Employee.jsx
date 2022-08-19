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

const Datatable = () => {

  const [Employee, setEmployee] = useState([]);
  const [snackbar, setSnackbar] = React.useState(null);
  const handleCloseSnackbar = () => setSnackbar(null);


  const handleUpdate = React.useCallback(async (data) => {
    axios.put(updateemployee + `${data.id}`, data).catch(error => {
      setSnackbar({ children: error.message, severity: 'error' });
    })
    setSnackbar({ children: 'Employee bien enregistrer', severity: 'success' });
  }
  );


  const handleProcessRowUpdateError = React.useCallback((error) => {
    setSnackbar({ children: error.message, severity: 'error' });
  }, []);


  const handleDelete = (id) => {

    console.log('Printing id', id);
    axios.delete(deleteemployee+`${id}`).catch(error => {
      setSnackbar({ children: error.message, severity: 'error' });
    })
    setSnackbar({ children: 'Deleted successfully', severity: 'success' });
    window.location.reload(false);

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
          <div className="deleteButton" >Delete</div>

        </div>

      )
    }
  }];

  return (

    <div className="datatable">
      <div className="datatabletitle">Employees
        <CustomizedDialogs title="Ajouter un employé" button="Nouveau employé">
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