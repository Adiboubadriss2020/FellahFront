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

const Datatable = () => {
  let value = 0

  const [Animal, setAnimal] = useState([]);
  const [snackbar, setSnackbar] = React.useState(null);
  const handleCloseSnackbar = () => setSnackbar(null);



  const handleUpdate = React.useCallback(async (data) => {
    axios.put(updateanimal+`${data.id}`, data);
    setSnackbar({ children: 'Animal bien enregistrer', severity: 'success' }); 
  },
  );


  const handleProcessRowUpdateError = React.useCallback((error) => {
   // setSnackbar({ children: "Erreur!", severity: 'error' });
  }, []);


  const handleDelete = (id) => {

    console.log('Printing id', id);
    if (window.confirm('Êtes-vous sûr de vouloir enregistrer cet élément dans la base de données ?')) {
      axios.delete(deleteanimal + `${id}`).catch(error => {
        setSnackbar({ children: error.message, severity: 'error' });
      })
      setSnackbar({ children: 'Deleted successfully', severity: 'success' });
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
        <CustomizedDialogs title="Ajouter un bovin" button="Nouveau bovin">
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