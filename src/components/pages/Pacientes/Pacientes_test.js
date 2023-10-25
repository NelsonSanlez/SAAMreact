import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../../context/LoginContext";
import { Link, Navigate } from "react-router-dom";
import { Inicio } from "../Inicio/Inicio";
import { PacienteAdicionar } from "../../Buttons/PacienteAdicionar";
import './AreaDeTrabalho.css';
import './Pacientes.css';


function Pacientes() {

    const [data, setData] = useState([]);
    const [id, setId] = useState({});

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



    //controle de validação de Login
    const { login } = useContext(LoginContext);

    if (!login.id || !login.status) {
        return (<Navigate to='/' />)
    }

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



///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
//  O QUE MOSTRA RENDER
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////


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


export { Pacientes }