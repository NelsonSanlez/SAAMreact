import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import styles from './navbar/Navbar.module.css';
import Collapse from 'react-bootstrap/Collapse';


function RegModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [pname, setPname] = useState('');
  const [uname, setUname] = useState('');
  const [ename, setEname] = useState('');
  const [email, setEmail] = useState('');
  const [nif, setNif] = useState('');
  const [pass, setPass] = useState('');
  const [cpass, setCpass] = useState('');



  const handlePname = (event) => {
    setPname(event.target.value);
  };

  const handleUname = (event) => {
    setUname(event.target.value);
  };

  const handleEname = (event) => {
    setEname(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleNif = (event) => {
    setNif(event.target.value);
  };

  const handlePass = (event) => {
    setPass(event.target.value);
  };

  const handleCpass = (event) => {
    setCpass(event.target.value);
  };

  const [open, setOpen] = useState(false);



  const data = {
    primeiroNome: pname,
    ultimoNome: uname,
    nomeEntidade: ename,
    email: email,
    nif: nif,
    password: pass,
    status: "admin"
  };


  const sendData = async () => {



    if (pass === cpass) {
      
      setShow(false); 
      setOpen(false);

      try {

        const res = await fetch("http://localhost:5000/api/registo", { method: "POST", body: JSON.stringify(data), headers: { "content-type": "application/json" } });
       
        
        if (res.ok) {
          
          return (
            <div
              className="modal show"
              style={{ display: 'block', position: 'initial' }}
            >
              <Modal.Dialog>
                <Modal.Header closeButton>
                  <Modal.Title>Bem vindo!</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <p>Registo efetuado com sucesso.</p>
                </Modal.Body>

                <Modal.Footer>
                  <Button variant="secondary">Fechar</Button>
                </Modal.Footer>
              </Modal.Dialog>
            </div>
          );
        } else {
          throw new Error(`Erro ao efetuar registo. Por favor tente novamente`)
        }
      } catch (error) {
        console.error(error)
      };
    } else {
      setOpen(true);
    }
  }



  return (
    <>
      <Button variant="rounded-pill shadow" className={styles.darkblue} onClick={handleShow}>
        Registar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Formulário de Registo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="RegForm.PriNome">
              <Form.Label>Primeiro Nome</Form.Label>
              <Form.Control
                type="text"
                value={pname}
                onChange={handlePname}
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="RegForm.UltNome">
              <Form.Label>Último Nome</Form.Label>
              <Form.Control
                type="text"
                value={uname}
                onChange={handleUname}
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="RegForm.EntNome">
              <Form.Label>Nome da Entidade</Form.Label>
              <Form.Control
                type="text"
                value={ename}
                onChange={handleEname}
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="RegForm.Email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={handleEmail}
                placeholder="nome@exemplo.com"
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="RegForm.Nif">
              <Form.Label>NIF da Entidade</Form.Label>
              <Form.Control
                type="number"
                value={nif}
                onChange={handleNif}
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="RegForm.Password">
              <Form.Label>Palavra-passe</Form.Label>
              <Form.Control
                type="password"
                value={pass}
                onChange={handlePass}
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="RegForm.ConfPassword">
              <Form.Label>Confirmar Palavra-passe</Form.Label>
              <Form.Control
                type="password"
                value={cpass}
                onChange={handleCpass}
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
          <Button variant="darkblue rounded-pill" onClick={sendData} aria-controls="example-collapse-text"
            aria-expanded={open}>
            Registar
          </Button>

          <Collapse in={open}>
            <div id="example-collapse-text" variant="danger">
              <p style={{ color: "red" }} >

                Palavras-passe não correspondem. Por favor verifique que são iguais.
              </p>
            </div>
          </Collapse>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RegModal;