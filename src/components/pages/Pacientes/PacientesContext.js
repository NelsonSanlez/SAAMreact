import { React, createContext, useState } from "react";
// import FetchPacientes from './FetchPacientes';
import { Pacientes } from "./Pacientes";
import { DetailAllPacientes } from "./DetailAllPacientes/DetailAllPacientes";
import { Historico } from "./Historico/Historico";
import { Perfil } from "./Perfil/Perfil";

const PacientesContext = createContext();

const PacientesProvider = ()=>{
    const [pacientesData, setpacientesData] = useState([])
    
    return(
        <PacientesContext.Provider value={{pacientesData,setpacientesData}}>
            <Pacientes/>
            <DetailAllPacientes/>
            <Historico/>
            <Perfil/>
        </PacientesContext.Provider>
    )
}

export {PacientesContext,PacientesProvider};