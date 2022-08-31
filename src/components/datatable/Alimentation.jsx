import React, { useEffect, useState } from 'react'
import './alimentation.scss'
import { DataGrid } from '@mui/x-data-grid';
import { alimentationanimal, alimentationcol } from '../../datatabledata';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import CustomizedDialogs from '../../pages/new/Inputpopup/dialog'
import NewAnimalAlimentation from '../../pages/new/NewAnimalAlimentation/NewAnimalAlimentation';
import NewAlimentation from '../../pages/new/NewAlimentation/NewAlimentation';
import { allalimentation, allalimentationanimal, deletealimentation, deletealimentationanimal, updatealiemntation,value } from '../../var';


const Datatable = () => {
     const [snackbar, setSnackbar] = React.useState(null);
     const handleCloseSnackbar = () => setSnackbar(null);
     const [Alimentation, setAlimentation] = useState([]);
     const [Alimentationanimal, setAlimentationanimal] = useState([]);
     
    const handleUpdate = React.useCallback(async (data) => {
        axios.put(updatealiemntation+`${data.id}`, data);
        setSnackbar({ children: 'Alimentation bien enregister', severity: 'success' });
    }, );


    const handleProcessRowUpdateError = React.useCallback((error) => {
        setSnackbar({ children: error.message, severity: 'error' });
    }, []);


    const handleDeletealimentationanimal = (id) => {

        console.log('Printing id', id);
        if (window.confirm('Êtes-vous sûr de vouloir enregistrer cet élément dans la base de données ?')) {
            axios.delete(deletealimentationanimal + `${id}`).catch(error => {
                setSnackbar({ children: error.message, severity: 'error' });
            })
            setSnackbar({ children: 'Bien supprimer', severity: 'success' });
            window.location.reload(false);
        } else {
            console.log('Thing was not saved to the database.');
        }

       

    } 
    const handleDeletealimentation = (id) => {

        console.log('Printing id', id);
        if (window.confirm('Êtes-vous sûr de vouloir enregistrer cet élément dans la base de données ?')) {
            axios.delete(deletealimentation + `${id}`).catch(error => {
                if (error) {
                    const timer = setTimeout(() => {
                        setSnackbar({ children: " Ce type d'alimentation est utilisé dans l'alimentation animal", severity: 'error' });
                    }, 500);

                    return () => clearTimeout(timer);
                }
                setSnackbar({ children: 'Bien supprimer', severity: 'success' });
                window.location.reload(false);
            })

            setSnackbar({ children: 'Bien supprimer', severity: 'success' });
        } else {
            console.log('Thing was not saved to the database.');
        }
       
       

    }

    useEffect(() => {
        getAlimentationById();
        getAlimentationanimalById();
    }, [])
    const getAlimentationById = async e => {
        const Alimentationinfos = await axios.get(allalimentation);
        setAlimentation(Alimentationinfos.data);
    }
    const getAlimentationanimalById = async e => {
        const Alimentationinfos = await axios.get(allalimentationanimal);
        setAlimentationanimal(Alimentationinfos.data);
        
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
    const AlimColumn = [{
        
        field: "alimentation_id", headerName: "Type d'alimentation / Quantité total",type:"text", width: 400,
        renderCell: (params) => {
            return (
                <div className="cellAction">
                    <div  >{params.row.alimentation.type_alimentation} / {params.row.alimentation.quantite_arrivage} Kg</div>
                </div>      
                 
            )
        }
    }];

    return (


        <div className="datatable">
            <div className="datatabletitle">Alimentation
                <CustomizedDialogs title="Ajouter une alimentation" button="Nouvelle alimentation">
                    <NewAlimentation />
                </CustomizedDialogs>

            </div>



            <DataGrid

                rows={Alimentation}
                columns={alimentationcol.concat(actionColumn)}
                pageSize={8}
                disableMultipleSelection={true}
                rowsPerPageOptions={[5]}
                disableSelection={true}
                disableSelectionOnClick={true}
                disableColumnSelector={true}
                rowReordering

                onCellClick={(row) => {
                    value = row.field;
                    if (value === "action") {
                        handleDeletealimentation(row.id)
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
            <div className="datatable">
            <div className="datatabletitle">Alimentation Animal
                    <CustomizedDialogs title="Ajouter une alimentation" button="Nouvelle alimentation">
                        <NewAnimalAlimentation />
                    </CustomizedDialogs>

            </div>



            <DataGrid

                    rows={Alimentationanimal}
                    columns={alimentationanimal.concat(AlimColumn).concat(actionColumn)}
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
                        handleDeletealimentationanimal(row.id)
                    }
                }}

               // processRowUpdate={handleUpdate}
              //  onProcessRowUpdateError={handleProcessRowUpdateError}

                experimentalFeatures={{ newEditingApi: true }}

            />
            </div>
        </div>
        

       
        

    )
    
    
}

export default Datatable