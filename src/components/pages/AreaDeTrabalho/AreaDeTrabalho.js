import React, { useEffect, useState } from "react";
import './AreaDeTrabalho.css';

function AreaDeTrabalho() {

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
        const mostrar = ["nome", "medicamento", "horario", "via", "dose", "hora"];
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

            const cellButtons = document.createElement("td");
            let buttonOk = document.createElement("button");
            buttonOk.name = `botaoOk`;
            buttonOk.textContent = `Ok`;
            buttonOk.className = `btn btn-outline-success widthControlOk`
            buttonOk.addEventListener('click', () => handleClickOk(paciente._id));
            cellButtons.appendChild(buttonOk)
            row.appendChild(cellButtons)
            conteudo.appendChild(row)

            let buttonNok = document.createElement("button");
            buttonNok.name = `botaoNok`;
            buttonNok.textContent = `Nok`;
            buttonNok.className = `btn btn-outline-danger widthControlNok`;
            buttonNok.addEventListener('click', () => adicionarInformacao(paciente._id));
            buttonNok.setAttribute("data-bs-toggle", "modal");
            buttonNok.setAttribute("data-bs-target", "#myModal");
            cellButtons.appendChild(buttonNok)
            row.appendChild(cellButtons)
            conteudo.appendChild(row)


        });
        updateSize();
    }

    //This function handle de clicking on the Ok buttons of my table.
    async function handleClickOk(id) {
        const listaPacientes = await pacientes();
        listaPacientes.forEach(elem => {
            if (elem._id === id) {
                console.log(elem)
            }
        });
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
                method: "PUT",
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
        const btnNok = document.querySelectorAll(`.widthControlNok`);

        if (window.innerWidth <= 768) {
            btnOk.forEach(element => {
                element.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
            </svg>`
            });
            btnNok.forEach(elem => {
                elem.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>`
            });
        } else {
            btnOk.forEach(element => {
                element.innerHTML = "Ok"
            });
            btnNok.forEach(elem => {
                elem.innerHTML = "Nok"
            });
        }
    }

    //listening for the Loaded page event.
    useEffect(() => {
        const startPatient = async () => {
            const listaPacientes = await pacientes();
            showData(listaPacientes)
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
                        <th>Medicamento</th>
                        <th>Hora</th>
                        <th>Via</th>
                        <th>Dose</th>
                        <th>Administação</th>
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

export { AreaDeTrabalho }