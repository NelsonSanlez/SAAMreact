import { useState, useContext, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from "react-bootstrap";
import { LoginContext } from '../../../context/LoginContext';
import EditModal from "./EditMoral";



const UsuarioPage = () => {

    const { login } = useContext(LoginContext);
    const [usuario, setUsuario] = useState({});




    useEffect(() => {

        
            async function getUser() {
                try {
                    const res = await fetch("http://localhost:5000/api/usuario", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(login) });
                    const user = await res.json()
                    setUsuario(user)
                } catch (e) {
                    return console.error(e)
                }
            };


            getUser()
        

    },[])




    return (
        <div className="container">
            <div className="info">
                <Card style={{ width: '100%' }}>
                    <ListGroup variant="flush">
                        <ListGroup.Item><img
                            src={require("../../../images/default_profile_pic.png")}
                            width="80"
                            height="80"
                            className="d-inline-block"
                            alt="Imagem de Perfil" /><h3>Imagem de Perfil</h3></ListGroup.Item>
                        <ListGroup.Item><h3>Nome:</h3><p>{`${usuario.primeiroNome}`}</p></ListGroup.Item>
                        <ListGroup.Item><h3>Sobrenome:</h3><p>{`${usuario.ultimoNome}`}</p></ListGroup.Item>
                        <ListGroup.Item><h3>Cédula de Enfermeiro:</h3><p>{`${usuario.cedulaPro}`}</p></ListGroup.Item>
                        <ListGroup.Item><h3>E-mail:</h3><p>{`${usuario.email}`}</p></ListGroup.Item>
                        <ListGroup.Item><h3>Nº Telefone:</h3><p>{`${usuario.telefone}`}</p></ListGroup.Item>

                    </ListGroup>
                </Card>
            </div>
            <div className="botao">
                <EditModal usuario={usuario}/>
            </div>
        </div>

    );
}

export default UsuarioPage;