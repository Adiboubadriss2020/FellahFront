import React, { useEffect, useState } from 'react'
import './table.scss'
import { DataGrid } from '@mui/x-data-grid';
import { animalmalade } from '../../datatabledata';
import axios from 'axios';
import Popup from '../popup/Popup';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import HelpIcon from '@mui/icons-material/Help';
import CustomizedDialogs from '../../pages/new/Inputpopup/dialog';
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
  const AnimalTable = () => {
  const [Animal, setAnimal] = useState('');
  const [stat, setStat] = useState('');
  let value = 0
  const animal = {
    stat
  }

//popup stuff
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
      setIsOpen(!isOpen);
    }


  const URL = `http://localhost:8080/animal/update/`;
  const URL1 = `http://localhost:8080/animal/etat`;
  const mutateRow = useFakeMutation();
  const [snackbar, setSnackbar] = React.useState(null);
  const handleCloseSnackbar = () => setSnackbar(null);
 
  const handleProcessRowUpdateError = React.useCallback((error) => {
    setSnackbar({ children: error.message, severity: 'error' });
  }, []);

  useEffect(() => {
    getAnimalById();
  }, [])
  const handleDelete = (id) => {

    console.log('Printing id', id);
    axios.put(`http://localhost:8080/animal/updateinfos/${id}`).catch(error => {
      setSnackbar({ children: error.message, severity: 'error' }); 
    })
    setSnackbar({ children: 'Fin de traitement', severity: 'success' });
    window.location.reload(false);

  }

  const getAnimalById = async e => {
    const animalinfos = await axios.get(URL1);
    setAnimal(animalinfos.data);
  }
  const actionColumn = [{
    field: "action", headerName: "Action", width: 180 ,editable:false,
    renderCell: (params) => {
      return (
        <div className="cellAction">
          <div className="deleteButton" >Fin de traitement</div>
        </div>
      )
    }
  }];
  const actionColumn2 = [{
    field: "infos", headerName: "Infos", width: 180,
    renderCell: (params) => {
      
      return (
        <div className="App">
            <div className="cellAction">
            <CustomizedDialogs style={{ border: "0px solid" }} button="Détails">       
                <h2>Informations</h2>
                  <p>{stat}</p>         
            </CustomizedDialogs>
          </div>

            </div>
      )
    }
  }];

  return (


    <div className="datatable">
      <div className="datatabletitle">Liste des maladies
      </div>

      <DataGrid

        rows={Animal}
        columns={animalmalade.concat(actionColumn2).concat(actionColumn)}
        pageSize={5}
        isRowSelectable={false}
        disableMultipleSelection={true} 
        rowsPerPageOptions={[5]}
        disableSelection={true}
        disableSelectionOnClick={true}
        disableColumnSelector={true}
        
         onCellClick={(row) => {
          value = row.field;
          if (value == "action") {
            handleDelete(row.id)
          }
           if (value == "infos") {
             setStat(row.value)
            
           }
        }}

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

export default AnimalTable;