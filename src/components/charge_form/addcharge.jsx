import React, { useState } from 'react';
import './style.scss';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { api } from '../../var';

const Addcharge= () =>{
    const [snackbar, setSnackbar] = React.useState(null);
    const handleCloseSnackbar = () => setSnackbar(null);
    
    const clearInput = () => {
       
        setLoad([{ id: "", nom: "" }])
    };
    let fruits = [
        { label: "Employés", place: "enter le nom d' employee",holder:"gh", },
        { label: "Fournisseurs", place: "enter le nom de fournisseur", holder: "fds" },
        { label: "Client", place: "enter le nom du client", holder: "sdf" },
        { label: "Veterinaire", place: "enter le nom de veterinaire",holder: "hj" },
        { label: "Alimentation", place: "enter le type d' alimentation", holder: "gv" }
    ]

    const [load, setLoad] = useState([
        { id: "", nom: "" },

    ]);
    // Using state to keep track of what the selected fruit is
    let [fruit, setFruit] = useState("Loading...")
    let [placehold, setPlacehold] = useState("aa")
    // Using this function to update the state of fruit
    // whenever a new option is selected from the dropdown
    let handleFruitChange = (e) => {
        clearInput()
        setFruit(e.target.value)
        const a = e.target.value.split(" ").pop()
        axios.get(`https://fellah-back.herokuapp.com/${a}/getAll`)
            .then(res => {
                const persons = res.data;
                console.log(persons)
                persons.map(v=>{
                    if (v.nom) {
                        setLoad((previousLoad) => [...previousLoad, {
                            id: v.id,
                            nom: v.nom,
                        }])  
                    }
                    else{
                        setLoad((previousLoad) => [...previousLoad, {
                            id: v.id,
                            nom: v.type_alimentation,
                        }])    
                    }
                  
                })
            })
    }
    const [alimentation, setAlimentation] = useState(null);
    const [employee, setEmployee] = useState(null);
    const [client, setClient] = useState(null);
    const [fournisseur, setFournisseur] = useState(null);
    const [veterianire, setVeterinare] = useState(null);
    const [date_charge, setDate_charge] = useState();
    const [prix, setPrix] = useState(null);
    const [value, setValue] = useState("");
    var [i, setI] = useState()
    const charge={
        date_charge,
        prix,
        alimentation,
        client,
        employee,
        fournisseur,
        veterianire,  
    }
    const handle = (t)=>{
        console.log(t)
        //setPlacehold(e.target.id)
    }
    const onChange = (event) => {
        setValue(event.target.value);
    };
    const onLooking = (searchTerm, ids) => {
        setValue(searchTerm);
        setI(ids)
    };
    const onSearch = (i) => {
        const a = fruit.split(" ").pop()

        if (a === "fournisseur") { 
            axios.get(`https://fellah-back.herokuapp.com/${a}/find/${i}`)
                .then(res => {
                    const persons = res.data;
                    charge.fournisseur = persons
                    axios.post(`https://fellah-back.herokuapp.com/charge/add`, charge).catch(error => {
                        setSnackbar({ children: error.message, severity: 'error' });
                    });

                    setSnackbar({ children: "Bien enregistrer", severity: 'success' });
                })
        }
        else if (a === "employee") { 
                console.log(a)
            axios.get(`https://fellah-back.herokuapp.com/${a}/find/${i}`)
                .then(res => {
                    const persons = res.data;
                    charge.employee = persons
                    axios.post(`https://fellah-back.herokuapp.com/charge/add`, charge).catch(error => {
                        setSnackbar({ children: error.message, severity: 'error' });
                    });

                    setSnackbar({ children: "Bien enregistrer", severity: 'success' });
                })
        }
        else if (a === "client") {
            axios.get(`https://fellah-back.herokuapp.com/${a}/find/${i}`)
                .then(res => {
                    const persons = res.data;
                    charge.client = persons
                    axios.post(`https://fellah-back.herokuapp.com/charge/add`, charge).catch(error => {
                        setSnackbar({ children: error.message, severity: 'error' });
                    });

                    setSnackbar({ children: "Bien enregistrer", severity: 'success' });
                })
         }
        else if (a === "veterinaire") { 
            axios.get(`https://fellah-back.herokuapp.com/${a}/find/${i}`)
                .then(res => {
                    const persons = res.data;
                    charge.veterianire = persons
                    axios.post(`https://fellah-back.herokuapp.com/charge/add`, charge).catch(error => {
                        setSnackbar({ children: error.message, severity: 'error' });
                    });

                    setSnackbar({ children: "Bien enregistrer", severity: 'success' });
                })
         }
        else if (a === "alimentation") {
            axios.get(+`https://fellah-back.herokuapp.com/${a}/find/${i}`)
            .then(res => {
                const persons = res.data;
                charge.alimentation = persons
                axios.post(`https://fellah-back.herokuapp.com/charge/add`, charge).catch(error => {
                    setSnackbar({ children: error.message, severity: 'error' });
                });

                setSnackbar({ children: "Bien enregistrer", severity: 'success' });
            }) }
        
    };

    return (
        <div className="all" >
            <h1>Charges</h1>
            <label for="fname">Date de charge</label>
            <input type="date" style={{
                width: "100%", margin: "8px 0",
            }} value={date_charge} onChange={(e) => setDate_charge(e.target.value)} />
            <label for="fname">Prix</label>
            <input type="number" style={{
                width: "100%", margin: "8px 0",
            }} value={prix} onChange={(e) => setPrix(e.target.value)} />
            <label for="fname">Liste des choix</label>
            <select style={{
                width: "100%", padding: "12px 20px", margin: "8px 0",
 }} onChange={handleFruitChange}>
    
                <option value="⬇️ Select ⬇️"> -- Select -- </option>
                {fruits.map((fruit) => <option value={fruit.place} placeholder={fruit.holder}>{fruit.label}</option>)}
            </select>
          
            <div className="search-cnt">
                <label for="fname">Détails</label>
                <input type="text" style={{
                    width: "100%", margin: "8px 0",
                }} value={value} placeholder={fruit} onChange={onChange} />
                
                 
                
                <div className="dropdown">
                    {load
                        .filter((item) => {
                            const searchTerm = value.toLowerCase();
                            const nom = item.nom.toLowerCase();
                          //  i=item.id

                            return (
                                searchTerm &&
                                nom.startsWith(searchTerm) &&
                                nom !== searchTerm
                            );
                        })
                        .slice(0, 10)
                        .map((item) => (
                            <div
                                onClick={() => onLooking(item.nom,item.id)}
                                className="dropdown-row"
                                key={item.id}
                            >
                                {item.id}- {item.nom}
                            </div>
                        ))}
                </div>
                <button onClick={() => onSearch(i)} style={{marginLeft:"200px"}}> Ajouter </button>
            </div>
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
    );
}

export default Addcharge;