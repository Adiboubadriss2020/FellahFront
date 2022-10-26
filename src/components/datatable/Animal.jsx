import React, { useEffect, useState } from 'react'
import './animal.scss'
import { DataGrid } from '@mui/x-data-grid';
import { animalcol} from '../../datatabledata';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import NewAnimal from '../../pages/new/NewAnimal/NewAnimal'
import CustomizedDialogs from '../../pages/new/Inputpopup/dialog'
import 'reactjs-popup/dist/index.css';
import { allanimal, deleteanimal, updateanimal, value } from '../../var';
const useFakeMutation = () => {
  return React.useCallback(
    (user) =>
      new Promise((resolve, reject) =>
        setTimeout(() => {
          if (user.ref === '' || user.date_achat === '' || user.date_vente === '' || user.origine === '' || user.poid_achat === ''
            ||  user.prix_achat === '') {
            reject(new Error("Erreur: Champ est vide!"));
          }
          else {
            resolve({ ...user, ref: user.ref });
            resolve({ ...user, date_achat: user.date_achat });
            resolve({ ...user, date_vente: user.date_vente });
            resolve({ ...user, origine: user.origine });
            resolve({ ...user, poid_achat: user.poid_achat });
            resolve({ ...user, prix_achat: user.prix_achat });
          }
        }, 200),
      ),
    [],
  );
};
const Datatable = () => {
  let value = 0

  const [Animal, setAnimal] = useState([]);
  const [snackbar, setSnackbar] = React.useState(null);
  const handleCloseSnackbar = () => setSnackbar(null);
  const mutateRow = useFakeMutation();

  const handleUpdate = React.useCallback(async (data) => {
    axios.put(updateanimal + `${data.id}`, data)
    const response = await mutateRow(data);
    setSnackbar({ children: 'Bovin bien enregistrer', severity: 'success' });
    return response;
           window.location.reload(false);

  },
    [mutateRow],
  );

  const handleProcessRowUpdateError = React.useCallback((error) => {
    setSnackbar({ children: error.message, severity: 'error' });
  }, []);


  const handleDelete = (id) => {

    console.log('Printing id', id);
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet élément ?')) {
      axios.delete(deleteanimal + `${id}`).catch(error => {
        setSnackbar({ children: error.message, severity: 'error' });
      })
      setSnackbar({ children: 'Bien supprimer', severity: 'success' });
      window.location.reload(false);
    
  } else {
    console.log('Thing was not saved to the database.');
}


  }

  useEffect(() => {
    getAnimalById();
  }, [])
  const getAnimalById = async e => {
    const animalinfos = await axios.get(allanimal);
    setAnimal(animalinfos.data);
  }


  const actionColumn = [{
    field: "action", headerName: "Action", width: 100,
    renderCell: (params) => {
      return (
        <div className="cellAction">
          
          
          <div className="deleteButton" >Supprimer</div>
         
        </div>
      )
    }
  }];
 
  return (
    <div className="datatable">
      <div className="datatabletitle">Bovin
        <CustomizedDialogs title="Ajouter un bovin" button="Ajouter">
          <NewAnimal />
        </CustomizedDialogs>
        
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
