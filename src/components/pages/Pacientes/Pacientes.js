

import React, { useEffect, useState } from "react";
import './Pacientes.css'

function ShowData() {
  const pacientes = [{
    "_id": {
      "$oid": "6511a70a88e392a4f6ddf847"
    },
    "nome": "Jane Atkinson",
    "numUtente": "9758246",
    "medicamento": "Ben-u-ron",
    "hora": "15:00",
    "via": "Oral",
    "dose": "1 Comp"
  },
  {
    "_id": {
      "$oid": "6511b31088e392a4f6ddf849"
    },
    "nome": "Alice Vila",
    "numUtente": "7346158",
    "medicamento": "Ben-u-ron",
    "hora": "10:00",
    "via": "Oral",
    "dose": "1 Comp"
  },
  {
    "_id": {
      "$oid": "6511b34088e392a4f6ddf84a"
    },
    "nome": "Bob Construtor",
    "numUtente": "6427815",
    "medicamento": "Ben-u-ron",
    "hora": "11:00",
    "via": "Oral",
    "dose": "1 Comp"
  },
  {
    "_id": {
      "$oid": "6511b36c88e392a4f6ddf84b"
    },
    "nome": "Carlos Almeida",
    "numUtente": "6977356",
    "medicamento": "Ben-u-ron",
    "hora": "12:00",
    "via": "Oral",
    "dose": "1 Comp"
  },
  {
    "_id": {
      "$oid": "6511b38688e392a4f6ddf84c"
    },
    "nome": "Jane Atkinson",
    "numUtente": "9758246",
    "medicamento": "Ben-u-ron",
    "hora": "15:00",
    "via": "Oral",
    "dose": "1 Comp"
  },
  {
    "_id": {
      "$oid": "6511b3a188e392a4f6ddf84d"
    },
    "nome": "Rob Timber",
    "numUtente": "3197764",
    "medicamento": "Ben-u-ron",
    "hora": "09:00",
    "via": "Oral",
    "dose": "1 Comp"
  },
  {
    "_id": {
      "$oid": "6511b3b588e392a4f6ddf84e"
    },
    "nome": "Marisa Contreras",
    "numUtente": "3025410",
    "medicamento": "Ben-u-ron",
    "hora": "19:00",
    "via": "Oral",
    "dose": "1 Comp"
  },
  {
    "_id": {
      "$oid": "6511b3c588e392a4f6ddf84f"
    },
    "nome": "Maria Almeida",
    "numUtente": "2309001",
    "medicamento": "Ben-u-ron",
    "hora": "19:00",
    "via": "Oral",
    "dose": "1 Comp"
  },
  {
    "_id": {
      "$oid": "6511b3d988e392a4f6ddf850"
    },
    "nome": "Euclides Silva",
    "numUtente": "3460219",
    "medicamento": "Ben-u-ron",
    "hora": "19:00",
    "via": "Oral",
    "dose": "1 Comp"
  },
  {
    "_id": {
      "$oid": "6511b3eb88e392a4f6ddf851"
    },
    "nome": "Josefa Fonseca",
    "numUtente": "5849672",
    "medicamento": "Ben-u-ron",
    "hora": "19:00",
    "via": "Oral",
    "dose": "1 Comp"
  },
  {
    "_id": {
      "$oid": "6511b3fb88e392a4f6ddf852"
    },
    "nome": "Roberto Melindes",
    "numUtente": "3498762",
    "medicamento": "Ben-u-ron",
    "hora": "19:00",
    "via": "Oral",
    "dose": "1 Comp"
  },
  {
    "_id": {
      "$oid": "6511b40d88e392a4f6ddf853"
    },
    "nome": "Irina Gonzaga",
    "numUtente": "1245786",
    "medicamento": "Ben-u-ron",
    "hora": "19:00",
    "via": "Oral",
    "dose": "1 Comp"
  },
  {
    "_id": {
      "$oid": "6511b42988e392a4f6ddf854"
    },
    "nome": "Elisa Dupont",
    "numUtente": "3496857",
    "medicamento": "Ben-u-ron",
    "hora": "19:00",
    "via": "Oral",
    "dose": "1 Comp"
  },
  {
    "_id": {
      "$oid": "6511b43c88e392a4f6ddf855"
    },
    "nome": "Gertrudes Alipio",
    "numUtente": "1542716",
    "medicamento": "Ben-u-ron",
    "hora": "19:00",
    "via": "Oral",
    "dose": "1 Comp"
  },
  {
    "_id": {
      "$oid": "6511b44e88e392a4f6ddf856"
    },
    "nome": "Bruno Matias",
    "numUtente": "4857362",
    "medicamento": "Ben-u-ron",
    "hora": "19:00",
    "via": "Oral",
    "dose": "1 Comp"
  },
  {
    "_id": {
      "$oid": "6511b45e88e392a4f6ddf857"
    },
    "nome": "Saul Mentes",
    "numUtente": "3562541",
    "medicamento": "Ben-u-ron",
    "hora": "19:00",
    "via": "Oral",
    "dose": "1 Comp"
  },
  {
    "_id": {
      "$oid": "6512bdda88e392a4f6ddf859"
    },
    "nome": "Elias Nantes",
    "numUtente": "6258156",
    "medicamento": "Paracetamol",
    "hora": "18:00",
    "via": "Oral",
    "dose": "1 Comp"
  },
  {
    "_id": {
      "$oid": "6512be4c88e392a4f6ddf85a"
    },
    "nome": "Júlia Rayan",
    "numUtente": "2457813",
    "medicamento": "Doxilamina",
    "hora": "21:30",
    "via": "Oral",
    "dose": "1 Comp"
  },
  {
    "_id": {
      "$oid": "6512eb169e6f4a33b2b72a0a"
    },
    "nome": "Many Meds",
    "numUtente": "9758246",
    "receita_01": {
      "medicamento": "Metadona",
      "hora": "20:00",
      "via": "Oral",
      "dose": "1 Comp"
    },
    "receita_02": {
      "medicamento": "Doxilamina",
      "hora": "21:00",
      "via": "Oral",
      "dose": "1 Comp"
    },
    "receita_03": {
      "medicamento": "ParacetamolPlus",
      "hora": "21:00",
      "via": "Oral",
      "dose": "1 Comp"
    }
  },
  {
    "_id": {
      "$oid": "651402d743a2e2309b5bf63f"
    },
    "nome": "Emil Strafino",
    "numUtente": "6854320",
    "medicamento": "Doxilamina",
    "hora": "22:00",
    "via": "Oral",
    "dose": "1 Comp"
  },
  {
    "_id": {
      "$oid": "65143559ffa0672e35403fa6"
    },
    "nome": "Luísa Filipino",
    "sobrenome": "Filipino",
    "numUtente": "5242531",
    "email": "luisa.filipino@gmail.com",
    "medicamento": "Paracetamol",
    "horario": "08:45",
    "via": "oral",
    "dose": "1 comp"
  },
  {
    "_id": {
      "$oid": "6520951f227704ff2d8bcf9c"
    },
    "nome": "Túlio Ermita",
    "numUtente": "2548963",
    "medicamento": "Doxilamina",
    "hora": "21:30",
    "via": "Oral",
    "dose": "1 Comp"
  }]

  return (
    <div id="Conteudo">
      {pacientes.map((paciente) => (
        <div key={paciente.numUtente} className="container-fluid row utente_lista">
          <div className="col nome-utente">{paciente.nome}</div>
          <div className="col num-utente">Nº: {paciente.numUtente}</div>
          <div className="col-8 btns-utentes">
            <a className="col-2 btn btn-utentes" href={`listaReceitas.html?name=${paciente.nome}`}>Receitas</a>
            <a className="col-2 btn btn-utentes" href='/pacientes/perfil/:id'>Perfil</a>
            <a className="col-2 btn btn-utentes" href="/pacientes/stock/:id">Stock</a>
            <a className="col-2 btn btn-utentes" href="/pacientes/historico/:id">Histórico</a>
          </div>
        </div>
      ))}
    </div>
  );
}

function Pacientes() {
  return (
    <div>
      <ShowData />
    </div>
  );
}

export default Pacientes;
