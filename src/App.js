import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Rotas from './Routes'
import { Header } from './components/Template/Header.js';
import { SideNav } from './components/Template/SideNav.js';
import { Footer } from './components/Template/Footer.js';



function App() {
  return (
    <BrowserRouter>
      <div className="App container-fluid">
        <Header />
        <section className="row gap-5 p-3 pt-5 pb-5">
          <SideNav />
          <main class="col-md-9">
            <Rotas />
          </main>
        </section>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
