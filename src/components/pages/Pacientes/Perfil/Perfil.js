
import { LoginContext } from "../../../../context/LoginContext";
import React, { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


function Perfil() {
    //controle de validação de Login
    const { login } = useContext(LoginContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!login.email || !login.password) {
            navigate('/errorPage')
        }
    })


    return (
        <div>Hello!! Aqui o PERFIL!!!</div>



    )


}











export default Perfil



