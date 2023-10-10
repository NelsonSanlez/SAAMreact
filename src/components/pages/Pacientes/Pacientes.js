
import React from 'react';
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
            <a className="col-2 btn btn-utentes" href="#">Perfil</a>
            <a className="col-2 btn btn-utentes" href="#">Stock</a>
            <a className="col-2 btn btn-utentes" href="#">Histórico</a>
          </div>
        </div>
      ))}
    </div>
  );
}

function Main() {
  return (
    <div>
      <ShowData />
    </div>
  );
}

export default Main;




// import React, { useEffect, useState } from "react";
// import {Link} from 'react-router-dom'
// import './AreaDeTrabalho.css';

// function Pacientes() {

//     //This function fetch the data info of all patients in my backend endpoint /findPatients.
//     const pacientes = async () => {
//         try {
//             const res = await fetch(`http://localhost:5000/findPatients`)
//             const data = await res.json()
//             return data
//         } catch (error) {
//             console.error(error)
//         }
//     }

//     const [id, setId] = useState(0);

//     //This function process the info of all patients in a table, and add this table in my html.
//     async function showData(pacientes) {
//         const mostrar = ["nome"];
//         const conteudo = document.querySelector("#tablebody");
//         pacientes.forEach(paciente => {
//             const row = document.createElement("tr");
//             for (const k in paciente) {
//                 if (mostrar.includes(k)) {
//                     const cell = document.createElement("td");
//                     const cellText = document.createTextNode(paciente[k])
//                     cell.appendChild(cellText);
//                     row.appendChild(cell);
//                     conteudo.appendChild(row);
//                 }
//             }

//             let linkReceita = React.createElement("Link", {to:`/inserirReceita`}, "Inserir Receita")
//             const cellButtons = React.createElement("td", null, linkReceita);
            

                
            
//              row.appendChild(cellButtons)
//              conteudo.appendChild(row)

//         });
//         updateSize();
//     }

//     //This function handle de clicking on the Ok buttons of my table.  => THIS ONE
//     async function handleClickOk(id) {
        
        
       




        
//              const  listaPacientes = await pacientes();
//         // func para enviar a info do paciente clicado para a respetiva pág de receitas
//          function sendDataToEndpoint() {
//             fetch('http://localhost:5000/pacientes/receitas', {
//               method: 'POST', 
//               headers: {
//                 'Content-Type': 'application/json', // adjust the content type as needed
//               },
//               body: JSON.stringify({ listaPacientes }), // convert your data to JSON if needed
//             })
//               .then(response => response.json())
//               .then(listaPacientes => {
//                 console.log('Fetch funcionou')
//             })
//               .catch(error => {
//                 console.log('Erro no fetch')
//               });
//           }


//           sendDataToEndpoint() 
          
       
//     }

//     //This function handle de clicking on the NOk buttons of my table.
//     function adicionarInformacao(id) {
//         setId(id)
//     }

//     async function addToPatient(id) {
//         console.log(id)
//         const infotext = document.querySelector(`#infotext`).value;
//         console.log(infotext)
//         try {
//             const res = await fetch(`http://localhost:5000/api/addToPatient`, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ id: id, infotext: infotext }),
//             });

//             if (res.ok) {
//                 const modalBodyRes = document.querySelector(`.mobalBodyaddtoPacient`);
//                 modalBodyRes.textContent = `Mensagem adicionada com Sucesso!`;
//                 const modalFooterRes = document.querySelector(`.mobalFooteraddtoPacient`);
//                 modalFooterRes.innerHTML = `<button type="button" class="btn btn-darkblue rounded-pill" data-bs-dismiss="modal">Fechar</button>`
//             } else {
//                 const modalRes = document.querySelector(`.mobalBodyaddtoPacient`);
//                 modalRes.textContent = `Falha ao adicionar mensagem!`
//                 const modalFooterRes = document.querySelector(`.mobalFooteraddtoPacient`);
//                 modalFooterRes.innerHTML = `<button type="button" class="btn btn-darkblue rounded-pill" data-bs-dismiss="modal">Fechar</button>`
//             }
//         } catch (error) {
//             console.error(error)
//         }
//     }

//     //This function change the content of buttons OK and Nok when the window change sizes.
//     function updateSize() {
//         //Taking all Ok and Nok buttons.
//         const btnOk = document.querySelectorAll(`.widthControlOk`);

//         if (window.innerWidth <= 768) {
//             btnOk.forEach(element => {
//                 element.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
//             <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
//             </svg>`
//             });
           
//         } else {
//             btnOk.forEach(element => {
//                 element.innerHTML = "Ver Receitas"
//             });
           
//         }
//     }

//     //listening for the Loaded page event.
//     useEffect(() => {
//         const startPatient = async () => {
//             const listaPacientes = await pacientes();
//             if (listaPacientes) {
//                 showData(listaPacientes)
//             }
//         }
//         startPatient()
//     })


//     //listening for the resizing page event.
//     window.addEventListener("resize", event => {
//         updateSize();
//     });

//     return (

//         <div>
//             <h5 className="p-1">Área de Trabalho</h5>
//             <table className="table table-responsive table-striped">
//                 <thead>
//                     <tr>
//                         <th>Nome</th>
                        
//                         <th>Receitas</th>
//                     </tr>
//                 </thead>
//                 <tbody id="tablebody">
//                 </tbody>
//             </table>


//             <div className="modal fade" id="myModal">
//                 <div className="modal-dialog">
//                     <div className="modal-content">
//                         {/* <!-- Modal Header --> */}
//                         <div className="modal-header">
//                             <h4 className="modal-title">Informaçao sobre a Administração</h4>
//                         </div>

//                         {/* <!-- Modal Body --> */}
//                         <div className="modal-body mobalBodyaddtoPacient">
//                             <textarea id="infotext" placeholder="Medicação não foi administrada?" rows="5"></textarea>
//                         </div>

//                         {/* <!-- Modal Footer --> */}
//                         <div className="modal-footer mobalFooteraddtoPacient">
//                             <button type="button" onClick={async () => await addToPatient(id)} className="btn btn-success sendButton">Enviar</button>
//                             <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Fechar</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export { Pacientes }
