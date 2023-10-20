
import React from 'react';
import { Pacientes, pacientes } from '../Pacientes';
import { useParams } from 'react-router';
import './CardPaciente.css'
import { Card, CardBody, CardFooter, CardHeader} from 'react-bootstrap';
import { Link } from 'react-router-dom';

let thisPaciente;
let thisPacienteNum
let thisPacienteEmail
let thisPacienteTelemovel

function FindAllPacientes(Pacientes) {
  const {id} = useParams();
 
  // pacientes.forEach((paciente) => {
  //   if (paciente.numUtente == id) {

  //     thisPaciente = paciente.nome;
  //     thisPacienteNum = paciente.numUtente
  //     thisPacienteEmail = paciente.email
  //     thisPacienteTelemovel = paciente.telemovel
  //   }
  // })
  
}

function CardPaciente(props){
    // FindAllPacientes() 
    return(
<Card className='cardPaciente'>
  <CardHeader className='cardPacienteHead'><h5>Paciente:</h5></CardHeader>
  <CardBody className='cardPacienteBody'>
    <div>Nome do Paciente: {props.nome} </div>
    <div>Nº de Paciente: {props.pacienteNum} </div>
    <div>Email: {props.pacienteEmail} </div>
    <div>Nº de Telemóvel: {props.pacienteTelemovel} </div>
    <div>Nº de mensagens: {props.pacienteNbrMensagens} </div>
  </CardBody>
  <Link to={`/inicio`}><CardFooter className='cardPacienteFooter'>Actualizar dados ={'>'}</CardFooter></Link>
</Card>
    )
}

export {CardPaciente}
