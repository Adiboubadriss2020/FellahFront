import React, { useEffect, useState } from 'react'

import { DataGrid } from '@mui/x-data-grid';
import { animalcol, employeecol, userColumns } from '../../datatabledata';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert, { AlertProps } from '@mui/material/Alert';
import RegistrationForm from '../../pages/new/NewEmployee';
import CustomizedDialogs from '../../pages/new/NewEmployee/dialog'

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

  const [Employee, setEmployee] = useState([]);
  let value = 0
  const URL = `http://localhost:8080/animal/update/`;
  const URL1 = `http://localhost:8080/employee/getAll`;
  const mutateRow = useFakeMutation();
  const [snackbar, setSnackbar] = React.useState(null);
  const handleCloseSnackbar = () => setSnackbar(null);


  const handleUpdate = React.useCallback(async (data) => {

    axios.put(`http://localhost:8080/employee/update/${data.id}`, data);
    const response = await mutateRow(data);
    setSnackbar({ children: 'Employee successfully saved', severity: 'success' });
    return response;
  },
    [mutateRow],
  );


  const handleProcessRowUpdateError = React.useCallback((error) => {
    setSnackbar({ children: error.message, severity: 'error' });
  }, []);


  const handleDelete = (id) => {

    console.log('Printing id', id);
    axios.delete(`http://localhost:8080/employee/delete/${id}`).catch(error => {
      setSnackbar({ children: error.message, severity: 'error' });
    })
    setSnackbar({ children: 'Deleted successfully', severity: 'success' });
    window.location.reload(false);

  }

  useEffect(() => {
    getEmployeeById();
  }, [])
  const getEmployeeById = async e => {
    const empinfos = await axios.get(URL1);
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
        <CustomizedDialogs title="Ajouter un employee">
          <RegistrationForm />
        </CustomizedDialogs>
        <Link to="/employee/new/TacheEmployee" style={{ textDecoration: "none",}} className="newF">
          Affecter une tache

        </Link>
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
          if (value == "action") {
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