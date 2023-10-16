import { Link } from 'react-router-dom';
import logo from '../../images/SAAM_SistemaAjudaAdministracaoMedicamentos.png';
import styles from './Header.module.css'


function Header() {

    return (
  
      <header className={`row ${styles.navbarRound}`}>
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
              <div className="pe-3">
                <Link className="btn btn-primary" to='/'>Logout</Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    )
}

export {Header};