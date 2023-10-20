import { LoginContext } from "../../../../context/LoginContext";
import React, { useContext, useEffect } from "react";
import { Navigate } from 'react-router-dom';
import { Pacientes, pacientes } from '../Pacientes';
import { useParams } from 'react-router';
// import './Perfil.scss'
import './Perfil.css';
import {Card, CardBody, CardFooter, CardHeader} from 'react-bootstrap';
import { CardPaciente } from './CardPaciente';
import { Button } from 'bootstrap/dist/js/bootstrap.bundle';
import { Link } from 'react-router-dom';

console.log(pacientes);


let thisPaciente;
let thisPacienteNum;
let thisPacienteEmail;
let thisPacienteTelemovel;
let thisPacienteNbrMensagens

const FindThisPaciente = function () {
  const { id } = useParams();

  pacientes.forEach((paciente) => {
    if (paciente.numUtente == id) {
      thisPaciente = paciente.nome;
      thisPacienteNum = paciente.numUtente;
      thisPacienteEmail = paciente.email;
      thisPacienteTelemovel = paciente.telemovel;
      thisPacienteNbrMensagens = paciente.mensagens?.length
    }
  })

}

function Perfil() {
  //controle de validação de Login
  const { login } = useContext(LoginContext);
    
  if (!login.id || !login.status) {
      return (<Navigate to='/'/>)
  }
  FindThisPaciente();

  return (
    <div>
      <div class="elips2 ellipsisInfoManter">
        <span class="ellipsis">!!Manter informação actualizada!!</span>
      </div>
      <div class= "cardPacienteDiv">
        <Card>
          <CardHeader className='cardPacienteHead'>
            <h5>Paciente:</h5>
          </CardHeader>
          <CardBody className='cardPacienteBody'>
            <div>Nome do Paciente: {thisPaciente} </div>
            <div>Nº de Paciente: {thisPacienteNum} </div>
            <div>Email: {thisPacienteEmail} </div>
            <div>Nº de Telemóvel: {thisPacienteTelemovel} </div>
          </CardBody>
          <Link to={`/inicio`}><CardFooter className='cardPacienteFooter'>Actualizar dados ={'>'}</CardFooter></Link>
        </Card>
      </div>
      <div class="divBtnVerTPacientes">
        <Link className=""
              to={`/pacientes/detailAllPacientes`}><button class="btnVerTPacientes">Pacientes:<br/>Ver Todos</button></Link>
      </div>
    </div>
  );
}

export {Perfil,FindThisPaciente,thisPacienteNbrMensagens};
