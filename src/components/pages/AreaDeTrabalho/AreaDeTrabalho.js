import React, { useContext, useEffect, useState } from "react";
import './AreaDeTrabalho.css';
import { Link } from "react-router-dom";
import { LoginContext } from "../../../context/LoginContext";
import { useNavigate } from 'react-router-dom';

function AreaDeTrabalho() {

    const [data, setData] = useState([]);
    const [btnOk, setBtnOk] = useState("");
    const [btnNok, setBtnNok] = useState("");
    const [texto, setTexto] = useState('');
    const [modal, setModal] = useState(0);
    const [id, setId] = useState({});
    //controle de validação de Login
    const { login } = useContext(LoginContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!login.email || !login.password) {
            navigate('/errorPage')
        }
    })


    //start the patients list Fetching on the backend.
    useEffect(() => {
        if (!data[0]) {
            const startPatient = async () => {
                try {
                    const res = await fetch(`http://localhost:5000/findPatients`)
                    const pacientes = await res.json()
                    setData(pacientes)

                } catch (error) {
                    console.error(error)
                }
            }
            startPatient()
        }
        setTexto('')
    }, [data])
    useEffect(() => {

        const handleResize = () => {
            if (window.innerWidth > 768) {
                setBtnOk('Ok')
                setBtnNok('Nok')
            } else {
                setBtnOk(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>)
                setBtnNok(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>)
            }
        }
        window.addEventListener('resize', handleResize)


        if (modal !== 0) {
            const restartModal = () => {
                setModal(0)
            }
            window.addEventListener(`click`, restartModal)
        }
    }, [modal])


    function TbodyPatients() {

        return (
            <tbody>
                {data.map((paciente, i) => {
                    if (paciente.status === "") {
                        return (
                            <tr key={i}>
                                <td>{paciente.nome}</td>
                                <td>{paciente.medicamento}</td>
                                <td>{paciente.horario}</td>
                                <td>{paciente.via}</td>
                                <td>{paciente.dose}</td>
                                <td>
                                    <Link><button className="btn btn-outline-success"
                                        onClick={() => handleClickOk(paciente._id, paciente.idMedicamento, paciente.idHorario)}>
                                        {btnOk || 'Ok'}
                                    </button></Link>
                                    <Link><button className="btn btn-outline-danger"
                                        onClick={() => setId({ id: paciente._id, idMedicamento: paciente.idMedicamento, idHorario: paciente.idHorario })} data-bs-toggle='modal' data-bs-target="#myModal" >
                                        {btnNok || 'Nok'}
                                    </button></Link>
                                </td>
                            </tr>
                        )
                    }
                })
                }
            </tbody>
        )
    }

    //This function handle de clicking on the Ok buttons of my table.
    async function handleClickOk(id, idMedicamento, idHorario) {
        const editMedStatus = async () => {
            try {
                const res = await fetch(`http://localhost:5000/api/editMedStatus`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ id: id, idMedicamento: idMedicamento, idHorario: idHorario }),
                });
                if (res.ok) {
                    return true
                } else {
                    throw new Error(`Falha ao editar Status de remédio`)
                }
            } catch (error) {
                console.error(error)
            }
        }
        if (editMedStatus() === true) {
            setData([])
        }
    }

    async function handleClickNok() {

        try {
            const res = await fetch(`http://localhost:5000/api/addToPatient`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id: id.id, infotext: texto, idMedicamento: id.idMedicamento, idHorario: id.idHorario }),
            });

            if (res.ok) {
                setModal(1)
            } else {
                setModal(2)
            }
        } catch (error) {
            console.error(error)
        }
        setData([])
    }

    const handleChangeText = (event) => {
        setTexto(event.target.value);
        console.log(texto)
    }

    function handleModal() {

        if (modal === 0) {
            return (
                <div>
                    <div className="modal-body mobalBodyaddtoPacient">
                        <textarea id="infotext" type='text' value={texto} onChange={handleChangeText} rows="5"></textarea>
                    </div>

                    <div className="modal-footer mobalFooteraddtoPacient">
                        <button type="button" onClick={() => handleClickNok()} className="btn btn-success sendButton">Enviar</button>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Fechar</button>
                    </div>
                </div>
            )
        } else if (modal === 1) {
            return (
                <div>
                    <div className="modal-body mobalBodyaddtoPacient">
                        <p>Mensagem adicionada com Sucesso!</p>
                    </div>
                    <div className="modal-footer mobalFooteraddtoPacient">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Fechar</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="modal-body mobalBodyaddtoPacient">
                        <p>Falha ao adicionar mensagem!</p>
                    </div>
                    <div className="modal-footer mobalFooteraddtoPacient">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Fechar</button>
                    </div>
                </div>
            )
        }
    }

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
                <TbodyPatients />
            </table>


            <div className="modal fade" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* <!-- Modal Header --> */}
                        <div className="modal-header">
                            <h4 className="modal-title">Informaçao sobre a Administração</h4>
                        </div>
                        {handleModal()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export { AreaDeTrabalho }