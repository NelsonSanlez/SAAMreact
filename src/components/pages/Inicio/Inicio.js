import styles from './Inicio.module.css';
import { LoginContext } from "../../../context/LoginContext";
import { useEffect, useContext, useState } from "react";
import { Navigate } from 'react-router-dom';


function Inicio(props) {
    //controle de validação de Login
    const { login } = useContext(LoginContext);
    const [paciente, setPaciente] = useState({ nome: "", sobrenome: "", numUtente: 0, telemovel: 0, email: "" });
    const [enfermeiro, setEnfermeiro] = useState({ nome: "", sobrenome: "", cedulaPro: 0, telemovel: 0, email: "" });
    const [modal, setModal] = useState(0)
    const [verifyNumUtente, setVerifyNumUtente] = useState(false)
    const [verifyCedulaPro, setVerifyCedulaPro] = useState(false)
    const [verifyEmail, setVerifyEmail] = useState(false)

    useEffect(() => {
        if (modal !== 0) {
            const restartModal = () => {
                setModal(0);
                setPaciente({ nome: "", sobrenome: "", numUtente: 0, telemovel: 0, email: "" });
                setEnfermeiro({ nome: "", sobrenome: "", cedulaPro: 0, telemovel: 0, email: "" });
            }
            window.addEventListener(`click`, restartModal)
        }
    }, [modal])

    if (!login.id || !login.status) {
        return (<Navigate to='/' />)
    }

    //This function send the information of the new patient to the backend.
    const addPaciente = async () => {

        setVerifyNumUtente(false);
        setVerifyEmail(false);

        if (!(paciente.email).includes('@')) {
            setVerifyEmail(true)
            return
        }

        const verification = async () => {
            try {
                const res = await fetch(`http://localhost:5000/findPatient`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ numUtente: paciente.numUtente }),
                });

                console.log(res);

                if (res.ok) {

                    setVerifyNumUtente(true)
                    return true
                } else {
                    const res = await fetch(`http://localhost:5000/api/regPatient`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(paciente),
                    });

                    if (res.ok) {
                        setModal(1)
                    } else {
                        setModal(2)
                    }
                }
            } catch (error) {
                console.error(error)
            }
        }
        verification()
    }

    const addEnfermeiro = async () => {

        setVerifyCedulaPro(false);
        setVerifyEmail(false);

        if (!(enfermeiro.email).includes('@')) {
            setVerifyEmail(true)
            return
        }

        const verification = async () => {
            try {
                const res = await fetch(`http://localhost:5000/findNurse`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ cedulaPro: enfermeiro.cedulaPro }),
                });

                if (res.ok) {
                    setVerifyCedulaPro(true)
                    return true
                } else {
                    const res = await fetch(`http://localhost:5000/api/regNurse`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(enfermeiro),
                    });

                    if (res.ok) {
                        setModal(1)
                    } else {
                        setModal(2)
                    }
                }
            } catch (error) {
                console.error(error)
            }
        }
        verification()
    }

    function handleAddPaciente(event) {
        setPaciente({ ...paciente, [event.target.name]: event.target.value })
    }
    
    function handleAddEnfermeiro(event) {
        setEnfermeiro({ ...enfermeiro, [event.target.name]: event.target.value })
    }

    function handleModalAddPaciente() {
        if (modal === 0) {
            return (
                <div>
                    <div className="modal-body modalbodyRes">
                        <form>
                            <div className="mb-3 col-md-auto">
                                <label for="nome" className="col-form-label">Nome</label>
                                <input type="text" className="form-control" name="nome" value={paciente.nome} onChange={handleAddPaciente} />
                            </div>
                            <div className="mb-3 col-md-auto">
                                <label for="sobrenome" className="col-form-label">Sobrenome</label>
                                <input type="text" className="form-control" name="sobrenome" value={paciente.sobrenome} onChange={handleAddPaciente} />
                            </div>
                            <div className="mb-3 col-md-auto">
                                <label for="numUtente" className="col-form-label">N<sup>o</sup> Utente</label>
                                <input type="text" className="form-control" name="numUtente" value={paciente.numUtente} onChange={handleAddPaciente} />
                                {verifyNumUtente ? <p style={{ color: 'red', fontSize: '12px' }}>Numero de Utente já cadastrado!</p> : <p></p>}
                            </div>
                            <div className="mb-3">
                                <label for="email" className="col-form-label">Email</label>
                                <input type="email" className="form-control" name="email" value={paciente.email} onChange={handleAddPaciente} />
                                {verifyEmail ? <p style={{ color: 'red', fontSize: '12px' }}>Insira um email valido!</p> : <p></p>}
                            </div>
                            <div className="mb-3">
                                <label for="telemovel" className="col-form-label">Telemovel</label>
                                <input type="text" className="form-control" name="telemovel" value={paciente.telemovel} onChange={handleAddPaciente} />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer modalfooterRes">
                        <button type="button" className="btn btn-primary rounded-pill" onClick={() => addPaciente()} id="registarForm">Registar</button>
                    </div>
                </div>)
        } else if (modal === 1) {
            return (<div>
                <div className="modal-body modalbodyRes">
                    <p>Paciente cadastrado com Sucesso!</p>
                </div>
                <div className="modal-footer modalfooterRes">
                    <button type="button" class="btn btn-primary rounded-pill" data-bs-dismiss="modal">Fechar</button>
                </div>
            </div>)
        } else {
            return (<div>
                <div className="modal-body modalbodyRes">
                    <p>Erro ao cadastrar Paciente!</p>
                </div>
                <div className="modal-footer modalfooterRes">
                    <button type="button" class="btn btn-primary rounded-pill" data-bs-dismiss="modal">Fechar</button>
                </div>
            </div>)
        }
    }

    function handleModalAddEnfermeiro(){
        if (modal === 0) {
            return (
                <div>
                    <div className="modal-body modalbodyRes">
                        <form>
                            <div className="mb-3 col-md-auto">
                                <label for="nome" className="col-form-label">Nome</label>
                                <input type="text" className="form-control" name="nome" value={enfermeiro.nome} onChange={handleAddEnfermeiro} />
                            </div>
                            <div className="mb-3 col-md-auto">
                                <label for="sobrenome" className="col-form-label">Sobrenome</label>
                                <input type="text" className="form-control" name="sobrenome" value={enfermeiro.sobrenome} onChange={handleAddEnfermeiro} />
                            </div>
                            <div className="mb-3 col-md-auto">
                                <label for="cedulaPro" className="col-form-label">Cédula Profissional</label>
                                <input type="text" className="form-control" name="cedulaPro" value={enfermeiro.cedulaPro} onChange={handleAddEnfermeiro} />
                                {verifyCedulaPro ? <p style={{ color: 'red', fontSize: '12px' }}>Cédula Profissional já cadastrado!</p> : <p></p>}
                            </div>
                            <div className="mb-3">
                                <label for="email" className="col-form-label">Email</label>
                                <input type="email" className="form-control" name="email" value={enfermeiro.email} onChange={handleAddEnfermeiro} />
                                {verifyEmail ? <p style={{ color: 'red', fontSize: '12px' }}>Insira um email valido!</p> : <p></p>}
                            </div>
                            <div className="mb-3">
                                <label for="telemovel" className="col-form-label">Telemovel</label>
                                <input type="text" className="form-control" name="telemovel" value={enfermeiro.telemovel} onChange={handleAddEnfermeiro} />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer modalfooterRes">
                        <button type="button" className="btn btn-primary rounded-pill" onClick={() => addEnfermeiro()} id="registarForm">Registar</button>
                    </div>
                </div>)
        } else if (modal === 1) {
            return (<div>
                <div className="modal-body modalbodyRes">
                    <p>Enfermeiro cadastrado com Sucesso!</p>
                </div>
                <div className="modal-footer modalfooterRes">
                    <button type="button" class="btn btn-primary rounded-pill" data-bs-dismiss="modal">Fechar</button>
                </div>
            </div>)
        } else {
            return (<div>
                <div className="modal-body modalbodyRes">
                    <p>Erro ao cadastrar Enfermeiro!</p>
                </div>
                <div className="modal-footer modalfooterRes">
                    <button type="button" class="btn btn-primary rounded-pill" data-bs-dismiss="modal">Fechar</button>
                </div>
            </div>)
        }
    }

    // //This function send de delete command to the backend, to delete a patient.
    // const deletePatients = async (data) => {
    //     try {
    //         const res = await fetch(`http://localhost:5000/api/deletePatient`, {
    //             method: "DELETE",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(data),
    //         });

    //         if (!res.ok) {
    //             throw new Error(`Erro ao Deletar Paciente!`)
    //         } else {
    //             return true
    //         }

    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

    // //This function send the delete command to the delePatient Function and generates a response to the modal, depending on the result.
    // async function deletePatientModal() {

    //     const numUtente = document.querySelector("#deleteUtente").value;
    //     const data = { numUtente };
    //     const res = await deletePatients(data);


    //     if (res === true) {
    //         const modalBodyRes = document.querySelector(`.modalbodyDel`);
    //         modalBodyRes.textContent = `Paciente Deletado com Sucesso!`;
    //         const modalFooterRes = document.querySelector(`.modalfooterDel`);
    //         modalFooterRes.innerHTML = `<button type="button" class="btn btn-primary rounded-pill" data-bs-dismiss="modal">Fechar</button>`
    //     } else {
    //         const modalRes = document.querySelector(`.modalbodyDel`);
    //         modalRes.textContent = `Falha ao Deletar Paciente!`
    //         const modalFooterRes = document.querySelector(`.modalfooterDel`);
    //         modalFooterRes.innerHTML = `<button type="button" class="btn btn-primary rounded-pill" data-bs-dismiss="modal">Fechar</button>`
    //     }
    // }

    // async function editarPaciente() {
    //     const nomeEdit = document.getElementById("nomeEdit").value;
    //     const numeroUtenteEdit = document.getElementById("numUtenteEdit").value;
    //     const nome = document.querySelector("#novoNome").value;
    //     const sobrenome = document.querySelector("#novoSobrenome").value;
    //     const numUtente = document.querySelector("#novoNumUtente").value;
    //     const email = document.querySelector("#novoEmail").value;
    //     const telemovel = document.querySelector("#novoTelemovel").value;

    //     const data = [{ nome: nomeEdit, numUtente: numeroUtenteEdit }, { nome, sobrenome, numUtente, telemovel, email }];

    //     let resposta;
    //     try {
    //         const res = await fetch(`http://localhost:5000/api/editPatient`, {
    //             method: "PUT",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(data),
    //         });

    //         console.log(res)
    //         if (!res.ok) {
    //             throw new Error(`Erro ao Editar Paciente!`)
    //         } else {
    //             resposta = true
    //         }

    //     } catch (error) {
    //         console.error(error)
    //     }

    //     if (resposta === true) {
    //         const modalBodyRes = document.querySelector(`.modalbodyEdit`);
    //         modalBodyRes.textContent = `Paciente Editado com Sucesso!`;
    //         const modalFooterRes = document.querySelector(`.modalfooterEdit`);
    //         modalFooterRes.innerHTML = `<button type="button" class="btn btn-primary rounded-pill" data-bs-dismiss="modal">Fechar</button>`
    //     } else {
    //         const modalRes = document.querySelector(`.modalbodyEdit`);
    //         modalRes.textContent = `Falha ao Editar Paciente!`
    //         const modalFooterRes = document.querySelector(`.modalfooterEdit`);
    //         modalFooterRes.innerHTML = `<button type="button" class="btn btn-primary rounded-pill" data-bs-dismiss="modal">Fechar</button>`
    //     }

    // }


    return (
        <div>
            <h5 className="p-1">Início</h5>
            <div className="pt-4 col-md-4">
                <button type="button" className={`btn btn-light border-black ${styles.btnInicio}`} data-bs-toggle="modal"
                    data-bs-target="#modalRegPaciente"><svg xmlns="http://www.w3.org/2000/svg" width="22"
                        height="22" fill="currentColor" className="bi bi-person-plus" viewBox="0 0 16 16">
                        <path
                            d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                        <path fill-rule="evenodd"
                            d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                    </svg> Adicionar Paciente</button>
            </div>

            <div className="pt-4 col-md-4">
                <button type="button" className={`btn btn-light border-black ${styles.btnInicio}`} data-bs-toggle="modal"
                    data-bs-target="#modalRegEnfermeiro"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-clipboard2-check" viewBox="0 0 16 16">
                        <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z" />
                        <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z" />
                        <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3Z" />
                    </svg> Adicionar Enfermeiro</button>
            </div>

            <div className="pt-4 col-md-4">
                <button type="button" className={`btn btn-light border-black ${styles.btnInicio}`} data-bs-toggle="modal"
                    data-bs-target="#modalAddPacToEnf"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    </svg> Adicionar paciente a Infermeiro</button>
            </div>

            {/* <div className="pt-4 col-md-4">
                <button type="button" className={`btn btn-light border-black ${styles.btnInicio}`} data-bs-toggle="modal"
                    data-bs-target="#modalDeletePaciente"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                    </svg> Apagar Paciente</button>
            </div>

            <div className="pt-4 col-md-4">
                <button type="button" className={`btn btn-light border-black ${styles.btnInicio}`} data-bs-toggle="modal"
                    data-bs-target="#modalEditPaciente"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-file-earmark-person" viewBox="0 0 16 16">
                        <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z" />
                    </svg> Editar Paciente</button>
            </div> */}



            {/*--Modal Insert Patients--*/}
            <div className="modal fade" id="modalRegPaciente" tabindex="-1" aria-labelledby="modalRegPaciente" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3>Inserir Paciente</h3>
                        </div>
                        {handleModalAddPaciente()}
                    </div>
                </div>
            </div>

            <div className="modal fade" id="modalRegEnfermeiro" tabindex="-1" aria-labelledby="modalRegEnfermeiro" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3>Inserir Enfermeiro</h3>
                        </div>
                        {handleModalAddEnfermeiro()}
                    </div>
                </div>
            </div>

            {/*--Modal Delete Patients
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

            Modal edit paciente
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
            </div>*/}
        </div>
    )


}


export { Inicio }