import React from 'react';
import { useEffect, useState, useContext } from 'react';
import './InserirReceita.css'
import { LoginContext } from '../../../../context/LoginContext';
import { Navigate } from 'react-router-dom';
import {} from '../../../../images/🦆 icon _plus circle_.png'
import { Modal } from 'bootstrap/dist/js/bootstrap.bundle';

function InserirReceita(){
  const [receita, setReceita] = useState({})
  const [modal, setModal] = useState(0)



  //controle de validação de Login
  const { login } = useContext(LoginContext);
  useEffect(() => {
    if (!login.id || !login.status) {
      <Navigate to='/'/>
    }
  });

   async function addReceita(){
    try{
      const res =await fetch('http://localhost:5000/insReceitas', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(receita),
      });
     if (res.ok){
          setModal(1)
          ModalResposta()
    } else {
        console.error(`Error`);
        setModal(0) 
        ModalResposta()  
       }
return res
  } catch (err) {
    console.error(err);
  }
  setReceita({})
}
    
  function ModalResposta (){
    if (modal === 1 && <ModalResposta />){
      return(
        <div>
          <div className="modal " id="modalInsReceita" tabIndex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Receita inserida com sucesso</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body modalInsReceitaResposta">
                  <p></p>
                </div>
                <div className="modal-footer mdFooter">
                  <button type="button" className="btn btn-close" data-bs-dismiss="modal">Fechar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
  } else if (modal === 0 && <ModalResposta />){
    return(
      <div>
        <div className="modal " id="modalInsReceita" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Falha ao inserir receita</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body modalInsReceitaResposta">
                <p></p>
              </div>
              <div className="modal-footer mdFooter">
                <button type="button" className="btn btn-close" data-bs-dismiss="modal">Fechar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

  function handleAddReceita  (event)  {
    /* const {name, value} = e.target;
    setReceita({...receita, [name]: value});*/
    setReceita({ ...receita, [event.target.name]: event.target.value })
    console.log(receita) 
  }

  

  return(
    <div className='bgBabyWhite rounded-4 p-2' >
        <h5>Início {'>'} Pacientes {'>'} Inserir nova receita </h5>
        <div className='container col-sm bg-white rounded-4 py-2'>
          <h5 className='ps-5'>Inserir Nova Receita</h5>
          <div className='container col-sm bgCyan rounded-4 border-1 ps-5 py-1 flex-column' style={{display:'flex',}}>
            <div className='row'>Paciente:</div>
            <div>
            <form >
              <div style={{ display: 'flex' }}>
                <label for="nome" className="col-form-label mb-3 mt-2 col-2">Nome:</label>
                <input type="text" className="form-control my-2" name="medicamento" value={receita.medicamento} onChange={handleAddReceita} />
              </div>
              <div  style={{ display: 'flex' }}>
                <label for="nome" className="col-form-label mb-3 mt-2 col-2">Via:</label>
                <input type="text" className="form-control my-2" name="via" value={receita.via} onChange={handleAddReceita} />
              </div>
              <div  style={{ display: 'flex' }}>
                <label for="nome" className="col-form-label mb-3 mt-2 col-2">Dose:</label>
                <input type="text" className="form-control my-2" name="dose" value={receita.dose} onChange={handleAddReceita} />
              </div>
              <div  style={{ display: 'flex' }}>
                <label for="nome" className="col-form-label mb-3 mt-2 col-2">Validade:</label>
                <input type="date" className="form-control my-2" name="nome" value={receita.validade} onChange={handleAddReceita} />
              </div>
              <div  style={{ display: 'flex' }}>
                <label for="nome" className="col-form-label mb-3 mt-2 col-2">Data Início:</label>
                <input type="date" className="form-control my-2" name="dataInicio" value={receita.dataInicio} onChange={handleAddReceita} />
              </div>
              <div  style={{ display: 'flex' }}>
                <label for="nome" className="col-form-label mb-3 mt-2 col-2">Data Fim:</label>
                <input type="date" className="form-control my-2" name="dataFim" value={receita.dataFim} onChange={handleAddReceita} />
              </div>
              <div  style={{ display: 'flex' }}>
                <label for="nome" className="col-form-label mb-3 mt-2 col-2">Stock Inicial:</label>
                <input type="text" className="form-control my-2" name="stock" value={receita.stock} onChange={handleAddReceita} />
              </div>
              <div style={{ display: 'flex' }}>
                <label for="nome" className="col-form-label mb-3 mt-2 col-2">Horários:</label>
                <input type="time" className="form-control my-2" name="horarios" value={receita.horarios} onChange={handleAddReceita} />
              </div>
            </form>
            <button type='button' className='btn bg-white border-black rounded-5' onClick={()=> addReceita()} id='inserirReceita'>Inserir Receita</button>
            </div>
            <ModalResposta />
        </div>
    </div>
    </div>
  )

}

export  {InserirReceita};