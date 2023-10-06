import './Inicio.css';


function Inicio(props) {

    //This function send the information of the new patient to the backend.
    const addPaciente = async (data) => {
        try {
            const res = await fetch(`http://localhost:5000/api/regPatient`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                throw new Error(`Erro ao Inserir Paciente!`)
            } else {
                return true
            }

        } catch (error) {
            console.error(error)
        }
    }

    //This function catch the information from the insert patient form, and generates a response to the modal, depending on the result.
    async function formPatient() {
        const nome = document.querySelector("#nome").value;
        const sobrenome = document.querySelector("#sobrenome").value;
        const numUtente = document.querySelector("#numUtente").value;
        const email = document.querySelector("#email").value;
        const telemovel = document.querySelector("#telemovel").value;
        

        const data = { nome, sobrenome, numUtente, telemovel, email};

        const res = await addPaciente(data);

        if (res === true) {
            const modalBodyRes = document.querySelector(`.modalbodyRes`);
            modalBodyRes.textContent = `Paciente cadastrado com Sucesso!`;
            const modalFooterRes = document.querySelector(`.modalfooterRes`);
            modalFooterRes.innerHTML = `<button type="button" class="btn btn-primary rounded-pill" data-bs-dismiss="modal">Fechar</button>`
        } else {
            const modalRes = document.querySelector(`.modalbodyRes`);
            modalRes.textContent = `Falha ao cadastrar Paciente!`
            const modalFooterRes = document.querySelector(`.modalfooterRes`);
            modalFooterRes.innerHTML = `<button type="button" class="btn btn-primary rounded-pill" data-bs-dismiss="modal">Fechar</button>`
        }
    }

    //This function send de delete command to the backend, to delete a patient.
    const deletePatients = async (data) => {
        try {
            const res = await fetch(`http://localhost:5000/api/deletePatient`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                throw new Error(`Erro ao Deletar Paciente!`)
            } else {
                return true
            }

        } catch (error) {
            console.error(error)
        }
    }

    //This function send the delete command to the delePatient Function and generates a response to the modal, depending on the result.
    async function deletePatientModal() {

        const numUtente = document.querySelector("#deleteUtente").value;
        const data = { numUtente };
        const res = await deletePatients(data);


        if (res === true) {
            const modalBodyRes = document.querySelector(`.modalbodyDel`);
            modalBodyRes.textContent = `Paciente Deletado com Sucesso!`;
            const modalFooterRes = document.querySelector(`.modalfooterDel`);
            modalFooterRes.innerHTML = `<button type="button" class="btn btn-primary rounded-pill" data-bs-dismiss="modal">Fechar</button>`
        } else {
            const modalRes = document.querySelector(`.modalbodyDel`);
            modalRes.textContent = `Falha ao Deletar Paciente!`
            const modalFooterRes = document.querySelector(`.modalfooterDel`);
            modalFooterRes.innerHTML = `<button type="button" class="btn btn-primary rounded-pill" data-bs-dismiss="modal">Fechar</button>`
        }
    }

    async function editarPaciente() {
        const nomeEdit = document.getElementById("nomeEdit").value;
        const numeroUtenteEdit = document.getElementById("numUtenteEdit").value;
        const nome = document.querySelector("#novoNome").value;
        const sobrenome = document.querySelector("#novoSobrenome").value;
        const numUtente = document.querySelector("#novoNumUtente").value;
        const email = document.querySelector("#novoEmail").value;
        const telemovel = document.querySelector("#novoTelemovel").value;

        const data = [{ nome: nomeEdit, numUtente: numeroUtenteEdit }, { nome, sobrenome, numUtente, telemovel, email}];

        let resposta;
        try {
            const res = await fetch(`http://localhost:5000/api/editPatient`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            console.log(res)
            if (!res.ok) {
                throw new Error(`Erro ao Editar Paciente!`)
            } else {
                resposta = true
            }

        } catch (error) {
            console.error(error)
        }

        if (resposta === true) {
            const modalBodyRes = document.querySelector(`.modalbodyEdit`);
            modalBodyRes.textContent = `Paciente Editado com Sucesso!`;
            const modalFooterRes = document.querySelector(`.modalfooterEdit`);
            modalFooterRes.innerHTML = `<button type="button" class="btn btn-primary rounded-pill" data-bs-dismiss="modal">Fechar</button>`
        } else {
            const modalRes = document.querySelector(`.modalbodyEdit`);
            modalRes.textContent = `Falha ao Editar Paciente!`
            const modalFooterRes = document.querySelector(`.modalfooterEdit`);
            modalFooterRes.innerHTML = `<button type="button" class="btn btn-primary rounded-pill" data-bs-dismiss="modal">Fechar</button>`
        }

    }


    return (
        <div>
            <h5 className="p-1">Início</h5>
            <div className="pt-4 col-md-4">
                <button type="button" className="btn btn-light border-black btnInicio" data-bs-toggle="modal"
                    data-bs-target="#modalRegPaciente"><svg xmlns="http://www.w3.org/2000/svg" width="22"
                        height="22" fill="currentColor" className="bi bi-person-plus" viewBox="0 0 16 16">
                        <path
                            d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                        <path fill-rule="evenodd"
                            d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                    </svg> Adicionar Paciente</button>
            </div>

            <div className="pt-4 col-md-4">
                <button type="button" className="btn btn-light border-black btnInicio" data-bs-toggle="modal"
                    data-bs-target="#modalDeletePaciente"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                    </svg> Apagar Paciente</button>
            </div>

            <div className="pt-4 col-md-4">
                <button type="button" className="btn btn-light border-black btnInicio" data-bs-toggle="modal"
                    data-bs-target="#modalEditPaciente"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-file-earmark-person" viewBox="0 0 16 16">
                        <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z" />
                    </svg> Editar Paciente</button>
            </div>



            {/*--Modal Insert Patients--*/}
            <div className="modal fade" id="modalRegPaciente" tabindex="-1" aria-labelledby="modalRegPaciente" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3>Inserir Paciente</h3>
                        </div>
                        <div className="modal-body modalbodyRes">
                            <form>
                                <div className="mb-3 col-md-auto">
                                    <label for="nome" className="col-form-label">Nome</label>
                                    <input type="text" className="form-control" id="nome" />
                                </div>
                                <div className="mb-3 col-md-auto">
                                    <label for="sobrenome" className="col-form-label">Sobrenome</label>
                                    <input type="text" className="form-control" id="sobrenome" />
                                </div>
                                <div className="mb-3 col-md-auto">
                                    <label for="numUtente" className="col-form-label">N<sup>o</sup> Utente</label>
                                    <input type="text" className="form-control" id="numUtente" />
                                </div>
                                <div className="mb-3">
                                    <label for="email" className="col-form-label">Email</label>
                                    <input type="text" className="form-control" id="email" />
                                </div>
                                <div className="mb-3">
                                    <label for="telemovel" className="col-form-label">Telemovel</label>
                                    <input type="text" className="form-control" id="telemovel" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer modalfooterRes">
                            <button type="button" className="btn btn-primary rounded-pill" onClick={formPatient} id="registarForm">Registar</button>
                        </div>
                    </div>
                </div>
            </div>

            {/*--Modal Delete Patients*/}
            <div className="modal fade" id="modalDeletePaciente" tabindex="-1" aria-labelledby="modalDeletePaciente" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3>Deletar Paciente</h3>
                        </div>
                        <div className="modal-body modalbodyDel">
                            <form>
                                <div className="mb-3 col-md-auto">
                                    <label for="deleteUtente" className="col-form-label">N<sup>o</sup> Utente</label>
                                    <input type="search" className="form-control" id="deleteUtente" />
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer modalfooterDel">
                            <button type="button" className="btn btn-primary rounded-pill" onClick={deletePatientModal} id="deleteForm">Delete</button>
                        </div>
                    </div>
                </div>
            </div>

            {/*Modal edit paciente*/}
            <div className="modal fade" id="modalEditPaciente" tabindex="-1" aria-labelledby="modalEditPaciente" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3>Editar Paciente</h3>
                        </div>
                        <div className="modal-body modalbodyEdit">
                            <form>
                                <div className="mb-3 col-md-auto">
                                    <label for="nomeEdit" className="col-form-label">Nome do paciente a editar</label>
                                    <input type="text" className="form-control" id="nomeEdit" />
                                </div>
                                <div className="mb-3 col-md-auto">
                                    <label for="numUtenteEdit" className="col-form-label">N<sup>o</sup> Utente a editar</label>
                                    <input type="text" className="form-control" id="numUtenteEdit" />
                                </div>
                                <div className="mb-3 col-md-auto">
                                    <label for="nome" className="col-form-label">Nome</label>
                                    <input type="text" className="form-control" id="novoNome" />
                                </div>
                                <div className="mb-3 col-md-auto">
                                    <label for="sobrenome" className="col-form-label">Sobrenome</label>
                                    <input type="text" className="form-control" id="novoSobrenome" />
                                </div>
                                <div className="mb-3 col-md-auto">
                                    <label for="numUtente" className="col-form-label">N<sup>o</sup> Utente</label>
                                    <input type="text" className="form-control" id="novoNumUtente" />
                                </div>
                                <div className="mb-3">
                                    <label for="email" className="col-form-label">Email</label>
                                    <input type="text" className="form-control" id="novoEmail" />
                                </div>
                                <div className="mb-3">
                                    <label for="telemovel" className="col-form-label">Telemovel</label>
                                    <input type="text" className="form-control" id="novoTelemovel" />
                                </div>
                                
                            </form>
                        </div>
                        <div className="modal-footer modalfooterEdit">
                            <button type="button" className="btn btn-primary rounded-pill" onClick={editarPaciente} id="registarEditForm">Editar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export { Inicio }