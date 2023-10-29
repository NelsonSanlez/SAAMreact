import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Profile from './PerfilUsuario';

function ProfilePicModal (props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [profilePic, setProfilePic] = useState('');


    const userEdit = {
        id: props.usuario._id,
        profilePic: profilePic,

    }

    const handleSubmit = async () => {
        try {

            const edit = await fetch("http://localhost:5000/api/editUsuario", { method: "PUT", body: JSON.stringify(userEdit), headers: { "content-type": "application/json" } });
            const res = await edit.json();
            handleClose();
            return res

        }catch(e){
            console.error(e)
        }
  }



    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Editar imagem de perfil.
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Escolha a sua imagem de perfil:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                    <Profile  
                     type="file"
                                placeholder={`${props.usuario.profilePic}`}
                                onChange={(e) => setProfilePic(e.target.value)}
                                autoFocus/>

                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Escolha a sua imagem de perfil:</Form.Label>
                            <Form.Control
                                type="file"
                                placeholder={`${props.usuario.profilePic}`}
                                onChange={(e) => setProfilePic(e.target.value)}
                                autoFocus
                            />
                        </Form.Group>

                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Guardar alterações
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ProfilePicModal;