import React, { useEffect, useState } from 'react'
import './client.scss'
import { DataGrid} from '@mui/x-data-grid';
import { clientcol} from '../../datatabledata';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import CustomizedDialogs from '../../pages/new/Inputpopup/dialog'
import NewClient from '../../pages/new/NewClient/NewClient';
import { allclt, deleteclt, updateclt, value } from '../../var';

const Datatable = () => {
  let value = 0

  const [Client, setClient] = useState([]);
  const [snackbar, setSnackbar] = React.useState(null);
  const handleCloseSnackbar = () => setSnackbar(null);


  const handleUpdate = React.useCallback(async (data) => {

    axios.put(updateclt+`${data.id}`, data);
    setSnackbar({ children: 'Client est bien enregistrer', severity: 'success' });
  },
  );


  const handleProcessRowUpdateError = React.useCallback((error) => {
    setSnackbar({ children: error.message, severity: 'error' });
  }, []);


  const handleDelete = (id) => {

    console.log('Printing id', id);
    if (window.confirm('Êtes-vous sûr de vouloir enregistrer cet élément dans la base de données ?')) {
      axios.delete(deleteclt + `${id}`).catch(error => {
        setSnackbar({ children: error.message, severity: 'error' });
      })
      setSnackbar({ children: 'Bien supprimer', severity: 'success' });
      window.location.reload(false);

    } else {
      console.log('Thing was not saved to the database.');
    }
   

  }

  useEffect(() => {
    getClientById();
  }, [])
  const getClientById = async e => {
    const cltinfos = await axios.get(allclt);
    setClient(cltinfos.data);
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
      <div className="datatabletitle">Client
        <CustomizedDialogs title="Ajouter un client" button="Nouveau client">
          <NewClient />
        </CustomizedDialogs>

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