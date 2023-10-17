import { LoginContext } from "../../../context/LoginContext";
import React, { useContext } from "react";
import { Navigate } from 'react-router-dom';


function Notificacoes() {
    //controle de validação de Login
    const { login } = useContext(LoginContext);

    if (!login.email || !login.password) {
        return (<Navigate to='/' />)
    }
    return (
        <div>
            <h5 class="p-1">Configuração de Alertas</h5>
            <table class="table table-responsive table-striped">
                <tbody>
                    <tr>
                        <td>Permitir Alertas </td>
                        <td>
                            <input type="checkbox" class="btn-check" id="permitirAlertas" autocomplete="off" />
                            <label class="btn btn-outline-success float-end" for="permitirAlertas">On/Off</label>
                        </td>
                    </tr>
                    <tr>
                        <td>Alerta de Horarios </td>
                        <td>
                            <input type="checkbox" class="btn-check" id="alertaHorario" autocomplete="off" />
                            <label class="btn btn-outline-success float-end" for="alertaHorario">On/Off</label>
                        </td>
                    </tr>
                    <tr>
                        <td>Alerta de Estoque Baixo </td>
                        <td>
                            <input type="checkbox" class="btn-check" id="estoqueBaixo" autocomplete="off" />
                            <label class="btn btn-outline-success float-end" for="estoqueBaixo">On/Off</label>
                        </td>
                    </tr>
                    <tr>
                        <td>Falha na Administração </td>
                        <td>
                            <input type="checkbox" class="btn-check" id="falaAdministracao" autocomplete="off" />
                            <label class="btn btn-outline-success float-end" for="falaAdministracao">On/Off</label>
                        </td>
                    </tr>
                    <tr>
                        <td>Mensagens </td>
                        <td>
                            <input type="checkbox" class="btn-check" id="mensagens" autocomplete="off" />
                            <label class="btn btn-outline-success float-end" for="mensagens">On/Off</label>
                        </td>
                    </tr>
                    <tr>
                        <td>Alerta de Receita Caducada </td>
                        <td>
                            <input type="checkbox" class="btn-check" id="receitaCaducada" autocomplete="off" />
                            <label class="btn btn-outline-success float-end" for="receitaCaducada">On/Off</label>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export { Notificacoes }