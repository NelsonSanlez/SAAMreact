import React, { useState, useEffect } from "react";
import { Button, Modal, FormControl, Form } from 'react-bootstrap';
import { toast } from "react-toastify";

import "./Receitas.css";


function MaisInfo(props){
    const [showModal, setShowModal] = useState(false);
    const [labelsDisabled, setLabelsDisabled] = useState(true);
    const [medicamento, setMedicamento] = useState(props.propValue.medicamento);
    const [dose, setDose] = useState(props.propValue.dose);
    

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    const handleEdit = () => {
      
      try{
        editReceita();
      toast.info("Receita editada com sucesso");
      console.log("Receita editada");
    } catch (error) {
      toast.error("Erro ao editar receita");
    }
    
    };
    const handleDelete = () => {
      toast.error("Receita eliminada com sucesso");
      console.log("Receita eliminada");
      setShowModal(false);
    }

    //function to change all form controls
  function editReceita () {
      
        setLabelsDisabled(!labelsDisabled);
        
        
       /*  if (res.ok) {
          alert("Receita editada com sucesso"); */
       
    }

    const handleChangeMedicamento = (e) => {
      setMedicamento(e.target.value);
    };
  
    const handleChangeDose = (e) => {
      setDose(e.target.value);
    };

    // "retirar" a info das props para usar no modal
    const receita=props.propValue;
    const horarioss=props.propValue.horarios;

    
    console.log("Props:",props.propValue.horarios)
    console.log("Receita:",receita)
    console.log("Horariossss:",horarioss)
    console.log("Medicamento:",medicamento)
    console.log("Dose:",dose)

return(
  <>
  
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
              <Form.Control className="col rounded-4 me-5" type="text" value={receita.medicamento} style={{backgroundColor: '#CAF0F8'}} disabled={labelsDisabled? 'disabled' : undefined} onChange={handleChangeDose} />
            </Form.Group>
            <Form.Group className="mb-3 row" >
              <Form.Label className="col-2 px-4 " style={{ justifyContent: 'flex-end', display:'flex' }} >Dose</Form.Label>
              <Form.Control className="col rounded-4 me-5" style={{backgroundColor: '#CAF0F8'}} type="text" value={receita.dose} disabled={labelsDisabled? 'disabled' : undefined} onChange={handleChangeDose}/>
            </Form.Group>
            <Form.Group className="mb-3 row" >
              <Form.Label className="col-2 px-4 " style={{ justifyContent: 'flex-end', display:'flex' }}>Validade</Form.Label>
              <Form.Control className="col rounded-4 me-5" style={{backgroundColor: '#CAF0F8'}} type="text" value={receita.validade} disabled={labelsDisabled? 'disabled' : undefined} onChange={handleChangeDose} />
            </Form.Group>
            <Form.Group className="mb-3 row" >
              <Form.Label className="col-2 px-4 " style={{ justifyContent: 'flex-end', display:'flex' }}>Data Início</Form.Label>
              <Form.Control className="col rounded-4 me-5" style={{backgroundColor: '#CAF0F8'}} type="text" value={receita.dataInicio} disabled={labelsDisabled? 'disabled' : undefined} onChange={handleChangeDose}/>
            </Form.Group>
            <Form.Group className="mb-3 row" >
              <Form.Label className="col-2 px-4 " style={{ justifyContent: 'flex-end', display:'flex' }}>Data Fim</Form.Label>
              <Form.Control className="col rounded-4 me-5" style={{backgroundColor: '#CAF0F8'}} type="text" value={receita.dataFim} disabled={labelsDisabled? 'disabled' : undefined} onChange={handleChangeDose}/>
            </Form.Group>
            <Form.Group className="mb-3 row" >
              <Form.Label className="col-2 px-4 " style={{ justifyContent: 'flex-end', display:'flex' }}>Stock</Form.Label>
              <Form.Control className="col rounded-4 me-5" style={{backgroundColor: '#CAF0F8'}} type="number" value={receita.stock} disabled={labelsDisabled? 'disabled' : undefined} onChange={handleChangeDose}/>
            </Form.Group>
            <Form.Group className="mb-3 row" >
              <Form.Label className="col-2 px-4 " style={{ justifyContent: 'flex-end', display:'flex' }}>Horários</Form.Label>
               <div className="col ps-0">
              {horarioss.map((val, index) => (
                <div key={index}>
                  <Form.Control  className="transparent-input col rounded-0" style={{backgroundColor: '#CAF0F8'}}  type="text"  value={val.horario}  disabled={labelsDisabled? 'disabled' : undefined}  onChange={handleChangeDose}
                  />
                </div>
              ))}
              </div> 
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
  </>
  
)


}

export default MaisInfo;