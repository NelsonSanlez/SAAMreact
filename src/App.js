import React, { useEffect, useContext } from 'react';
import {LoginContext} from './context/LoginContext';
import styles from './App.module.css';
import { Outlet, useNavigate } from 'react-router-dom';
import { Header } from './components/Template/Header.js';
import { SideNav } from './components/Template/SideNav.js';
import { Footer } from './components/Template/Footer.js';
import HomePage from './components/pages/home/HomePage'


function App() {
  const {login, checkLogin} = useContext(LoginContext);
  
  useEffect(() => {
    if (login === 1) {
      setTimeout(() => {
        checkLogin()
      }, 5 * 60000)
    }
  }, [login])


  if (!login.email || !login.password) {
    return (<HomePage />)

  } else {
  
    return (
      <div className="App container-fluid">
        <Header />
        <section className="row gap-5 p-3 pt-5 pb-5">
          <SideNav />
          <main className={`col-md-9 ${styles.workArea}`}>
            <Outlet />
          </main>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
