import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Template/Header.js';
import { SideNav } from './components/Template/SideNav.js';
import { Footer } from './components/Template/Footer.js';
import {Rotas} from './Routes'



function App() {
  return (
      <div className="App container-fluid">
        <Header />
        <section className="row gap-5 p-3 pt-5 pb-5">
          <SideNav />
          <main className="col-md-9">
            <Rotas />
          </main>
        </section>

        <Footer />
      </div>
  );
}

export default App;
