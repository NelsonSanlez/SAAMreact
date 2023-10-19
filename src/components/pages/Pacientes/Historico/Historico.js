import { LoginContext } from "../../../../context/LoginContext";
import React, { useContext} from "react";
import { Navigate } from 'react-router-dom';



function Historico() {
    //controle de validação de Login
    const { login } = useContext(LoginContext);
    
    if (!login.id || !login.status) {
        return (<Navigate to='/'/>)
    }


    return (
        <div>Hello!! Aqui o HISTORICO!!!</div>



    )


}











export default Historico



