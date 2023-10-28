import { LoginContext } from "../../../context/LoginContext";
import React, { useContext, useEffect, useState } from "react";
import { Navigate } from 'react-router-dom';


function Notificacoes() {
    //controle de validação de Login
    const { login } = useContext(LoginContext);
    const [notificacoes, setNotificacoes] = useState({});
    const [inicialNot, setInicialNot] = useState({});
    const [btnSalvar, setBtnSalvar] = useState(false);

    useEffect(() => {
        const entidade = async () => {
            try {
                const info = await fetch(`http://localhost:5000/api/findEntidade`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ id: login.id }),
                });
                const res = await info.json();
                if (res) {
                    setNotificacoes(res[0].notificacoes);
                    setInicialNot(res[0].notificacoes);
                }
            } catch (e) {
                console.error(e)
            }
        }
        entidade()
    }, [])

    useEffect(()=>{
        if(JSON.stringify(inicialNot)===JSON.stringify(notificacoes)){
            setBtnSalvar(false)
        }else{
            setBtnSalvar(true)
        }
    },[notificacoes, inicialNot])

    if (!login.id || !login.status) {
        return (<Navigate to='/' />)
    }

    function handlebtn(btnType) {
        const valor = notificacoes[btnType] ? false : true
        setNotificacoes({ ...notificacoes, [btnType]: valor })
    }
    function handleSalvar(){
        setInicialNot(notificacoes)
        const entidade = async () => {
            try {
                const info = await fetch(`http://localhost:5000/api/findEntidade`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ id: login.id, notificacoes:notificacoes }),
                });
                const res = await info.json();
                if (res) {
                    alert('Configurações salvas com sucesso!')
                }
            } catch (e) {
                console.error(e)
            }
        }
        entidade()
    }

    return (
        <div style={{position:'relative'}}>
            <h5 class="p-1">Configuração de Alertas</h5>
            <table className="table table-responsive table-striped">
                <tbody  style={{height:'230px'}}>
                    <tr>
                        <td>Alerta de Horarios </td>
                        <td>
                            <button className={`btn btn-outline-success float-end ${notificacoes.horarios ? "active" : ""}`}
                                onClick={() => handlebtn('horarios')} disabled>{notificacoes.horarios ? 'ON' : 'OFF'}</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Alerta de Estoque Baixo </td>
                        <td>

                            <button className={`btn btn-outline-success float-end ${notificacoes.estoque ? "active" : ""}`}
                                onClick={() => handlebtn('estoque')}>{notificacoes.estoque ? 'ON' : 'OFF'}</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Falha na Administração </td>
                        <td>
                            <button className={`btn btn-outline-success float-end ${notificacoes.administracao ? "active" : ""}`}
                                onClick={() => handlebtn('administracao')}>{notificacoes.administracao ? 'ON' : 'OFF'}</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Alerta de Receita Caducada </td>
                        <td>
                            <button className={`btn btn-outline-success float-end ${notificacoes.receita ? "active" : ""}`}
                                onClick={() => handlebtn('receita')}>{notificacoes.receita ? 'ON' : 'OFF'}</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            {!btnSalvar? <button className="btn btn-primary float-end me-3" disabled>Salvar</button>
            :
            <button className="btn btn-primary float-end me-3" onClick={()=>handleSalvar()}>Salvar</button>
    }
        </div>
    )
}

export { Notificacoes }