import RegModal from '../Regmodal';
import LogModal from '../LogModal';
import styles from './Navbar.module.css';
import Nav from 'react-bootstrap/Nav';


const Navmenu = ({handleLogin}) => {
    return (
        <header className={`container-fluid ${styles.homeHeader}`}>
        <div className="row">
            <div className="col">
                <nav className="navbar navbar-expand-sm">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/"><img
                                src={require('../../images/SAAM_SistemaAjudaAdministracaoMedicamentos.png')} alt="S.A.A.M Logo"
                                className="logo-header"/></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                            <ul className="navbar-nav gap-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Serviços</a>
                                </li>
                                <li className="nav-item">
                                <Nav.Link href="/sobrenos">Sobre Nós</Nav.Link>
                                </li>
                                <li className="nav-item">
                                <Nav.Link href="/contactos">Contactos</Nav.Link>
                                </li>
                            </ul>
                            <div className="buttons-header">
                                <LogModal handleLogin={handleLogin}/>
                                <RegModal/>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
    );
}
 
export default Navmenu;