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
    const horario=props.propValue.horarios;
    console.log("Props:",props.propValue.horarios)
    console.log("Receita:",receita)
    console.log("Horarios:",horario)

return(
    <div className="m-0 p-0 rounded-4" id="card_info_value">
    <div>
      <Button variant="light" className="btn-m w-100 h-100 bgCyan border-0 btn-hover-effect rounded-4" onClick={handleShow}>
        Ver receita
      </Button>

      <Modal  show={showModal} onHide={handleClose} backdrop="static" keyboard={false} size="xl">
        <Modal.Header className="bgBlue" closeButton>
        </Modal.Header>
        <Modal.Body className="bgBlue">
          <div className="container ">
          <Form>
            <Form.Group className="mb-3 row " >
              <Form.Label className="col-2 px-4 " style={{ justifyContent: 'flex-end', display:'flex' }} >Nome</Form.Label>
              <Form.Control className="col rounded-4 me-5" type="text" value={receita.medicamento} style={{backgroundColor: '#CAF0F8'}} disabled />
            </Form.Group>
            <Form.Group className="mb-3 row" >
              <Form.Label className="col-2 px-4 " style={{ justifyContent: 'flex-end', display:'flex' }} >Dose</Form.Label>
              <Form.Control className="col rounded-4 me-5" style={{backgroundColor: '#CAF0F8'}} type="text" value={receita.dose} disabled />
            </Form.Group>
            <Form.Group className="mb-3 row" >
              <Form.Label className="col-2 px-4 " style={{ justifyContent: 'flex-end', display:'flex' }}>Validade</Form.Label>
              <Form.Control className="col rounded-4 me-5" style={{backgroundColor: '#CAF0F8'}} type="text" value={receita.validade} disabled />
            </Form.Group>
            <Form.Group className="mb-3 row" >
              <Form.Label className="col-2 px-4 " style={{ justifyContent: 'flex-end', display:'flex' }}>Data Início</Form.Label>
              <Form.Control className="col rounded-4 me-5" style={{backgroundColor: '#CAF0F8'}} type="text" value={receita.dataInicio} disabled />
            </Form.Group>
            <Form.Group className="mb-3 row" >
              <Form.Label className="col-2 px-4 " style={{ justifyContent: 'flex-end', display:'flex' }}>Data Fim</Form.Label>
              <Form.Control className="col rounded-4 me-5" style={{backgroundColor: '#CAF0F8'}} type="text" value={receita.dataFim} disabled />
            </Form.Group>
            <Form.Group className="mb-3 row" >
              <Form.Label className="col-2 px-4 " style={{ justifyContent: 'flex-end', display:'flex' }}>Stock</Form.Label>
              <Form.Control className="col rounded-4 me-5" style={{backgroundColor: '#CAF0F8'}} type="number" value={receita.stock} disabled />
            </Form.Group>
            <Form.Group className="mb-3 row" >
              <Form.Label className="col-2 px-4 " style={{ justifyContent: 'flex-end', display:'flex' }}>Horários</Form.Label>
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