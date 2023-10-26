import { LoginContext } from "../../../context/LoginContext";
import React, { useContext, useEffect, useState } from "react";
import { Navigate } from 'react-router-dom';


function Notificacoes() {
    //controle de validação de Login
    const { login } = useContext(LoginContext);
    const [notificacoes, setNotificacoes] = useState({horarios: false, estoque: false, administracao: false, receita:false});

    useEffect(()=>{
        try {
            
        } catch (e) {
            console.error(e)
        }
    })
    
    useEffect(()=>{
        console.log(notificacoes)
    },[notificacoes])

    if (!login.id || !login.status) {
        return (<Navigate to='/' />)
    }
    
    function handlebtn(btnType){
        const valor = notificacoes[btnType]? false : true
        setNotificacoes({...notificacoes, [btnType]: valor })
    }

    return (
        <div>
            <h5 class="p-1">Configuração de Alertas</h5>
            <table className="table table-responsive table-striped">
                <tbody>
                    <tr>
                        <td>Alerta de Horarios </td>
                        <td>
                            <input type="checkbox" className="btn-check" id="alertaHorario" onClick={()=> handlebtn('horarios')} disabled autocomplete="off" />
                            <label className="btn btn-outline-success float-end" for="alertaHorario">{notificacoes.horarios? 'ON' : 'OFF'}</label>
                        </td>
                    </tr>
                    <tr>
                        <td>Alerta de Estoque Baixo </td>
                        <td>
                            <input type="checkbox" className="btn-check" id="estoqueBaixo" onClick={()=> handlebtn('estoque')} autocomplete="off" />
                            <label className="btn btn-outline-success float-end" for="estoqueBaixo">{notificacoes.estoque? 'ON' : 'OFF'}</label>
                        </td>
                    </tr>
                    <tr>
                        <td>Falha na Administração </td>
                        <td>
                            <input type="checkbox" className="btn-check" id="falaAdministracao" onClick={()=> handlebtn('administracao')} autocomplete="off" />
                            <label className="btn btn-outline-success float-end" for="falaAdministracao">{notificacoes.administracao? 'ON' : 'OFF'}</label>
                        </td>
                    </tr>
                    <tr>
                        <td>Alerta de Receita Caducada </td>
                        <td>
                            <input type="checkbox" className="btn-check" id="receitaCaducada" onClick={()=> handlebtn('receita')} autocomplete="off" />
                            <label className="btn btn-outline-success float-end" for="receitaCaducada">{notificacoes.receita? 'ON' : 'OFF'}</label>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export { Notificacoes }