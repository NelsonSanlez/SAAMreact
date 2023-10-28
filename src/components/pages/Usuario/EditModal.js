import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function EditModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [pnome, setPnome] = useState('');
    const [ultNome, setUltNome] = useState('');
    const [cedPro, setCedPro] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');

    const userEdit = {
        id: props.usuario._id,
        primeiroNome: pnome,
        ultimoNome: ultNome,
        cedulaPro: cedPro,
        email: email,
        telefone: tel
    }

    const handleSubmit = async () => {
        try {

            const edit = await fetch("http://localhost:5000/api/editUsuario", { method: "POST", body: JSON.stringify(userEdit), headers: { "content-type": "application/json" } });
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
                Editar perfil
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Perfil</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nome:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={`${props.usuario.primeiroNome}`}
                                onChange={(e) => setPnome(e.target.value)}
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Último nome:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={`${props.usuario.ultimoNome}`}
                                onChange={(e) => setUltNome(e.target.value)}
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Cédula de Enfermeiro</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder={`${props.usuario.cedulaPro}`}
                                onChange={(e) => setCedPro(e.target.value)}
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder={`${props.usuario.email}`}
                                onChange={(e) => setEmail(e.target.value)}
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nº Telefone</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder={`${props.usuario.telefone}`}
                                onChange={(e) => setTel(e.target.value)}
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

export default EditModal;