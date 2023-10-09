import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import './AreaDeTrabalho.css';

function Pacientes() {

    //This function fetch the data info of all patients in my backend endpoint /findPatients.
    const pacientes = async () => {
        try {
            const res = await fetch(`http://localhost:5000/findPatients`)
            const data = await res.json()
            return data
        } catch (error) {
            console.error(error)
        }
    }

    const [id, setId] = useState(0);

    //This function process the info of all patients in a table, and add this table in my html.
    async function showData(pacientes) {
        const mostrar = ["nome"];
        const conteudo = document.querySelector("#tablebody");
        pacientes.forEach(paciente => {
            const row = document.createElement("tr");
            for (const k in paciente) {
                if (mostrar.includes(k)) {
                    const cell = document.createElement("td");
                    const cellText = document.createTextNode(paciente[k])
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                    conteudo.appendChild(row);
                }
            }

            let linkReceita = React.createElement("Link", {to:`/inserirReceita`}, "Inserir Receita")
            const cellButtons = React.createElement("td", null, linkReceita);
            

                
            
             row.appendChild(cellButtons)
             conteudo.appendChild(row)

        });
        updateSize();
    }

    //This function handle de clicking on the Ok buttons of my table.  => THIS ONE
    async function handleClickOk(id) {
        
        
       




        
             const  listaPacientes = await pacientes();
        // func para enviar a info do paciente clicado para a respetiva pág de receitas
         function sendDataToEndpoint() {
            fetch('http://localhost:5000/pacientes/receitas', {
              method: 'POST', 
              headers: {
                'Content-Type': 'application/json', // adjust the content type as needed
              },
              body: JSON.stringify({ listaPacientes }), // convert your data to JSON if needed
            })
              .then(response => response.json())
              .then(listaPacientes => {
                console.log('Fetch funcionou')
            })
              .catch(error => {
                console.log('Erro no fetch')
              });
          }


          sendDataToEndpoint() 
          
       
    }

    //This function handle de clicking on the NOk buttons of my table.
    function adicionarInformacao(id) {
        setId(id)
    }

    async function addToPatient(id) {
        console.log(id)
        const infotext = document.querySelector(`#infotext`).value;
        console.log(infotext)
        try {
            const res = await fetch(`http://localhost:5000/api/addToPatient`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id: id, infotext: infotext }),
            });

            if (res.ok) {
                const modalBodyRes = document.querySelector(`.mobalBodyaddtoPacient`);
                modalBodyRes.textContent = `Mensagem adicionada com Sucesso!`;
                const modalFooterRes = document.querySelector(`.mobalFooteraddtoPacient`);
                modalFooterRes.innerHTML = `<button type="button" class="btn btn-darkblue rounded-pill" data-bs-dismiss="modal">Fechar</button>`
            } else {
                const modalRes = document.querySelector(`.mobalBodyaddtoPacient`);
                modalRes.textContent = `Falha ao adicionar mensagem!`
                const modalFooterRes = document.querySelector(`.mobalFooteraddtoPacient`);
                modalFooterRes.innerHTML = `<button type="button" class="btn btn-darkblue rounded-pill" data-bs-dismiss="modal">Fechar</button>`
            }
        } catch (error) {
            console.error(error)
        }
    }

    //This function change the content of buttons OK and Nok when the window change sizes.
    function updateSize() {
        //Taking all Ok and Nok buttons.
        const btnOk = document.querySelectorAll(`.widthControlOk`);

        if (window.innerWidth <= 768) {
            btnOk.forEach(element => {
                element.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
            </svg>`
            });
           
        } else {
            btnOk.forEach(element => {
                element.innerHTML = "Ver Receitas"
            });
           
        }
    }

    //listening for the Loaded page event.
    useEffect(() => {
        const startPatient = async () => {
            const listaPacientes = await pacientes();
            if (listaPacientes) {
                showData(listaPacientes)
            }
        }
        startPatient()
    })


    //listening for the resizing page event.
    window.addEventListener("resize", event => {
        updateSize();
    });

    return (

        <div>
            <h5 className="p-1">Área de Trabalho</h5>
            <table className="table table-responsive table-striped">
                <thead>
                    <tr>
                        <th>Nome</th>
                        
                        <th>Receitas</th>
                    </tr>
                </thead>
                <tbody id="tablebody">
                </tbody>
            </table>


            <div className="modal fade" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* <!-- Modal Header --> */}
                        <div className="modal-header">
                            <h4 className="modal-title">Informaçao sobre a Administração</h4>
                        </div>

                        {/* <!-- Modal Body --> */}
                        <div className="modal-body mobalBodyaddtoPacient">
                            <textarea id="infotext" placeholder="Medicação não foi administrada?" rows="5"></textarea>
                        </div>

                        {/* <!-- Modal Footer --> */}
                        <div className="modal-footer mobalFooteraddtoPacient">
                            <button type="button" onClick={async () => await addToPatient(id)} className="btn btn-success sendButton">Enviar</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Pacientes }