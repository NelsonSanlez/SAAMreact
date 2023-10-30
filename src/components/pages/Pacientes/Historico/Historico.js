import { LoginContext } from "../../../../context/LoginContext";
import React, { useContext,useEffect, useState} from "react";
import { Navigate } from 'react-router-dom';
// import { FindThisPaciente } from "../Perfil/Perfil";
import { useParams } from 'react-router';
import { Pacientes, pacientes } from '../Pacientes';
import { Link } from 'react-router-dom';
import './Historico.css'

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
const Historico = function (props) {
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
        <div className='numMensagens'><span className='titlesMsg'>Nº de mensagens:</span> {pacienteFound.mensagens?.length}</div>
        <div className='textMensagens'><span className='titlesMsg'>Mensagens 1: </span>{pacienteFound.mensagens?.[0]?.mensagem}</div>
        <div className='textMensagens'><span className='titlesMsg'>Mensagens 2: </span>{pacienteFound.mensagens?.[1]?.mensagem}</div>
        <div className='textMensagens'><span className='titlesMsg'>Mensagens 3: </span>{pacienteFound.mensagens?.[2]?.mensagem}</div>
        <div className='textMensagens'><span className='titlesMsg'>Mensagens 4: </span>{pacienteFound.mensagens?.[3]?.mensagem}</div>
        <div className='textMensagens'><span className='titlesMsg'>Mensagens 5: </span>{pacienteFound.mensagens?.[4]?.mensagem}</div>
      </div>
    </div>
  );
};
//////////////////////////////////////////////////////////////////////////////////////////////
export { Historico };
