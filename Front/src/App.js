import React from 'react';

import  Home  from '../src/pages/home/Home';
import Login from '../src/pages/login/Login';
import FournisseurList from './pages/list/Fournisseur';
import AnimalList from './pages/list/Animal';
import AlimentationList from './pages/list/Alimentation';
import ClientList from './pages/list/Client';
import EmployeeList from './pages/list/Employee';
import NewFournisseur from './pages/new/NewFournisseur/NewFournisseur';
import NewAnimal from './pages/new/NewAnimal/NewAnimal';
import NewAlimentation from './pages/new/NewAlimentation/NewAlimentation';
import NewClient from './pages/new/NewClient/NewClient';
import NewEmployee from './pages/new/NewEmployee/NewEmployee';
import Single from './pages/signle/Single';
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { userinput, bovininput } from '../src/inputdata';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import VeterinaireList from './pages/list/Veteriniare';
import NewVeterinaire from './pages/new/NewVeterinaire/NewVeterinaire';
import NewVeterinaireVisite from './pages/new/NewVeterinaireVisite/NewVeterinaireVisite';
import NewAnimalAlimentation from './pages/new/NewAnimalAlimentation/NewAnimalAlimentation';
function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dacrk" : "app"}>
     <BrowserRouter>
    <Routes>
      <Route path='/'>
      <Route index element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      
      <Route path='fournisseurs'>
          <Route index element={<FournisseurList/>}/>
          <Route path=':fournisseursId' element={<Single/>}/>
          <Route path='new/NewFournisseur' element={<NewFournisseur inputs={userinput} title="Nouveau fournisseur"/>}/>
      </Route>
      <Route path='client'>
          <Route index element={<ClientList/>}/>
          <Route path=':clientId' element={<Single/>}/>
          <Route path='new/NewClient' element={<NewClient inputs={userinput} title="Nouveau client"/>}/>
      </Route>
      <Route path='employee'>
          <Route index element={<EmployeeList/>}/>
          <Route path=':employeeId' element={<Single/>}/>
          <Route path='new/NewEmployee' element={<NewEmployee inputs={userinput} title="Nouveau Employee"/>}/>
      </Route>
      
      <Route path='bovin'>
          <Route index element={<AnimalList/>}/>
          <Route path=':BovinId' element={<Single/>}/>
          <Route path='new/NewAnimal' element={<NewAnimal  title="Nouveau Animal" />}/>
      </Route>
            <Route path='alimentation'>
              <Route index element={<AlimentationList />} />
              <Route path=':AlimentationId' element={<Single />} />
              <Route path='new/NewAlimentation' element={<NewAlimentation  title="Nouvelle Alimentation" />} />
              <Route path='new/NewAnimalAlimentation' element={<NewAnimalAlimentation title="Nouvelle Alimentation" />} />
            </Route>
            <Route path='veterinaire'>
              <Route index element={<VeterinaireList />} />
              <Route path=':VeterinaireId' element={<Single />} />
              <Route path='new/NewVeterinaire' element={<NewVeterinaire  title="Nouveau Veterinaire" />} />
              <Route path='new/NewVeterinaireVisite' element={<NewVeterinaireVisite title="Nouvelle Visite" />} />

            </Route>
      </Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
