
import { LoginContext } from "../../../../context/LoginContext";
import React, { useContext, useEffect } from "react";
import { Navigate } from 'react-router-dom';


function Perfil() {
    //controle de validação de Login
    //controle de validação de Login
    const { login } = useContext(LoginContext);
    
    if (!login.id || !login.status) {
        return (<Navigate to='/'/>)
    }


    return (
        <div>Hello!! Aqui o PERFIL!!!</div>



    )


}











export default Perfil



