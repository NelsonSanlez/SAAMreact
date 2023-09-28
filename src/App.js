import './css/areaDeTrabalho.css';
import logo from './images/SAAM_SistemaAjudaAdministracaoMedicamentos.png';

function Header() {
  return (

    <header className="row navbarRound">
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          <img src={logo} />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link" href="#">Assistência</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contactos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Lar Bragança</a>
              </li>
            </ul>
            <div className="pe-2">
              <button className="btn btn-primary" type="submit">Logout</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}


function Main() {
  return (
    <div>
      <section className="row gap-5 p-3 pt-5 pb-5">
        <nav className="sideBar col-md-2">
          <a className="btn btn-light currentPage" href="http://127.0.0.1:5000/inicio">Início</a>
          <a className="btn btn-light" href="http://127.0.0.1:5000/areaDeTrabalho">Área de trabalho</a>
          <a className="btn btn-light" href="#">Usuário</a>
          <a className="btn btn-light" href="http://127.0.0.1:5000/listaUtentes">Pacientes</a>
          <a className="btn btn-light" href="http://127.0.0.1:5000/configuracaoAlertas">Notificações</a>
        </nav>

        <main className="col-md-9">
          <h5 className="p-1">Início</h5>
          <div className="pt-4 col-md-4">
            <button type="button" className="btn btn-light border-black" data-bs-toggle="modal"
              data-bs-target="#modalRegPaciente"><svg xmlns="http://www.w3.org/2000/svg" width="22"
                height="22" fill="currentColor" className="bi bi-person-plus" viewBox="0 0 16 16">
                <path
                  d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                <path fill-rule="evenodd"
                  d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
              </svg> Adicionar Paciente</button>
          </div>

          <div className="pt-4 col-md-4">
            <button type="button" className="btn btn-light border-black" data-bs-toggle="modal"
              data-bs-target="#modalDeletePaciente"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
              </svg> Apagar Paciente</button>
          </div>

          <div className="pt-4 col-md-4">
            <button type="button" className="btn btn-light border-black" data-bs-toggle="modal"
              data-bs-target="#modalEditPaciente"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-file-earmark-person" viewBox="0 0 16 16">
                <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z" />
              </svg> Editar Paciente</button>
          </div>
        </main>
      </section>


      {/*--Modal Insert Patients--*/}
      <div className="modal fade" id="modalRegPaciente" tabindex="-1" aria-labelledby="modalRegPaciente" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Inserir Paciente</h3>
            </div>
            <div className="modal-body modalbodyRes">
              <form>
                <div className="mb-3 col-md-auto">
                  <label for="nome" className="col-form-label">Nome</label>
                  <input type="text" className="form-control" id="nome" />
                </div>
                <div className="mb-3 col-md-auto">
                  <label for="sobrenome" className="col-form-label">Sobrenome</label>
                  <input type="text" className="form-control" id="sobrenome" />
                </div>
                <div className="mb-3 col-md-auto">
                  <label for="numUtente" className="col-form-label">N<sup>o</sup> Utente</label>
                  <input type="text" className="form-control" id="numUtente" />
                </div>
                <div className="mb-3">
                  <label for="email" className="col-form-label">Email</label>
                  <input type="text" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label for="medicamento" className="col-form-label">Medicamento</label>
                  <input type="text" className="form-control" id="medicamento" />
                </div>
                <div className="mb-3">
                  <label for="horario" className="col-form-label">Horario</label>
                  <input type="time" className="form-control" id="horario" />
                </div>
                <div className="mb-3">
                  <label for="via" className="col-form-label">Via</label>
                  <input type="text" className="form-control" id="via" />
                </div>
                <div className="mb-3">
                  <label for="dose" className="col-form-label">Dose</label>
                  <input type="text" className="form-control" id="dose" />
                </div>
              </form>
            </div>
            <div className="modal-footer modalfooterRes">
              <button type="button" className="btn btn-primary rounded-pill" id="registarForm">Registar</button>
            </div>
          </div>
        </div>
      </div>

      {/*--Modal Delete Patients*/}
      <div className="modal fade" id="modalDeletePaciente" tabindex="-1" aria-labelledby="modalDeletePaciente" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Procurar Paciente</h3>
            </div>
            <div className="modal-body modalbodyDel">
              <form>
                <div className="mb-3 col-md-auto">
                  <label for="deleteUtente" className="col-form-label">N<sup>o</sup> Utente</label>
                  <input type="search" className="form-control" id="deleteUtente" />
                </div>

              </form>
            </div>
            <div className="modal-footer modalfooterDel">
              <button type="button" className="btn btn-primary rounded-pill" id="deleteForm">Delete</button>
            </div>
          </div>
        </div>
      </div>

      {/*Modal edit paciente*/}
      <div className="modal fade" id="modalEditPaciente" tabindex="-1" aria-labelledby="modalEditPaciente" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Editar Paciente</h3>
            </div>
            <div className="modal-body modalbodyEdit">
              <form>
                <div className="mb-3 col-md-auto">
                  <label for="nomeEdit" className="col-form-label">Nome do paciente a editar</label>
                  <input type="text" className="form-control" id="nomeEdit" />
                </div>
                <div className="mb-3 col-md-auto">
                  <label for="numUtenteEdit" className="col-form-label">N<sup>o</sup> Utente a editar</label>
                  <input type="text" className="form-control" id="numUtenteEdit" />
                </div>
                <div className="mb-3 col-md-auto">
                  <label for="nome" className="col-form-label">Nome</label>
                  <input type="text" className="form-control" id="novoNome" />
                </div>
                <div className="mb-3 col-md-auto">
                  <label for="sobrenome" className="col-form-label">Sobrenome</label>
                  <input type="text" className="form-control" id="novoSobrenome" />
                </div>
                <div className="mb-3 col-md-auto">
                  <label for="numUtente" className="col-form-label">N<sup>o</sup> Utente</label>
                  <input type="text" className="form-control" id="novoNumUtente" />
                </div>
                <div className="mb-3">
                  <label for="email" className="col-form-label">Email</label>
                  <input type="text" className="form-control" id="novoEmail" />
                </div>
                <div className="mb-3">
                  <label for="medicamento" className="col-form-label">Medicamento</label>
                  <input type="text" className="form-control" id="novoMedicamento" />
                </div>
                <div className="mb-3">
                  <label for="horario" className="col-form-label">Horario</label>
                  <input type="time" className="form-control" id="novoHorario" />
                </div>
                <div className="mb-3">
                  <label for="via" className="col-form-label">Via</label>
                  <input type="text" className="form-control" id="novaVia" />
                </div>
                <div className="mb-3">
                  <label for="dose" className="col-form-label">Dose</label>
                  <input type="text" className="form-control" id="novaDose" />
                </div>
              </form>
            </div>
            <div className="modal-footer modalfooterEdit">
              <button type="button" className="btn btn-primary rounded-pill" id="registarEditForm">Editar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App container-fluid">
      {Header()}
      {Main()}
    </div>
  );
}

export default App;
