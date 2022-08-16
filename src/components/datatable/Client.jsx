import React, { useEffect, useState } from 'react'
import './client.scss'
import { DataGrid} from '@mui/x-data-grid';
import { clientcol,UserRow } from '../../datatabledata';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

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

  const [Client, setClient] = useState([]);
  let value = 0
  const URL = `http://localhost:8080/client/update/`;
  const URL1 = `http://localhost:8080/client/getAll`;
  const mutateRow = useFakeMutation();
  const [snackbar, setSnackbar] = React.useState(null);
  const handleCloseSnackbar = () => setSnackbar(null);


  const handleUpdate = React.useCallback(async (data) => {

    axios.put(`http://localhost:8080/client/update/${data.id}`, data);
    const response = await mutateRow(data);
    setSnackbar({ children: 'Client est bien enregistrer', severity: 'success' });
    return response;
  },
    [mutateRow],
  );


  const handleProcessRowUpdateError = React.useCallback((error) => {
    setSnackbar({ children: error.message, severity: 'error' });
  }, []);


  const handleDelete = (id) => {

    console.log('Printing id', id);
    axios.delete(`http://localhost:8080/client/delete/${id}`).catch(error => {
      setSnackbar({ children: error.message, severity: 'error' });
    })
    setSnackbar({ children: 'Deleted successfully', severity: 'success' });
    window.location.reload(false);

  }

  useEffect(() => {
    getClientById();
  }, [])
  const getClientById = async e => {
    const cltinfos = await axios.get(URL1);
    setClient(cltinfos.data);
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
      <div className="datatabletitle">Client
        <Link to="/client/new/NewClient" style={{ textDecoration: "none" }} className="newF">
          New Client

        </Link>

      </div>
      <DataGrid

        rows={Client}
        columns={clientcol.concat(actionColumn)}
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