

function InserirReceita() {
  return (
    <div>
      <div className="work_path">Início {'>'} Pacientes {'>'} Inserir nova receita</div>
      <div className="container col-sm bg-white rounded-4 py-2">
        <h5 className="ps-5">Inserir Nova receita</h5>
        <div
          className="container col-sm bgCyan py-2 rounded-4 border-black border-1 ps-5 d-flex flex-column justify-content-center"
        >
          <div className="row">Paciente:      José Correia</div>

          <div className="row">

            <p className="mb-3 mt-2 col-2">Nome:</p>
            <div className="col-10">
              <input
                type="text"
                className="form-control"
                id="Nome"
                name="“Nome“"
                value=""
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
                value=""
              />
            </div>
          </div>
          <div className="row">
            <p className="mb-3 mt-2 col-2">Validade:</p>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                id="Validade"
                name="“Validade“"
                value=""
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
                value=""
              />
            </div>

            <p className="mb-3 mt-2 col-2 align-content-end">Data Fim:</p>
            <div className="col-4">
              <input
                type="date"
                className="form-control"
                id="Data_fim"
                name="“DataInício“"
                value=""
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
                value=""
              />
            </div>
          </div>
          <div className="container m-0 p-0">
            <div className="row input-container">
              <div className="mb-2 mt-2 col-2">
                <label for="Horários">Horários</label>
              </div>
              <div className="col-3">
                <input
                  type="time"
                  className="form-control"
                  id="Horários"
                  name="Horários[]"
                  value=""
                />
              </div>
              <div className="ms-0 mb-0 ps-0 pt-1 col-1 justify-content-start ">
                <img src="images/🦆 icon _plus circle_.png" id="HorarioExtra" className="add-Input" />
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
          <div className="modal " id="modalInsReceita" tabindex="-1">
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
  )
}

export { InserirReceita }