import './css/areaDeTrabalho.module.css';

import {Header} from './components/Header.js';
import {Footer} from './components/Footer.js';
import {MainContent} from './components/MainContent';

function App() {
  return (
    <div className="App container-fluid">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
