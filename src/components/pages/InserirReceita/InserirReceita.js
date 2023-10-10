

import React, { Component } from 'react';
import './InserirReceita.css';
import iconPlus from '../../../images/🦆 icon _plus circle_.png';

class InserirReceita extends Component {
  handleClick = async () => {
    const NovaReceita = document.querySelector("#NovaReceita");
  const botaoIR = document.querySelector("#InserirReceita");
  // listening to click of button to send receita info to db
  botaoIR.addEventListener(
    "click", async(event) => {
      const nome = document.getElementById("Nome").value
      const via = document.getElementById("Via").value
      const dose = document.getElementById("Dose").value
      const validade = document.getElementById("Validade").value
      const data_início = document.getElementById("Data_início").value
      const data_fim = document.getElementById("Data_fim").value
      const stock = document.getElementById("Stock").value
  
     const horariosInputs = document.querySelectorAll('[name="Horários[]"]');
     const horários = [];
  
     horariosInputs.forEach((input) => {
      horários.push(input.value);
  });
  
      const data = {nome,via, dose, validade, data_início, data_fim, stock, horários}
      const inserido = await sendRecipe(data);
      
      if (inserido){
          const modalInsReceitaResposta = document.querySelector(`.modalInsReceitaResposta`);
              modalInsReceitaResposta.textContent = `Receita Guardada`;
          const mdFooter = document.querySelector(`.mdFooter`);
              mdFooter.innerHTML = `<button type="button" class="btn btn-darkblue rounded-pill" data-bs-dismiss="modal">Fechar</button>`
      }else{
          const modalInsReceitaResposta = document.querySelector(`.modalInsReceitaResposta`);
          modalInsReceitaResposta.textContent = `Erro ao guardar a receita, tente outra vez!`;
          const mdFooter = document.querySelector(`.mdFooter`);
              mdFooter.innerHTML = `<button type="button" class="btn btn-darkblue rounded-pill" data-bs-dismiss="modal">Fechar</button>`
      }
    }
  );
  
      // func para enviar nova receita para backend

   async function sendRecipe(data){
      const res = await fetch('http://localhost:5000/insReceitas', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
    console.log('Im in')
       if (res.ok){
           data = await res.json()
      } else {
          console.error(`Error`);
      }
  return data
  } 


      
  document.addEventListener("DOMContentLoaded", function() {
      const addInputButtons = document.querySelectorAll(".add-Input");
      const inputContainer = document.getElementById("inputContainer");
  
      addInputButtons.forEach(function(button) {
          button.addEventListener("click", addInputField);
      });
      //func para colocar mais inputs ao html para os Horários
      function addInputField() {  
          const newInputContainer = document.createElement("div");
          newInputContainer.className = "row input-container mt-2";
  
          const blankSpace = document.createElement("div");
          blankSpace.className = "col-2 me-0 ms-0 ps-0";
  
          const inputField = document.querySelector(".col-3 input").cloneNode(true);
          inputField.value = "";
  
          const newColumn = document.createElement("div");
          newColumn.className = "col-3"; 
          newColumn.appendChild(inputField);
  
          newInputContainer.appendChild(blankSpace);
          newInputContainer.appendChild(newColumn);
  
          inputContainer.appendChild(newInputContainer);
      }
  });

}
  
  ;

  render() {
    return (
      <div className="bgBabyWhite rounded-4 p-2">
        <div className="work_path">Início {'>'} Pacientes {'>'} Inserir nova receita</div>
      <div className="container col-sm bg-white rounded-4 py-2">
        <h5 className="ps-5">Inserir Nova receita</h5>
        <div
          className="container col-sm bgCyan py-1 rounded-4 border-black border-1 ps-5 d-flex flex-column justify-content-center"
        >
          <div className="row">Paciente:      </div>

          <div className="row">

            <p className="mb-3 mt-2 col-2">Nome:</p>
            <div className="col-10">
              <input
                type="text"
                className="form-control"
                id="Nome"
                name="“Nome“"
                defaultValue=""
              />
            </div>
          </div>
          <div className="row">
            <p className="mb-3 mt-2 col-2">Via:</p>
            <div className="col-10">
              <input
                type="text"
                className="form-control"
                id="Via"
                name="Via"
                defaultValue=""
              />
            </div>
          </div>
          <div className="row">
            <p className="mb-3 mt-2 col-2">Dose:</p>
            <div className="col-10">
              <input
                type="text"
                className="form-control"
                id="Dose"
                name="“Dose“"
                defaultValue=""
              />
            </div>
          </div>
          <div className="row">
            <p className="mb-3 mt-2 col-2">Validade:</p>
            <div className="col-4">
              <input
                type="date"
                className="form-control"
                id="Validade"
                name="“Validade“"
                defaultValue=""
              />
            </div>
          </div>
          <div className="row">
            <p className="mb-3 mt-2 col-2">Data Início:</p>
            <div className="col-4">
              <input
                type="date"
                className="form-control"
                id="Data_início"
                name="“DataFim“"
                defaultValue=""
              />
            </div>

            <p className="mb-3 mt-2 col-2 align-content-end">Data Fim:</p>
            <div className="col-4">
              <input
                type="date"
                className="form-control"
                id="Data_fim"
                name="“DataInício“"
                defaultValue=""
              />
            </div>
          </div>
          <div className="row">
            <p className="mb-3 mt-2 col-2">Stock inicial:</p>
            <div className="col-10">
              <input
                type="text"
                className="form-control"
                id="Stock"
                name="“Stock“"
                defaultValue=""
              />
            </div>
          </div>
          <div className="container m-0 p-0">
            <div className="row input-container">
              <div className="mb-2 mt-2 col-2">
                <label htmlFor="Horários">Horários</label>
              </div>
              <div className="col-3">
                <input
                  type="time"
                  className="form-control"
                  id="Horários"
                  name="Horários[]"
                  defaultValue=""
                />
              </div>
              <div className="ms-0 mb-0 ps-0 pt-1 col-1 justify-content-start ">
                <img src={iconPlus} id="HorarioExtra" className="add-Input" />
              </div>
              <div id="inputContainer"></div>
            </div>
          </div>
          <div className="mx-auto">
            <button
              type="button "
              data-bs-toggle="modal" data-bs-target="#modalInsReceita"
              className="btn bg-white border-black rounded-5"
              id="InserirReceita"
            >
              Inserir
            </button>
            <button type="submit" className="btn bg-white border-black rounded-5">
              Cancelar
            </button>
          </div>
          <div className="modal " id="modalInsReceita" tabIndex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title"></h5>
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
      </div>
      </div>
    );
  }
}

export  {InserirReceita};









/* import React, { Component } from 'react';
import './InserirReceita.css'
import iconPlus from  '../../../images/🦆 icon _plus circle_.png';        


function InserirReceita() {

  class MyComponent extends Component {
    handleClick = () => {
      const NovaReceita = document.querySelector("#NovaReceita");
  const botaoIR = document.querySelector("#InserirReceita");
  // listening to click of button to send receita info to db
  botaoIR.addEventListener(
    "click", async(event) => {
      const nome = document.getElementById("Nome").value
      const via = document.getElementById("Via").value
      const dose = document.getElementById("Dose").value
      const validade = document.getElementById("Validade").value
      const data_início = document.getElementById("Data_início").value
      const data_fim = document.getElementById("Data_fim").value
      const stock = document.getElementById("Stock").value
  
     const horariosInputs = document.querySelectorAll('[name="Horários[]"]');
     const horários = [];
  
     horariosInputs.forEach((input) => {
      horários.push(input.value);
  });
  
      const data = {nome,via, dose, validade, data_início, data_fim, stock, horários}
      const inserido = await sendRecipe(data);
      
      if (inserido){
          const modalInsReceitaResposta = document.querySelector(`.modalInsReceitaResposta`);
              modalInsReceitaResposta.textContent = `Receita Guardada`;
          const mdFooter = document.querySelector(`.mdFooter`);
              mdFooter.innerHTML = `<button type="button" class="btn btn-darkblue rounded-pill" data-bs-dismiss="modal">Fechar</button>`
      }else{
          const modalInsReceitaResposta = document.querySelector(`.modalInsReceitaResposta`);
          modalInsReceitaResposta.textContent = `Erro ao guardar a receita, tente outra vez!`;
          const mdFooter = document.querySelector(`.mdFooter`);
              mdFooter.innerHTML = `<button type="button" class="btn btn-darkblue rounded-pill" data-bs-dismiss="modal">Fechar</button>`
      }
    }
  );
  
      // func para enviar nova receita para backend

   async function sendRecipe(data){
      const res = await fetch('http://localhost:5000/insReceitas', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
    console.log('Im in')
       if (res.ok){
           data = await res.json()
      } else {
          console.error(`Error`);
      }
  return data
  } 


      
  document.addEventListener("DOMContentLoaded", function() {
      const addInputButtons = document.querySelectorAll(".add-Input");
      const inputContainer = document.getElementById("inputContainer");
  
      addInputButtons.forEach(function(button) {
          button.addEventListener("click", addInputField);
      });
      //func para colocar mais inputs ao html para os Horários
      function addInputField() {  
          const newInputContainer = document.createElement("div");
          newInputContainer.className = "row input-container mt-2";
  
          const blankSpace = document.createElement("div");
          blankSpace.className = "col-2 me-0 ms-0 ps-0";
  
          const inputField = document.querySelector(".col-3 input").cloneNode(true);
          inputField.value = "";
  
          const newColumn = document.createElement("div");
          newColumn.className = "col-3"; 
          newColumn.appendChild(inputField);
  
          newInputContainer.appendChild(blankSpace);
          newInputContainer.appendChild(newColumn);
  
          inputContainer.appendChild(newInputContainer);
      }
  });

      // Your logic when the button is clicked
    };
  

  

  render() { return (
    <div className=" bgBabyWhite">
      <div className="work_path">Início {'>'} Pacientes {'>'} Inserir nova receita</div>
      <div className="container col-sm bg-white rounded-4 py-2">
        <h5 className="ps-5">Inserir Nova receita</h5>
        <div
          className="container col-sm bgCyan py-2 rounded-4 border-black border-1 ps-5 d-flex flex-column justify-content-center"
        >
          <div className="row">Paciente:      </div>

          <div className="row">

            <p className="mb-3 mt-2 col-2">Nome:</p>
            <div className="col-10">
              <input
                type="text"
                className="form-control"
                id="Nome"
                name="“Nome“"
                defaultValue=""
              />
            </div>
          </div>
          <div className="row">
            <p className="mb-3 mt-2 col-2">Via:</p>
            <div className="col-10">
              <input
                type="text"
                className="form-control"
                id="Via"
                name="Via"
                defaultValue=""
              />
            </div>
          </div>
          <div className="row">
            <p className="mb-3 mt-2 col-2">Dose:</p>
            <div className="col-10">
              <input
                type="text"
                className="form-control"
                id="Dose"
                name="“Dose“"
                defaultValue=""
              />
            </div>
          </div>
          <div className="row">
            <p className="mb-3 mt-2 col-2">Validade:</p>
            <div className="col-4">
              <input
                type="date"
                className="form-control"
                id="Validade"
                name="“Validade“"
                defaultValue=""
              />
            </div>
          </div>
          <div className="row">
            <p className="mb-3 mt-2 col-2">Data Início:</p>
            <div className="col-4">
              <input
                type="date"
                className="form-control"
                id="Data_início"
                name="“DataFim“"
                defaultValue=""
              />
            </div>

            <p className="mb-3 mt-2 col-2 align-content-end">Data Fim:</p>
            <div className="col-4">
              <input
                type="date"
                className="form-control"
                id="Data_fim"
                name="“DataInício“"
                defaultValue=""
              />
            </div>
          </div>
          <div className="row">
            <p className="mb-3 mt-2 col-2">Stock inicial:</p>
            <div className="col-10">
              <input
                type="text"
                className="form-control"
                id="Stock"
                name="“Stock“"
                defaultValue=""
              />
            </div>
          </div>
          <div className="container m-0 p-0">
            <div className="row input-container">
              <div className="mb-2 mt-2 col-2">
                <label htmlFor="Horários">Horários</label>
              </div>
              <div className="col-3">
                <input
                  type="time"
                  className="form-control"
                  id="Horários"
                  name="Horários[]"
                  defaultValue=""
                />
              </div>
              <div className="ms-0 mb-0 ps-0 pt-1 col-1 justify-content-start ">
                <img src={iconPlus} id="HorarioExtra" className="add-Input" />
              </div>
              <div id="inputContainer"></div>
            </div>
          </div>
          <div className="mx-auto">
            <button
              type="button "
              data-bs-toggle="modal" data-bs-target="#modalInsReceita"
              className="btn bg-white border-black rounded-5"
              id="InserirReceita"
            >
              Inserir
            </button>
            <button type="submit" className="btn bg-white border-black rounded-5">
              Cancelar
            </button>
          </div>
          <div className="modal " id="modalInsReceita" tabIndex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title"></h5>
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
      </div>
    </div>
  )}
}
}

export { InserirReceita } */