import { useState, useContext, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
// import { Button } from "react-bootstrap";
import { LoginContext } from '../../../context/LoginContext';
import EditModal from "./EditModal";
import ProfilePicModal from "./ProfilePicModal";
import './Usuario.css';



const UsuarioPage = () => {

    const { login } = useContext(LoginContext);
    const [usuario, setUsuario] = useState({});
    const [customProfPic, setCustomProfPic] = useState(true)

const UsedPorfPic = ()=>{
    if (customProfPic === true) {
        return(
            <div className='imgIniciaisUsuarioDiv'>
                {/* <img className='imgCustomUsuario' src={`https://firebasestorage.googleapis.com/v0/b/uploadingfile-746c0.appspot.com/o/saam_prof_pics%2FSanlez_Nelson-65329f8a64c1710afd2a1362%2F61DNV%2BZSd8L._AC_UF1000%2C1000_QL80_.jpgd7d319e9-5fc3-4154-b202-418069d7dbb4?alt=media&token=07d78dc9-67f4-48a8-9f73-c848547404e6&_gl=1*1u8gq1p*_ga*MzQ3NzYxMjIzLjE2OTU5NzgwNTA.*_ga_CW55HF8NVT*MTY5ODYyMzI5Ny4xMC4xLjE2OTg2MjY1NzAuNTUuMC4w`} alt="profile_pic"/> */}
                <img className='imgCustomUsuario' src={usuario.profilePic} alt="profile_pic"/>
            </div>
                )}
    return(
        <div className='imgIniciaisUsuarioDiv'>
            <img className='imgIniciaisUsuario' src={`https://ui-avatars.com/api/?size=128&rounded=true&background=random&color=random&bold=true&length=3&name=${usuario.primeiroNome}+${usuario.ultimoNome}`} alt="profile_pic"/>
        </div>
    )
}


    useEffect(() => {


        async function getUser() {
            try {
                const res = await fetch("http://localhost:5000/api/usuario", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(login) });
                const user = await res.json()
                setUsuario(user)
                console.log(user)
            } catch (e) {
                return console.error(e)
            }
        };


        getUser()


    }, [])




    return (
        <div className="container">
            <div className="info">
                <Card style={{ width: '100%' }}>
                    <ListGroup variant="flush">
                        <ListGroup.Item><UsedPorfPic/></ListGroup.Item>
                        <ListGroup.Item><h3>Imagem de Perfil</h3></ListGroup.Item>
                        <ListGroup.Item><h3>Nome:</h3><p>{`${usuario.primeiroNome}`}</p></ListGroup.Item>
                        <ListGroup.Item><h3>Sobrenome:</h3><p>{`${usuario.ultimoNome}`}</p></ListGroup.Item>
                        <ListGroup.Item><h3>Cédula de Enfermeiro:</h3><p>{`${usuario.cedulaPro}`}</p></ListGroup.Item>
                        <ListGroup.Item><h3>E-mail:</h3><p>{`${usuario.email}`}</p></ListGroup.Item>
                        <ListGroup.Item><h3>Nº Telefone:</h3><p>{`${usuario.telefone}`}</p></ListGroup.Item>

                    </ListGroup>
                </Card>
            </div>
                <div className="btnsBottomUsuario row">
                    <div className="botao col-2">
                        <EditModal usuario={usuario} />
                    </div>
                    <div className="botao col-3">
                        <ProfilePicModal usuario={usuario} />
                    </div>
                </div>
        </div>

    );
}

export default UsuarioPage;