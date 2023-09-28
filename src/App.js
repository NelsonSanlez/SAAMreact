import './css/areaDeTrabalho.css';
import logo from './images/SAAM_SistemaAjudaAdministracaoMedicamentos.png';
import iconTwitter from './images/twitter_outline_icon.png';
import iconInstagram from './images/instagram_fill_icon.png';
import iconFacebook from './images/facebook_outline_icon.png';
import iconLinkedin from './images/linkedin_outline.png';


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

function Footer(){


  return(

    <div className="row">
            <div className="SAAM_footer">
                S.A.A.M
            </div>
            <footer className="footerFont pt-5">
                <div className="row text-center">
                    <div className="col-md-4">
                        <ul>About us</ul>
                        <ul>Our services</ul>
                        <ul>Contact us</ul>
                        <ul>Legal info</ul>
                    </div>

                    <div className="col-md-4">
                        <ul><img src={iconTwitter}/> Twitter</ul>
                        <ul><img src={iconFacebook}/> Facebook</ul>
                        <ul><img src={iconInstagram}/> Instagram</ul>
                        <ul><img src={iconLinkedin}/> Linkedin</ul>
                    </div>

                    <div className="col-md-4">
                        <ul>S.A.A.M</ul>
                        <ul>N 207, Z.I. das Flores,</ul>
                        <ul>Oliveira de Azemeis</ul>
                        <ul>4949-494 Whatever</ul>
                        <ul>Portugal</ul>
                    </div>
                </div>
            </footer>
        </div>
  )
}

function App() {
  return (
    <div className="App">
      {header()}




      {Footer()}
    </div>

    
  );
}



export default App;
