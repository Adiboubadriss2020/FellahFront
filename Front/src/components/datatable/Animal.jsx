import React, { useEffect, useState } from 'react'
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { animalcol, userColumns } from '../../datatabledata';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
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

  const [Animal, setAnimal] = useState([]);
  let value = 0
  const URL = `http://localhost:8080/animal/update/`;
  const URL1 = `http://localhost:8080/animal/getAll`;
  const mutateRow = useFakeMutation();
  const [snackbar, setSnackbar] = React.useState(null);
  const handleCloseSnackbar = () => setSnackbar(null);


  const handleUpdate = React.useCallback(async (data) => {
    console.log(data)
    axios.put(`http://localhost:8080/animal/update/${data.id}`, data);
    const response = await mutateRow(data);
    setSnackbar({ children: 'Animal successfully saved', severity: 'success' });
    return response;
  },
    [mutateRow],
  );


  const handleProcessRowUpdateError = React.useCallback((error) => {
    setSnackbar({ children: error.message, severity: 'error' });
  }, []);


  const handleDelete = (id) => {

    console.log('Printing id', id);
    axios.delete(`http://localhost:8080/animal/delete/${id}`).catch(error => {
      setSnackbar({ children: error.message, severity: 'error' });
    })
    setSnackbar({ children: 'Deleted successfully', severity: 'success' });
    window.location.reload(false);

  }

  useEffect(() => {
    getAnimalById();
  }, [])
  const getAnimalById = async e => {
    const animalinfos = await axios.get(URL1);
    setAnimal(animalinfos.data);
  }


  const actionColumn = [{
    field: "action", headerName: "Action", width: 100,
    renderCell: (params) => {
      return (
        <div className="cellAction">
          
          
          <div className="deleteButton" >Delete</div>
         
        </div>
      )
    }
  }];
 
  return (


    <div className="datatable">
      <div className="datatabletitle">Animal
        <Link to="/bovin/new/NewAnimal" style={{ textDecoration: "none" }} className="newF">
          New Animal

        </Link>
        
      </div>
      <DataGrid

        rows={Animal}
        columns={animalcol.concat(actionColumn)}
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