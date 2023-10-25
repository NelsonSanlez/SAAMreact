import { LoginContext } from "../../../context/LoginContext";
import { Link, Navigate} from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import './Pacientes.css';
import { PacienteAdicionar } from '../../Buttons/PacienteAdicionar';



let oPaciente;

function ShowData({  }) {

  const [data, setData] = useState([]);

  useEffect(() => {
    async function FetchPacientes() {
      async function getData() {
        try {
          const res = await fetch(`http://localhost:5000/listarUtentes`);
          const pacientes = await res.json();
          return(pacientes)
        } catch (error) {
          console.error(error);
        }
      }
      const dataget = getData()
      const dataget2 = await dataget
      console.log('minha data inside antes return: ' + dataget2);
      setData(dataget2)
    }
    FetchPacientes()
  }, [])
  
  return (

    <div>
    <div>
      <PacienteAdicionar />
    </div>

    <div id="Conteudo">
      {data.map((paciente) => (
        <div
          key={paciente.numUtente}
          className="container-fluid row utente_lista"
        >
          <div className="col nome-utente">{paciente.nome}</div>
          <div
            className="col num-utente"
            id={paciente.numUtente}
          >
            Nº: {paciente.numUtente}
          </div>
          <div className="col-8 btns-utentes">
            <Link
              className="col-2 btn btn-utentes"
              to={`/pacientes/receitas/${paciente.numUtente}`}   /* ${paciente.numUtente}*/
            >
              Receitas
            </Link>
            <Link
              className="col-2 btn btn-utentes"
              to={`/pacientes/perfil/${paciente.numUtente}`}
            >
              Perfil
            </Link>
            <Link
              className="col-2 btn btn-utentes"
              to={`/pacientes/stock/${paciente.numUtente}`}
            >
              Stock
            </Link>
            <Link
              className="col-2 btn btn-utentes"
              to={`/pacientes/historico/${paciente.numUtente}`}
            >
              Histórico
            </Link>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

function Pacientes() {
  //controle de validação de Login
  const { login } = useContext(LoginContext);
    
  if (!login.id || !login.status) {
      return (<Navigate to='/'/>)
  }
  
  return (
    <div>
      <ShowData setOPaciente={0} />
    </div>
  );
}

export { Pacientes, pacientes, oPaciente };



///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////

// ONLY 3 PATIENTS
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
//         mensagem: 'asdjasdk askjfbkjs kadhndfsk ksdfjnsdfk',
//       },
//       { mensagem: 'dsfdnsd dfdfskjngdfogs dfgsndgfs sfgkjnsdfgk' },
//     ],
//   },
//   {
//     _id: {
//       $oid: '6511b31088e392a4f6ddf849',
//     },
//     nome: 'Alice Vila',
//     numUtente: '7346158',
//     telemovel: '918452456',
//     email: 'alicevila@gmail.com',
//     medicamento: 'Ben-u-ron',
//     hora: '10:00',
//     via: 'Oral',
//     dose: '1 Comp',
//   },
//   {
//     _id: {
//       $oid: '6511b34088e392a4f6ddf84a',
//     },
//     nome: 'Bob Construtor',
//     numUtente: '6427815',
//     telemovel: '962458735',
//     email: 'bobconstrutor@gmail.com',
//     medicamento: 'Ben-u-ron',
//     hora: '11:00',
//     via: 'Oral',
//     dose: '1 Comp',
//   },
// ];

// // WITH 18 PATIENTS
const pacientes = [
  {
    _id: {
      $oid: '6511a70a88e392a4f6ddf847',
    },
    nome: 'Jane Atkinson',
    numUtente: '9758246',
    telemovel: '922777888',
    email: 'janeatkinson@gmail.com',
    medicamento: 'Ben-u-ron',
    hora: '15:00',
    via: 'Oral',
    dose: '1 Comp',
    mensagens: [
      {
        mensagem: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis',
      },
      { mensagem: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis' },
      {
        mensagem: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis',
      }
    ],
  },
  {
    _id: {
      $oid: '6511b31088e392a4f6ddf849',
    },
    nome: 'Alice Vilar',
    numUtente: '6587498',
    telemovel: '918452456',
    email: 'alicevila@gmail.com',
    medicamento: 'Ben-u-ron',
    hora: '10:00',
    via: 'Oral',
    dose: '1 Comp',
  },
  {
    _id: {
      $oid: '6511b31088e392a4f6ddf849',
    },
    nome: 'Alice Vilar',
    numUtente: '6587422',
    medicamento: 'Ben-u-ron',
    hora: '10:00',
    via: 'Oral',
    dose: '1 Comp',
    mensagens: [
      {
        mensagem: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis',
      },
    ]
  },
  {
    _id: {
      $oid: '6511b31088e392a4f6ddf849',
    },
    nome: 'Alice Vila',
    numUtente: '6587421',
    telemovel: '918452456',
    email: 'alicevila@gmail.com',
    medicamento: 'Ben-u-ron',
    hora: '10:00',
    via: 'Oral',
    dose: '1 Comp',
    mensagens: [
      {
        mensagem: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex officia voluptate. Culpa nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis',
      },
      {
        mensagem: 'Lorem ipsum dolor eprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi animcupidatat excepteur officia. Reprehenderit aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis',
      },
      {
        mensagem: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis',
      },
      {
        mensagem: 'Nisi animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis',
      },
    ]
  },
  {
    _id: {
      $oid: '6511a70a88e392a4f6ddf847',
    },
    nome: 'Jane Atkinson',
    numUtente: '9758246',
    telemovel: '922777888',
    email: 'janeatkinson@gmail.com',
    medicamento: 'Ben-u-ron',
    hora: '15:00',
    via: 'Oral',
    dose: '1 Comp',
    mensagens: [
      {
        mensagem: 'asdjasdk askjfbkjs kadhndfsk ksdfjnsdfk',
      },
      { mensagem: 'dsfdnsd dfdfskjngdfogs dfgsndgfs sfgkjnsdfgk' },
    ],
  },
  {
    _id: {
      $oid: '6511b31088e392a4f6ddf849',
    },
    nome: 'Alice Vilar',
    numUtente: '6587498',
    telemovel: '918452456',
    email: 'alicevila@gmail.com',
    medicamento: 'Ben-u-ron',
    hora: '10:00',
    via: 'Oral',
    dose: '1 Comp',
  },
  {
    _id: {
      $oid: '6511b31088e392a4f6ddf849',
    },
    nome: 'Alice Vilar',
    numUtente: '6587422',
    medicamento: 'Ben-u-ron',
    hora: '10:00',
    via: 'Oral',
    dose: '1 Comp',
  },
  {
    _id: {
      $oid: '6511b31088e392a4f6ddf849',
    },
    nome: 'Alice Vila',
    numUtente: '6587421',
    telemovel: '918452456',
    email: 'alicevila@gmail.com',
    medicamento: 'Ben-u-ron',
    hora: '10:00',
    via: 'Oral',
    dose: '1 Comp',
  },
  {
    _id: {
      $oid: '6511a70a88e392a4f6ddf847',
    },
    nome: 'Jane Atkinson',
    numUtente: '7346158',
    telemovel: '922777888',
    email: 'janeatkinson@gmail.com',
    medicamento: 'Ben-u-ron',
    hora: '15:00',
    via: 'Oral',
    dose: '1 Comp',
    mensagens: [
      {
        mensagem: 'asdjasdk askjfbkjs kadhndfsk ksdfjnsdfk',
      },
      { mensagem: 'dsfdnsd dfdfskjngdfogs dfgsndgfs sfgkjnsdfgk' },
    ],
  },
  {
    _id: {
      $oid: '6511b34088e392a4f6ddf84a',
    },
    nome: 'Bob Eletricista',
    numUtente: '6427815',
    telemovel: '962458735',
    email: 'bobconstrutor@gmail.com',
    medicamento: 'Ben-u-ron',
    hora: '11:00',
    via: 'Oral',
    dose: '1 Comp',
  },
  {
    _id: {
      $oid: '6511a70a88e392a4f6ddf847',
    },
    nome: 'Jane Atkinson',
    numUtente: '9758246',
    telemovel: '922777888',
    email: 'janeatkinson@gmail.com',
    medicamento: 'Ben-u-ron',
    hora: '15:00',
    via: 'Oral',
    dose: '1 Comp',
    mensagens: [
      {
        mensagem: 'asdjasdk askjfbkjs kadhndfsk ksdfjnsdfk',
      },
      { mensagem: 'dsfdnsd dfdfskjngdfogs dfgsndgfs sfgkjnsdfgk' },
    ],
  },
  {
    _id: {
      $oid: '6511a70a88e392a4f6ddf847',
    },
    nome: 'Jane Atkinson',
    numUtente: '9758246',
    telemovel: '922777888',
    email: 'janeatkinson@gmail.com',
    medicamento: 'Ben-u-ron',
    hora: '15:00',
    via: 'Oral',
    dose: '1 Comp',
    mensagens: [
      {
        mensagem: 'asdjasdk askjfbkjs kadhndfsk ksdfjnsdfk',
      },
      { mensagem: 'dsfdnsd dfdfskjngdfogs dfgsndgfs sfgkjnsdfgk' },
    ],
  },
  {
    _id: {
      $oid: '6511b31088e392a4f6ddf849',
    },
    nome: 'Alice Vila',
    numUtente: '3265197',
    telemovel: '918452456',
    email: '',
    medicamento: 'Ben-u-ron',
    hora: '10:00',
    via: 'Oral',
    dose: '1 Comp',
  },
  {
    _id: {
      $oid: '6511b31088e392a4f6ddf849',
    },
    nome: 'Alice Vila',
    numUtente: '7346158',
    telemovel: '918452456',
    email: 'alicevila@gmail.com',
    medicamento: 'Ben-u-ron',
    hora: '10:00',
    via: 'Oral',
    dose: '1 Comp',
  },
  {
    _id: {
      $oid: '6511b34088e392a4f6ddf84a',
    },
    nome: 'Bob Construtor',
    numUtente: '6427815',
    telemovel: '962458735',
    email: 'bobconstrutor@gmail.com',
    medicamento: 'Ben-u-ron',
    hora: '11:00',
    via: 'Oral',
    dose: '1 Comp',
  },
  {
    _id: {
      $oid: '6511b31088e392a4f6ddf849',
    },
    nome: 'Alice Vila',
    numUtente: '3741516',
    telemovel: '918452456',
    email: 'alicevila@gmail.com',
    medicamento: 'Ben-u-ron',
    hora: '10:00',
    via: 'Oral',
    dose: '1 Comp',
  },
  {
    _id: {
      $oid: '6511b34088e392a4f6ddf84a',
    },
    nome: 'Bob Condutor',
    numUtente: '6427815',
    telemovel: '962458735',
    email: 'bobconstrutor@gmail.com',
    medicamento: 'Ben-u-ron',
    hora: '11:00',
    via: 'Oral',
    dose: '1 Comp',
  },
  {
    _id: {
      $oid: '6511b34088e392a4f6ddf84a',
    },
    nome: 'Bob Astronauta',
    numUtente: '6427815',
    telemovel: '962458735',
    email: 'bobconstrutor@gmail.com',
    medicamento: 'Ben-u-ron',
    hora: '11:00',
    via: 'Oral',
    dose: '1 Comp',
  },
];