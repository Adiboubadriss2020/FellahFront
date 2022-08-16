import React, { useEffect, useState } from 'react'
import './veterinaire.scss'
import { DataGrid } from '@mui/x-data-grid';
import { veterinairecol, visitecol } from '../../datatabledata';
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

    const [visite, setVisite] = useState([]);
    const [veterinaire, setVeterinaire] = useState([]);

    let value = 0
    const URL1 = `http://localhost:8080/veterinaire/getAll`;
    const URL2 = `http://localhost:8080/visite/getAll`;
    const mutateRow = useFakeMutation();
    const [snackbar, setSnackbar] = React.useState(null);
    const handleCloseSnackbar = () => setSnackbar(null);


    const handleUpdate = React.useCallback(async (data) => {

        axios.put(`http://localhost:8080/visite/update/${data.id}`, data);
        const response = await mutateRow(data);
        setSnackbar({ children: 'Visite bien enregistrer', severity: 'success' });
        return response;
    },
        [mutateRow],
    );


    const handleProcessRowUpdateError = React.useCallback((error) => {
        setSnackbar({ children: error.message, severity: 'error' });
    }, []);


    const handleDeletevisite = (id) => {

        console.log('Printing id', id);
        axios.delete(`http://localhost:8080/visite/delete/${id}`).catch(error => {
            setSnackbar({ children: error.message, severity: 'error' });
        })
        setSnackbar({ children: 'Bien supprimer', severity: 'success' });
        window.location.reload(false);

    }
    const handleDeleteveterinaire = (id) => {

        console.log('Printing id', id);
        axios.delete(`http://localhost:8080/veterinaire/delete/${id}`).catch(error => {
            if (error) {
                const timer = setTimeout(() => {
                    setSnackbar({ children: " Cet veterinaire a déja effectué une viste!", severity: 'error' });
                }, 500);

                return () => clearTimeout(timer);
            }

            setSnackbar({ children: 'Bien supprimer', severity: 'success' });

            window.location.reload(false);
        })

    }
    useEffect(() => {
        getVeteriniare();
        getVisite();
    }, [])
    const getVeteriniare = async e => {
        const veterinaireinfos = await axios.get(URL1);
        setVeterinaire(veterinaireinfos.data);
    }
    const getVisite = async e => {
        const visiteinfos = await axios.get(URL2);
        setVisite(visiteinfos.data);
    }


    const actionColumn = [{
        field: "action", headerName: "Action", width: 200,
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
            <div className="datatabletitle">Veteriniare
                <Link to="/veterinaire/new/NewVeterinaire" style={{ textDecoration: "none", fontSize: "18px" }} className="newF">
                    Nouveau Veteriniare

                </Link>

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
                    if (value == "action") {
                        handleDeleteveterinaire(row.id)
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

           
                <div className="datatabletitle">Visite
                <Link to="/veterinaire/new/NewVeterinaireVisite" style={{ textDecoration: "none" ,fontSize:"18px"}} className="newF">
                        Nouveau Visite

                    </Link>
                
                </div>
            <DataGrid

                rows={visite}
                columns={visitecol.concat(actionColumn)}
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
                        handleDeletevisite(row.id)
                    }
                }}

                processRowUpdate={handleUpdate}
                onProcessRowUpdateError={handleProcessRowUpdateError}

                experimentalFeatures={{ newEditingApi: true }}

            />

         
        </div>

    )
}

export default Datatable