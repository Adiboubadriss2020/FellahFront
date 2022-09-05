import React, { useEffect, useState } from 'react'
import './veterinaire.scss'
import { DataGrid } from '@mui/x-data-grid';
import { veterinairecol, visitecol } from '../../datatabledata';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import CustomizedDialogs from '../../pages/new/Inputpopup/dialog'
import NewVeterinaire from '../../pages/new/NewVeterinaire/NewVeterinaire'
import NewVeterinaireVisite from '../../pages/new/NewVeterinaireVisite/NewVeterinaireVisite';
import { allveterinaire, allvisite, deleteveterinaire, deletevisite, updateveterinaire, updatevisite, value } from '../../var';

const Datatable = () => {
    let value = 0

    const [visite, setVisite] = useState([]);
    const [veterinaire, setVeterinaire] = useState([]);

    const [snackbar, setSnackbar] = React.useState(null);
    const handleCloseSnackbar = () => setSnackbar(null);


    const handleUpdateVe = React.useCallback(async (data) => {

        axios.put(updateveterinaire+`${data.id}`, data);
        setSnackbar({ children: 'Visite bien enregistrer', severity: 'success' });
    },
    );

    const handleUpdateVi = React.useCallback(async (data) => {

        axios.put(updatevisite+`${data.id}`, data);
        setSnackbar({ children: 'Visite bien enregistrer', severity: 'success' });
        window.location.reload(false);
    },
    );

    const handleProcessRowUpdateError = React.useCallback((error) => {
     //   setSnackbar({ children: error.message, severity: 'error' });
    }, []);


    const handleDeletevisite = (id) => {

        console.log('Printing id', id);
        if (window.confirm('Êtes-vous sûr de vouloir enregistrer cet élément dans la base de données ?')) {
            axios.delete(deletevisite + `${id}`).catch(error => {
                setSnackbar({ children: error.message, severity: 'error' });
            })
            setSnackbar({ children: 'Bien supprimer', severity: 'success' });
            window.location.reload(false);
        } else {
            console.log('Thing was not saved to the database.');
        }
       

    }
    const handleDeleteveterinaire = (id) => {

        console.log('Printing id', id);
        if (window.confirm('Êtes-vous sûr de vouloir supprimer cet élément ?')) {
            axios.delete(deleteveterinaire + `${id}`).catch(error => {
                if (error) {
                    const timer = setTimeout(() => {
                        setSnackbar({ children: " Cet veterinaire a déja effectué une viste!", severity: 'error' });
                    }, 500);

                    return () => clearTimeout(timer);
                }

                setSnackbar({ children: 'Bien supprimer', severity: 'success' });

                window.location.reload(false);
            })
        } else {
            console.log('Thing was not saved to the database.');
        }

        

    }
    useEffect(() => {
        getVeteriniare();
        getVisite();
    }, [])
    const getVeteriniare = async e => {
        const veterinaireinfos = await axios.get(allveterinaire);
        setVeterinaire(veterinaireinfos.data);
    }
    const getVisite = async e => {
        const visiteinfos = await axios.get(allvisite);
        setVisite(visiteinfos.data);
    }


    const actionColumn = [{
        field: "action", headerName: "Action", width: 200,
        renderCell: (params) => {


            return (
                <div className="cellAction">
                    <div className="deleteButton" >Supprimer</div>
                </div>
            )
        }
    }];
    const veter = [{
        field: "veterinaire_id", headerName: "Veterinaire", width: 200,
        renderCell: (params) => {


            return (
                <div className="cellAction">
                    <div  >{params.row.veterinaire.nom}</div>
                </div>
            )
        }
    }];
    const bov = [{
        field: "bovin_id", headerName: "Ref bovin", width: 200,
        renderCell: (params) => {


            return (
                <div className="cellAction">
                    <div  >{params.row.animal.ref}</div>
                </div>
            )
        }
    }];
    return (

        <div className="datatable">
            <div className="datatabletitle">Veteriniare
                <CustomizedDialogs title="Ajouter un veterianire" button="Ajouter">
                    <NewVeterinaire />
                </CustomizedDialogs>

            </div>



            <DataGrid

                rows={veterinaire}
                columns={veterinairecol.concat(actionColumn)}
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
                        handleDeleteveterinaire(row.id)
                    }
                }}

                processRowUpdate={handleUpdateVe}
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

           
                <div className="datatabletitle">Visite
                <CustomizedDialogs title="Ajouter une visite" button="Ajouter">
                    <NewVeterinaireVisite />
                </CustomizedDialogs>
                
                </div>
            <DataGrid

                rows={visite}
                columns={visitecol.concat(veter).concat(bov).concat(actionColumn)}
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
                        handleDeletevisite(row.id)
                    }
                }}

                processRowUpdate={handleUpdateVi}
                onProcessRowUpdateError={handleProcessRowUpdateError}

                experimentalFeatures={{ newEditingApi: true }}

            />

         
        </div>

    )
}

export default Datatable