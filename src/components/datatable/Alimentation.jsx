import React, { useEffect, useState } from 'react'
import './alimentation.scss'
import { DataGrid } from '@mui/x-data-grid';
import { alimentationanimal, alimentationcol } from '../../datatabledata';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert, { AlertProps } from '@mui/material/Alert';

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

    const [Alimentation, setAlimentation] = useState([]);
    const [Alimentationanimal, setAlimentationanimal] = useState([]);

    let value = 0
    const URL = `http://localhost:8080/alimentation/update`;
    const URL1 = `http://localhost:8080/alimentation/getAll`;
    const URL2 = `http://localhost:8080/alimentationanimal/getAll`;

    const mutateRow = useFakeMutation();
    const [snackbar, setSnackbar] = React.useState(null);
    const handleCloseSnackbar = () => setSnackbar(null);


    const handleUpdate = React.useCallback(async (data) => {

        axios.put(`http://localhost:8080/alimentation/update/${data.id}`, data);
        const response = await mutateRow(data);
        setSnackbar({ children: 'Alimentation bien enregister', severity: 'success' });
        return response;
    },
        [mutateRow],
    );


    const handleProcessRowUpdateError = React.useCallback((error) => {
        setSnackbar({ children: error.message, severity: 'error' });
    }, []);


    const handleDeletealimentationanimal = (id) => {

        console.log('Printing id', id);
        axios.delete(`http://localhost:8080/alimentationanimal/delete/${id}`).catch(error => {
            setSnackbar({ children: error.message, severity: 'error' });
        })
        setSnackbar({ children: 'Bien supprimer', severity: 'success' });
        window.location.reload(false);

    } 
    const handleDeletealimentation = (id) => {

        console.log('Printing id', id);
        axios.delete(`http://localhost:8080/alimentation/delete/${id}`).catch(error => {
            if (error) {
                const timer = setTimeout(() => {
                    setSnackbar({ children: " Ce type d'alimentation est utilisé dans l'alimentation animal", severity: 'error' });
                }, 500);
                
                return () => clearTimeout(timer);       
            }
               
                    setSnackbar({ children: 'Bien supprimer', severity: 'success' });
          
                window.location.reload(false);
                
             

        })
        
       

    }

    useEffect(() => {
        getAlimentationById();
        getAlimentationanimalById();
    }, [])
    const getAlimentationById = async e => {
        const Alimentationinfos = await axios.get(URL1);
        setAlimentation(Alimentationinfos.data);
    }
    const getAlimentationanimalById = async e => {
        const Alimentationinfos = await axios.get(URL2);
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

    return (


        <div className="datatable">
            <div className="datatabletitle">Alimentation
                <Link to="/alimentation/new/NewAlimentation" style={{ textDecoration: "none" }} className="newF">
                    Nouvelle alimentation

                </Link>

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
                    if (value == "action") {
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
                <Link to="/alimentation/new/NewAnimalAlimentation" style={{ textDecoration: "none" }} className="newF">
                    Nouvelle alimentation

                </Link>

            </div>



            <DataGrid

                    rows={Alimentationanimal}
                    columns={alimentationanimal.concat(actionColumn)}
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
                        handleDeletealimentationanimal(row.id)
                    }
                }}

                processRowUpdate={handleUpdate}
                onProcessRowUpdateError={handleProcessRowUpdateError}

                experimentalFeatures={{ newEditingApi: true }}

            />
            </div>
        </div>
        

       
        

    )
    
    
}

export default Datatable