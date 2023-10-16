import React, { useState, useEffect } from "react";
import { Button, Modal, FormControl, Form } from 'react-bootstrap';
import "./Receitas.css";


function MaisInfo(props){
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    const handleEdit = () => setShowModal(false);
    const handleDelete = () => setShowModal(false);

    // link (get) -> passagem de parametros, é necessário usar userparams para os receber
    // pode usar action ou load para fazer o pedido

    // chegamos por loader ao carregar a pagina a primeira vez
    // se vier por post vem relacionado com o action

    // "retirar" a info das props para usar no modal
    const receita=props.propValue;
    //const horarios=props.propValue.Horarios;
    console.log(receita)
    //console.log(horarios)

return(
    <div className="m-0 p-0 " id="card_info_value">
    <div>
      <Button variant="light" className="btn-m w-100 h-100 bgCyan border-0 btn-hover-effect rounded-4" onClick={handleShow}>
        Ver receita
      </Button>

      <Modal  show={showModal} onHide={handleClose} backdrop="static" keyboard={false} size="xl">
        <Modal.Header className="bgBlue" closeButton>
        </Modal.Header>
        <Modal.Body className="bgBlue">
          <div className="container">
          <Form>
            <Form.Group className="mb-3 row" >
              <Form.Label className="col-1 pt-2">Nome</Form.Label>
              <Form.Control className="col rounded-4 " type="text" value={receita.Nome} style={{backgroundColor: '#CAF0F8'}} disabled />
            </Form.Group>
            <Form.Group className="mb-3 row" >
              <Form.Label className="col-1 pt-2">Dose</Form.Label>
              <Form.Control className="col rounded-4" style={{backgroundColor: '#CAF0F8'}} type="text" value={receita.Dose} disabled />
            </Form.Group>
            <Form.Group className="mb-3 row" >
              <Form.Label className="col-1 pt-2">Validade</Form.Label>
              <Form.Control className="col rounded-4" style={{backgroundColor: '#CAF0F8'}} type="text" value={receita.Validade} disabled />
            </Form.Group>
            <Form.Group className="mb-3 row" >
              <Form.Label className="col-1 pt-2">Data Início</Form.Label>
              <Form.Control className="col rounded-4" style={{backgroundColor: '#CAF0F8'}} type="text" value={receita.Data_início} disabled />
            </Form.Group>
            <Form.Group className="mb-3 row" >
              <Form.Label className="col-1 pt-2">Data Fim</Form.Label>
              <Form.Control className="col rounded-4" style={{backgroundColor: '#CAF0F8'}} type="text" value={receita.Data_fim} disabled />
            </Form.Group>
            <Form.Group className="mb-3 row" >
              <Form.Label className="col-1 pt-2">Stock</Form.Label>
              <Form.Control className="col rounded-4" style={{backgroundColor: '#CAF0F8'}} type="number" value={receita.Stock} disabled />
            </Form.Group>
            <Form.Group className="mb-3 row" >
              <Form.Label className="col-1 pt-2">Horários</Form.Label>
              {/* <div className="col ps-0">
              {horarios.map((horario, index) => (
                <div key={index}>
                  <Form.Control  className="transparent-input col rounded-0" style={{backgroundColor: '#CAF0F8'}}  type="text"  value={horario}  disabled      readOnly
                  />
                </div>
              ))}
              </div> */}
            </Form.Group>
          </Form>
          </div>  
        </Modal.Body>
        <Modal.Footer className="bgBlue justify-content-center">
          <Button variant="light" className="rounded-4 bgCyan border-0" onClick={handleEdit}>Editar</Button>
          <Button variant="danger" className="rounded-4  border-0" onClick={handleDelete}>Eliminar</Button>
          
        </Modal.Footer>
      </Modal>
    </div>

        

</div>
)


}

export default MaisInfo;