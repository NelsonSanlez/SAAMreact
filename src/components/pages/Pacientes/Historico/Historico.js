import { LoginContext } from "../../../../context/LoginContext";
import React, { useContext} from "react";
import { Navigate } from 'react-router-dom';
// import { FindThisPaciente } from "../Perfil/Perfil";
import { useParams } from 'react-router';
import { Pacientes, pacientes } from '../Pacientes';
import { Link } from 'react-router-dom';
import './Historico.css'

// let thisPacienteNbrMensagens

// const pacientes = [
//   {
//     _id: {
//       $oid: '6511a70a88e392a4f6ddf847',
//     },
//     nome: 'Jane Atkinson',
//     numUtente: '9758246',
//     telemovel: '922777888',
//     email: 'janeatkinson@gmail.com',
//     medicamento: 'Ben-u-ron',
//     hora: '15:00',
//     via: 'Oral',
//     dose: '1 Comp',
//     mensagens: [
//       {
//         mensagem: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis',
//       },
//       { mensagem: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis' },
//       {
//         mensagem: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis',
//       }
//     ],
//   },
//   {
//     _id: {
//       $oid: '6511b31088e392a4f6ddf849',
//     },
//     nome: 'Alice Vilar',
//     numUtente: '6587498',
//     telemovel: '918452456',
//     email: 'alicevila@gmail.com',
//     medicamento: 'Ben-u-ron',
//     hora: '10:00',
//     via: 'Oral',
//     dose: '1 Comp',
//   },
//   {
//     _id: {
//       $oid: '6511b31088e392a4f6ddf849',
//     },
//     nome: 'Alice Vilar',
//     numUtente: '6587422',
//     medicamento: 'Ben-u-ron',
//     hora: '10:00',
//     via: 'Oral',
//     dose: '1 Comp',
//     mensagens: [
//       {
//         mensagem: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis',
//       },
//     ]
//   },
//   {
//     _id: {
//       $oid: '6511b31088e392a4f6ddf849',
//     },
//     nome: 'Alice Vila',
//     numUtente: '6587421',
//     telemovel: '918452456',
//     email: 'alicevila@gmail.com',
//     medicamento: 'Ben-u-ron',
//     hora: '10:00',
//     via: 'Oral',
//     dose: '1 Comp',
//     mensagens: [
//       {
//         mensagem: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex officia voluptate. Culpa nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis',
//       },
//       {
//         mensagem: 'Lorem ipsum dolor eprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi animcupidatat excepteur officia. Reprehenderit aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis',
//       },
//       {
//         mensagem: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis',
//       },
//       {
//         mensagem: 'Nisi animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis',
//       },
//     ]
//   },
//   {
//     _id: {
//       $oid: '6511a70a88e392a4f6ddf847',
//     },
//     nome: 'Jane Atkinson',
//     numUtente: '7346158',
//     telemovel: '922777888',
//     email: 'janeatkinson@gmail.com',
//     medicamento: 'Ben-u-ron',
//     hora: '15:00',
//     via: 'Oral',
//     dose: '1 Comp',
//     mensagens: [
//       {
//         mensagem: 'asdjasdk askjfbkjs kadhndfsk ksdfjnsdfk',
//       },
//       { mensagem: 'dsfdnsd dfdfskjngdfogs dfgsndgfs sfgkjnsdfgk' },
//     ],
//   },
// ];

let thisPaciente;
let thisPacienteNum;
let thisPacienteEmail;
let thisPacienteTelemovel;
let thisPacienteNbrMensagens;

const FindThisPaciente = function () {
  const { id } = useParams();
  console.log('11:' + id);
  const pacienteFound = pacientes.find((paciente) => paciente.numUtente == id);
  console.log('qwe',pacienteFound)
  return pacienteFound
};

const Historico = function (props) {
  let pacienteFound= FindThisPaciente();
    //controle de validação de Login
    const { login } = useContext(LoginContext);
    
    if (!login.id || !login.status) {
        return (<Navigate to='/'/>)
    }

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

export { Historico };
