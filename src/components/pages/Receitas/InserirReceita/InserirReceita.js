import React from 'react';
import { useEffect, useState, useContext } from 'react';
import './InserirReceita.css'
import { LoginContext } from '../../../../context/LoginContext';
import { Navigate } from 'react-router-dom';
import iconPlus from '../../../../images/🦆 icon _plus circle_.png'


function InputHorarios({value,onChange,index}){ //adicionar novo input para horarios
  
  return(
    <div className='row '>
    <input type="time" className="form-control my-1 col-2" name="horarios" value={value}
    onChange={(event)=> onChange(event,index)} 
    />
    </div>
  )
}


function InserirReceita(){ 
  const [receita, setReceita] = useState({})
  const [horarios, setHorarios] = useState([{horario:"",status: ""}])
  const [modal, setModal] = useState(0)
  const [text, setText] = useState('')



  //controle de validação de Login
  const { login } = useContext(LoginContext);
  useEffect(() => {
    if (!login.id || !login.status) {
      <Navigate to='/'/>
    }
  });

  //enviar receita para backend
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
          setText('Receita inserida com sucesso')
          
    } else {
        console.error(`Error`);
        setModal(1) 
        setText('Falha ao inserir receita')
        
       }
      return res
        } catch (err) {
          console.error(err);
        }
        setReceita({})
      }
          //(teoricamente) função para mostrar modal de resposta
  function ModalResposta (){
    if(modal === 0){
      
    }
    else if (modal === 1){
      alert(text)
    restartModal() 
  } 
}

  //funçao para atualizar o estado dos horarios
  function handleAddHorarios (event,index)  { 
      const newHorarios = [...horarios ];
      newHorarios[index] = {horario: event.target.value, status: ""};
     setHorarios(newHorarios) 

    }

    //funçao para adicionar mais inputs de horarios
    const addInput =()=>{
      setHorarios([...horarios, {horario:"",status:""}]) //adiciona um novo input de horario
      
  }
 
  //função para atualizar o estado da receita quando o valor do input é alterado
  function handleAddReceita  (event,index)  {
     const {name, value} = event.target;
      if (name === 'horarios'){
        handleAddHorarios(event,index)
      }
      else{
     setReceita((receita)=>({...receita, [name]: value}))
    }
  }

    //useEffect para atualizar o estado dos horarios na receita
    useEffect(() => {
      setReceita({...receita, horarios: horarios })
      console.log('UseEffect',receita)
    }, [horarios])

    //função para reiniciar o estado do modal
  const restartModal = () => {
    setModal(0)
  }

  return(
    <div className='bgBabyWhite rounded-4 p-2' >
        <h5>Início {'>'} Pacientes {'>'} Inserir nova receita </h5>
        <div className='container col-sm bg-white rounded-4 py-2'>
          <h5 className='ps-5'>Inserir Nova Receita</h5>
          <div className='container col-sm bgCyan rounded-4 border-1 ps-5 py-1 flex-column' style={{display:'flex',}}>
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
                <input type="date" className="form-control my-2" name="validade" value={receita.validade} onChange={handleAddReceita} />
              </div>
              <div  style={{ display: 'flex' }}>
                <label for="nome" className="col-form-label mb-3 mt-2 col-2">Data Início:</label>
                <input type="date" className="form-control my-2" name="dataInicio" value={receita.dataInicio} onChange={handleAddReceita} />
              
                <label for="nome" className="col-form-label mb-3 mt-2 col-2 ps-3">Data Fim:</label>
                <input type="date" className="form-control my-2" name="dataFim" value={receita.dataFim} onChange={handleAddReceita} />
              </div>
              <div  style={{ display: 'flex' }}>
                <label for="nome" className="col-form-label mb-3 mt-2 col-2">Stock Inicial:</label>
                <input type="text" className="form-control my-2" name="stock" value={receita.stock} onChange={handleAddReceita} />
              </div>
              <div style={{ display: 'flex' }} className='HorariosExtra'>
                <label for="nome" className="col-form-label mb-3 mt-2 col-2">Horários:</label>
                <div style={{ display: 'flex', flexDirection:'column' }} >
                {horarios.map((horarios, index) => (
                  <div style={{ display: 'flex', flexDirection:'column' }} className='me-0'>
                <InputHorarios key={index} value={horarios.horario} onChange={handleAddReceita} index={index}/>
                </div>
                ))}
                </div>
                <div className='col-1 ms-3 pb-2' style={{display:'flex' , alignItems:'end', justifyContent:'start'}}>
                  <img src={iconPlus} alt='iconPlus' onClick={()=> addInput()} style={{cursor:'pointer'}}/>
              </div>
              
              </div>
            </form>
            
            <button type='button' className='btn bg-white border-black rounded-5' onClick={()=> addReceita()} id='inserirReceita'>Inserir Receita</button>
            </div>
            <div >
            {modal>0 && <ModalResposta texto={text}/>}
            </div>
        </div>
    </div>
    </div>
  )

}

export  {InserirReceita};