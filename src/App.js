import './css/areaDeTrabalho.css';
import logo from './images/SAAM_SistemaAjudaAdministracaoMedicamentos.png';

function header() {
  return (
    <div className='container-fluid'>
      <header className="row navbarRound">
        <nav className="navbar navbar-expand-md">
          <div className="container-fluid">
          <img src={logo}/>
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
    </div>
  )
}


function App() {
  return (
    <div className="App">
      {header()}
    </div>
  );
}

export default App;
