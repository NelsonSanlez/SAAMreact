import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import { Outlet, useNavigate } from 'react-router-dom';
import { Header } from './components/Template/Header.js';
import { SideNav } from './components/Template/SideNav.js';
import { Footer } from './components/Template/Footer.js';
import HomePage from './components/pages/home/HomePage'


function App() {
  const [login, setLogin] = useState(0);
  const navigate = useNavigate();
  
  const handleLogin = (value) => {
    setLogin(value)
  }

  useEffect(() => {
    if (login === 1) {
      setTimeout(() => {
        setLogin(0)
      }, 5 * 60000)
    }
  }, [login])


  if (login === 0) {
    return (<HomePage handleLogin={handleLogin} />)

  } else {
  
    return (
      <div className="App container-fluid">
        <Header handleLogin={handleLogin}/>
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
