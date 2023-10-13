import React, { useState, useEffect } from "react";
import { Button, Modal, FormControl, Form } from 'react-bootstrap';
import "./Receitas.css";


function MaisInfo(props){
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);




return(
    <div id="card_info_value">
    <div>
      <Button variant="light" onClick={handleShow}>
        Ver receita
      </Button>

      <Modal show={showModal} onHide={handleClose} backdrop="static" keyboard={false} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Receita</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" value="Por aqui os valores" disabled />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Dose</Form.Label>
              <Form.Control type="text" value="Por aqui os valores" disabled />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>Editar</Button>
          <Button variant="light">Eliminar</Button>
        </Modal.Footer>
      </Modal>
    </div>

        {/* <div class="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content bgCyan ">
            <div class="modal-header ">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body ">
            
                <div class="row ">
                <p class="mb-3 mt-2 col-1">Nome</p>
                <div class="col-10"> <input type="text" class="form-control rounded-5 " id="Nome" name="Nome" value="Por aqui os valores" aria-label="Disabled input example" disabled readonly /> </div>
                </div>
                <div class="row">
                <p class="mb-3 mt-2 col-1">Dose</p>
                <div class="col-10"> <input type="text" class="form-control rounded-5" id="Dose" name="Dose" value="Por aqui os valores" aria-label="Disabled input example" disabled readonly/> </div>
                </div>
                <div class="row">
                <p class="mb-4 mt-2 col-1">Horários</p>
                <div class="col-10" id="HorarioContainer"> <input type="text" class="form-control rounded-5"  id="Horários" name="Horários"  value="Por aqui os valores" aria-label="Disabled input example" disabled readonly/> </div>
                </div> 

                <div class="row mt-3">
                <p class="mb-3 mt-2 col-1">Validade</p>
                <div class="col-10"> <input type="text" class="form-control rounded-5" id="Validade" name="Validade" value="Por aqui os valores" aria-label="Disabled input example" disabled readonly/> </div>
                </div>
                <div class="row">
                <p class="mb-3 mt-2 col-1">Data Fim</p>
                <div class="col-10"> <input type="text" class="form-control rounded-5" id="Data_fim" name="DataFim" value="Por aqui os valores" aria-label="Disabled input example" disabled readonly/> </div>
                </div>
                <div class="row">
                <p class="mb-3 mt-2 col-1 pe-0">Data Início</p>
                <div class="col-10"> <input type="text" class="form-control rounded-5" id="Data_início" name="DataInicio" value="Por aqui os valores" aria-label="Disabled input example" disabled readonly/> </div>
                </div>
                <div class="row">
                <p class="mb-3 mt-2 col-1">Stock</p>
                <div class="col-10"> <input type="text" class="form-control rounded-5" id="Stock" name="Stock" value="Por aqui os valores" aria-label="Disabled input example" disabled readonly/> </div>
                </div>
                
            
            </div>
            <div class="modal-footer mx-auto mb-3">
                <button type="button" class="btn  bg-white border-black rounded-5 " data-bs-dismiss="modal">Editar</button>
                <button type="button" class="btn  bg-white border-black rounded-5">Eliminar</button>
            </div>
            </div>
        </div>
        </div> */}

</div>
)


}

export default MaisInfo;