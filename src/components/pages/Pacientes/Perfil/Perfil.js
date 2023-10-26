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

// console.log(pacientes);  


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
 {/* <div className="pt-4 col-md-4">
                <button type="button" className={`btn btn-light border-black`} data-bs-toggle="modal"
                    data-bs-target="#modalDeletePaciente"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                    </svg> Apagar Paciente</button>
            </div>

            <div className="pt-4 col-md-4">
                <button type="button" className={`btn btn-light border-black`} data-bs-toggle="modal"
                    data-bs-target="#modalEditPaciente"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-file-earmark-person" viewBox="0 0 16 16">
                        <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z" />
                    </svg> Editar Paciente</button>
            </div> */}

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
