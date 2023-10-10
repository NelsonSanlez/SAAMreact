
import React from 'react'
import { useParams } from 'react-router-dom'
import './Receitas.css'

async function Receitas() {

/*     const {id}=useParams()
    console.log(id)




    function  showData() {
        
        const url = `http://localhost:5000/receitas`;
        fetch(url).then((response) => {
          return response
            .json()
            .then((data) => {
              for (const key in data) {
                if (key == "Horários") {
                  const HorarioContainer = document.getElementById("HorarioContainer");
                  HorarioContainer.innerHTML="";
                  data[key].forEach((element) => {
                    const input =document.createElement("input");
                    input.value=element;
                    input.disabled=true;
                    input.readOnly=true;
                    input.className = "form-control border-top-0 border-bottom-0"
                    HorarioContainer.append(input)
                  });
                } else {
                  const lista = document.getElementById(key);
                  lista.setAttribute("value", data[key]);
                }
              }
            })
            .catch((error) => {
              console.error("Erro ao carregar receitas");
            });
        });
      }
      
      const botao = document.querySelector("#botao");
      // listening to click of button to retrieve info
      botao.addEventListener(
        "click",
        (event) => {
          showData(receita);  // 2nj7-y9pg SongbirdPMD
        }
        
      ); */

     /*  urlQueryName = new URLSearchParams(window.location.search)
      const selectedName = urlQueryName.get('name')
      console.log(selectedName)
      
      function selectPatient(selectedName) {
          const selectedPatient = document.querySelector("#selected_patiente")
          const htmlCode = 
          `<div class="work_path">Pacientes/${selectedName }/Receitas</div>`;
      
      const containerHtml = document.createElement("div");
      containerHtml.innerHTML = htmlCode;
      
      selectedPatient.appendChild(containerHtml);
      }
      
      const selectedPatient = selectPatient(selectedName); */

    return(
    
    
        <div>

        <div className="row row_medicine_cards">

            <div className="card row card-receitas col-lg col-md-4 col-sm-12 col-12">
                <div className="row">
                    <div className="col">Nome</div>
                    <div className="col" id="card_medicine_value">BRUFEN</div>
                </div>
                <div className="row">
                    <div className="col">Dose</div>
                    <div className="col" id="card_dose_value">1 comprimido</div>
                </div>
                <div className="row">
                    <div className="col">Horários</div>
                    <div className="col" id="card_schedule_value">15:00</div>
                </div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col" id="card_info_value">Mais informações</div>
                </div>
            </div>

            <div className="card row card-receitas col-lg col-md-4 col-sm-12 col-12">
                <div className="row">
                    <div className="col">Nome</div>
                    <div className="col" id="card_medicine_value">OTEZLA</div>
                </div>
                <div className="row">
                    <div className="col">Dose</div>
                    <div className="col" id="card_dose_value">1 comprimido</div>
                </div>
                <div className="row">
                    <div className="col">Horários</div>
                    <div className="col" id="card_schedule_value">17:45</div>
                </div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col" id="card_info_value">Mais informações</div>
                </div>
            </div>

        </div>




        <div className="row row_medicine_cards">
            <div className="card row card-receitas col-lg col-md-4 col-sm-12 col-12">
                <div className="row">
                    <div className="col">Nome</div>
                    <div className="col" id="card_medicine_value">ARANESP</div>
                </div>
                <div className="row">
                    <div className="col">Dose</div>
                    <div className="col" id="card_dose_value">2 comprimidos</div>
                </div>
                <div className="row">
                    <div className="col">Horários</div>
                    <div className="col" id="card_schedule_value">20:30</div>
                </div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col" id="card_info_value">Mais informações</div>
                </div>
            </div>

            <div className="card row card-receitas col-lg col-md-4 col-sm-12 col-12">
                <div className="row">
                    <div className="col">Nome</div>
                    <div className="col" id="card_medicine_value">VIDAZA</div>
                </div>
                <div className="row">
                    <div className="col">Dose</div>
                    <div className="col" id="card_dose_value">1 comprimido</div>
                </div>
                <div className="row">
                    <div className="col">Horários</div>
                    <div className="col" id="card_schedule_value">11:00</div>
                </div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col" id="card_info_value">Mais informações</div>
                </div>
            </div>
        </div>








        {/*  BTN para  ver mais informação*/}
            <button type="button" className="btn btn-light " data-bs-toggle="modal" id="botao"  data-bs-target="#staticBackdrop">
            Mais info
            </button>

            {/* Informação da receita */}
            <div className="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content bgCyan ">
                <div className="modal-header ">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body ">
                
                    <div className="row ">
                    <p className="mb-3 mt-2 col-1">Nome</p>
                    <div className="col-10"> <input type="text" className="form-control rounded-5 " id="Nome" name="Nome" value="Por aqui os valores" aria-label="Disabled input example" disabled readOnly /> </div>
                    </div>
                    <div className="row">
                    <p className="mb-3 mt-2 col-1">Dose</p>
                    <div className="col-10"> <input type="text" className="form-control rounded-5" id="Dose" name="Dose" value="Por aqui os valores" aria-label="Disabled input example" disabled readOnly/> </div>
                    </div>
                    <div className="row">
                    <p className="mb-3 mt-2 col-1">Via</p>
                    <div className="col-10"> <input type="text" className="form-control rounded-5" id="Via" name="Via" value="Por aqui os valores" aria-label="Disabled input example" disabled readOnly/> </div>
                    </div>
                    <div className="row">
                    <p className="mb-4 mt-2 col-1">Horários</p>
                    <div className="col-10" id="HorarioContainer"> <input type="text" className="form-control rounded-5"  id="Horários" name="Horários"  value="Por aqui os valores" aria-label="Disabled input example" disabled readOnly/> </div>
                    </div> 

                    <div className="row mt-3">
                    <p className="mb-3 mt-2 col-1">Validade</p>
                    <div className="col-10"> <input type="text" className="form-control rounded-5" id="Validade" name="Validade" value="Por aqui os valores" aria-label="Disabled input example" disabled readOnly/> </div>
                    </div>
                    <div className="row">
                    <p className="mb-3 mt-2 col-1">Data Fim</p>
                    <div className="col-10"> <input type="text" className="form-control rounded-5" id="Data_fim" name="DataFim" value="Por aqui os valores" aria-label="Disabled input example" disabled readOnly/> </div>
                    </div>
                    <div className="row">
                    <p className="mb-3 mt-2 col-1 pe-0">Data Início</p>
                    <div className="col-10"> <input type="text" className="form-control rounded-5" id="Data_início" name="DataInício" value="Por aqui os valores" aria-label="Disabled input example" disabled readOnly/> </div>
                    </div>
                    <div className="row">
                    <p className="mb-3 mt-2 col-1">Stock</p>
                    <div className="col-10"> <input type="text" className="form-control rounded-5" id="Stock" name="Stock" value="Por aqui os valores" aria-label="Disabled input example" disabled readOnly/> </div>
                    </div>
                </div>
            </div>
            </div>
        </div>

    </div>

    
       

    )
}

export {Receitas}