import logo from './logo.svg';
import './App.css';

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
                        <ul><img src="images/🦆 icon _twitter outline icon_.png"/> Twitter</ul>
                        <ul><img src="images/🦆 icon _facebook outline icon_.png"/> Facebook</ul>
                        <ul><img src="images/🦆 icon _instagram fill icon_.png"/> Instagram</ul>
                        <ul><img src="images/🦆 icon _linkedin outline_.png "/> Linkedin</ul>
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer/>
    </div>

    
  );
}



export default App;
