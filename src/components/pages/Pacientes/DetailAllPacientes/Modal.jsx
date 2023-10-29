
        import React, { useState } from 'react';
        import SAAM_SistemaAjudaAdministracaoMedicamentos from '../../../../images/SAAM_SistemaAjudaAdministracaoMedicamentos.png'
        import { Pacientes,pacientes } from '../Pacientes';
        import {Card,CardBody,CardFooter,CardHeader} from 'react-bootstrap';
import { CardPaciente } from '../Perfil/CardPaciente';
import './Modal.css'

let pacienteNotFound = 'Nº de Paciente não encontrado.'

        const Modal = ({ open, onClose }) => {
          const [inputName, setInputName] = useState('');
          const [inputNum, setInputNum] = useState('');
          const [filteredPatients, setFilteredPatients] = useState([]);
          const [found, setFound] = useState()
        
          const filterByName = () => {
            const lowCaseInputName=inputName.toLowerCase()
            const pesquisa = pacientes.filter((paciente) => paciente.nome.toLowerCase().includes(lowCaseInputName));
            setFilteredPatients(pesquisa);
            if (pesquisa.length===0) {
                setFound(false)
                console.log("Name not found");
            } else{setFound(true)}
          }
          const filterByNum = () => {
            const pesquisa = pacientes.filter((paciente) => paciente.numUtente === inputNum);
            setFilteredPatients(pesquisa);
            if (pesquisa.length===0) {
                setFound(false)
                console.log("Number not found");
            } else{setFound(true)}
          }

          if (!open) {
            return null;
          }
        
          return (
            <div onClick={onClose} className='overlay'>
              <div onClick={(e) => { e.stopPropagation() }} className='modalContainer '>
                <img src={SAAM_SistemaAjudaAdministracaoMedicamentos} alt="imagem" />
                <div className="modalRig">
                  <p onClick={() => { onClose(); setInputName(''); setInputNum(''); }} className="closeBtn">CLOSE X</p>
                  <div className="contentModal row">

                  {found ? <div className='fNotFText'>Resultado da Pesquisa:</div> : <div className='fNotFText'>Sem Resultados.</div>}

                    {filteredPatients.map((paciente) => (
                      <div className="cardPacienteDiv col-lg-6 col-md-12 col-sm-12">
                        <CardPaciente nome={paciente.nome} pacienteNum={paciente.numUtente} pacienteEmail={paciente.email} pacienteTelemovel={paciente.telemovel} pacienteNbrMensagens={paciente.mensagens?.length}/>
                      </div>
                    ))}

                  </div>
                  <div className="btnContainer">

                    <input className='inputName' type='text'
                      onChange={(e) => setInputName(e.target.value)} />
                    <button type='submit' onClick={filterByName} className='btnPrimary btnPorNome'>Filtrar por
                      <span className='bold'>: NOME</span>
                    </button>

                    <input className='inputNum' type='number'
                      onChange={(e) => setInputNum(e.target.value)} />
                    <button onClick={filterByNum} className='btnPrimary btnPorNum'>Filtrar por
                      <span className='bold'>: Nº</span>
                    </button>

                    <button className='inputTemMsg'>
                    <input type="checkbox" id="inputTemMsg" name="inputTemMsg" value="valorinputTemMsg"></input>
                    <label for="inputTemMsg">Mensagens</label>
                    </button>

                    

                    
                  </div>
                </div>
              </div>
            </div>
          )
        }
        
        
        export {Modal}