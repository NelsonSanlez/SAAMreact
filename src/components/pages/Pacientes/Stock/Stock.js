import { LoginContext } from "../../../../context/LoginContext";
import React, { useContext,useEffect, useState} from "react";
import { Navigate } from 'react-router-dom';
// import { FindThisPaciente } from "../Perfil/Perfil";
import { useParams } from 'react-router';
import { Pacientes, pacientes } from '../Pacientes';
import { Link } from 'react-router-dom';
import './Stock.css'


//////////////////////////////////////////////////////////////////////////////////////////////

const FindThisPaciente = function () {

    const [data, setData] = useState([]);
    const { id } = useParams();
    console.log('id after useparams: ' + id);
//////////////////////////////////////////////////////////////////////////////////////////////
    useEffect(() => {
    async function FetchPacientes() {
        // async function getData() {
        try {
            const res = await fetch(`http://localhost:5000/listarUtentes`);
            const pacientes = await res.json();
            setData(pacientes)
        } catch (error) {
            console.error(error);
        }
        // }
        // const dataget = getData()
        // const dataget2 = await dataget
        // console.log('data inside  historico: ' + dataget2);
        // setData(await dataget2)
        // return data
    }
      // const dataFound = 
    FetchPacientes()
    }, [])
//////////////////////////////////////////////////////////////////////////////////////////////
    console.log('id: ' + id);
    console.log('data: ' + data);
    const pacienteFound = data.find((paciente) => paciente.numUtente == id);
    console.log('pacienteFound: ',pacienteFound)
    return pacienteFound
    };
//////////////////////////////////////////////////////////////////////////////////////////////
    const Stock = function (props) {
    let pacienteFound= FindThisPaciente();
    //controle de validação de Login
    const { login } = useContext(LoginContext);
    if (!login.id || !login.status) {
        return (<Navigate to='/'/>)
    }
    if (!pacienteFound) {
      return 'Paciente não encontrado!'; // ou uma mensagem de erro adequada
    }
//////////////////////////////////////////////////////////////////////////////////////////////
    return (
        <div>
        <div className='numMensagens'><span className='titlesMsg'>Paciente:</span> {pacienteFound.nome} <span className='titlesMsg'>Nº:</span> {pacienteFound.numUtente}</div>
        <div >
            <div className='numMensagens'><span className='titlesMsg'>Nº de Medicamentos:</span> {pacienteFound.medicamentos?.length}</div>
            <div className='textMensagens'><span className='titlesMsg'>Medicamento 1: {pacienteFound.medicamentos?.[0]?.medicamento} </span>Stock: {pacienteFound.medicamentos?.[0]?.stock}</div>
            <div className='textMensagens'><span className='titlesMsg'>Medicamento 2: {pacienteFound.medicamentos?.[1]?.medicamento} </span>Stock: {pacienteFound.medicamentos?.[1]?.stock}</div>
            <div className='textMensagens'><span className='titlesMsg'>Medicamento 3: {pacienteFound.medicamentos?.[2]?.medicamento} </span>Stock: {pacienteFound.medicamentos?.[2]?.stock}</div>
            <div className='textMensagens'><span className='titlesMsg'>Medicamento 4: {pacienteFound.medicamentos?.[3]?.medicamento} </span>Stock: {pacienteFound.medicamentos?.[3]?.stock}</div>
            <div className='textMensagens'><span className='titlesMsg'>Medicamento 5: {pacienteFound.medicamentos?.[4]?.medicamento} </span>Stock: {pacienteFound.medicamentos?.[4]?.stock}</div>
        </div>
        </div>
    );
    };

export default Stock
//////////////////////////////////////////////////////////////////////////////////////////////




