
// NAO ESTOU A USAR POR ENQUANTO

import React from 'react';
import { Pacientes, pacientes } from './Pacientes';
import { useParams } from 'react-router';

console.log(pacientes);

let thisPaciente;
let thisPacienteNum
let thisPacienteEmail
let thisPacienteTelemovel
let thisPacienteHistorico = []

function FindThisPaciente() {
  const {id} = useParams();
  pacientes.forEach((paciente) => {
    if (paciente.numUtente == id) {
      thisPaciente = paciente.nome;
      thisPacienteNum = paciente.numUtente
      thisPacienteEmail = paciente.email
      thisPacienteTelemovel = paciente.telemovel
      thisPacienteHistorico = paciente?.mensagens[0]
    }
  })
  return (thisPaciente,thisPacienteNum,thisPacienteEmail,thisPacienteTelemovel,thisPacienteHistorico)
}

export default FindThisPaciente