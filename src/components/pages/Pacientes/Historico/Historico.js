import { LoginContext } from "../../../../context/LoginContext";
import React, { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';



function Historico() {
    //controle de validação de Login
    const { login } = useContext(LoginContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!login.email || !login.password) {
            navigate('/')
        }
    })


    return (
        <div>Hello!! Aqui o HISTORICO!!!</div>



    )


}











export default Historico



