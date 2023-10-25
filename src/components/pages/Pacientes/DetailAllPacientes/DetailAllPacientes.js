import React from 'react';
import { CardPaciente } from '../Perfil/CardPaciente';
import {Card,CardBody,CardFooter,CardHeader} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './DetailAllPacientes.css'
import '../Perfil/CardPaciente.css'//acho que é inutil importar
import { Pacientes,pacientes } from '../Pacientes';
import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import './Pacientes.css';
import { Modal } from './Modal';

let oPaciente;
const name= pacientes.name
const number = pacientes.numUtente

function HandleButtonClick  (){
    console.log('AQUIIIIIII')
    const [ShowModal, setShowModal] = useState(false)    
        const [isVisible, setIsVisible] = useState(false);
    setShowModal(true)
      setIsVisible(!isVisible)
        return (
              <div>
                <button >Clique aqui</button>
                {isVisible && <div id="id01">Conteúdo visível</div>}
              </div>
            );
          }

function ShowData({ setOPaciente }) {

const[openModal,setOpenModal] = useState(false)

    return (
      <div id="Conteudo globalDetailAll">
<div className="container ">
<div className="nossosPacientesDiv row"><h3>Os nossos Pacientes:</h3></div>
<div className='btnFiltrarAll'>
<button class="btnFiltrarTPacientes" onClick={()=>setOpenModal(true)}>Filtrar<br/>Pacientes</button>
</div>
<Modal open={openModal} onClose={()=>setOpenModal(false)}/>
<div className="row allCards">
        {pacientes.map((paciente) => (
        //   <div key={paciente.numUtente}>

<div className="cardPacienteDiv col-lg-6 col-md-12 col-sm-12">
<Card className='cardPaciente'>
<CardHeader className='cardPacienteHead'><h5>Paciente:</h5></CardHeader>
<CardBody className='cardPacienteBody'>
  <div>Nome do Paciente: {paciente.nome} </div>
  <div>Nº de Paciente: {paciente.numUtente} </div>
  <div>Email: {paciente.email} </div>
  <div>Nº de Telemóvel: {paciente.telemovel} </div>
</CardBody>
<Link to={`/inicio`}><CardFooter className='cardPacienteFooter'>Actualizar dados ={'>'}</CardFooter></Link>
</Card>
</div>
// </div>
        ))}
          </div>
          <Modal open={openModal} onClose={()=>setOpenModal(false)}/>
<div className='btnFiltrarAll'>
<button class="btnFiltrarTPacientes" onClick={()=>setOpenModal(true)}>Filtrar<br/>Pacientes</button>
</div>
      </div>   {/* container */}
      </div> // globalDetailAll
    );
  }

  function DetailAllPacientes() {
    return (
      <div>
        <ShowData setOPaciente={0} />
      </div>
    );
  }

export { DetailAllPacientes };
