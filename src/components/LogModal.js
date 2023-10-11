import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function LogModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const user = {
    email:email,
    password:pass
  };

  const Login = async () => {

    setShow(false);

    const sendData = await fetch("http://localhost:3000/api/login", { method: "POST", body: JSON.stringify(user), headers: { "content-type": "application/json" } });
    const response = await sendData.json();

    if(response){

    }
  }

  return (
    <>
      <Button variant="normalblue rounded-pill shadow" onClick={handleShow}>
        Entrar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="LogForm.LogEmail">
              <Form.Label>Endereço de Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={(e)=> setEmail(e.target.value)}
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="LogForm.LogPassword">
              <Form.Label>Palavra-passe</Form.Label>
              <Form.Control
                type="password"
                onChange={(e)=> setPass(e.target.value)}
                autoFocus
                required
              />
            </Form.Group>
           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary rounded-pill" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="darkblue rounded-pill" onClick={Login}>
            Entrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LogModal;