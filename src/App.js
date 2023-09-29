import './css/areaDeTrabalho.module.css';

import {Header} from './components/Header.js';
import {Footer} from './components/Footer.js';
import {MainInicio} from './components/MainInicio';

function App() {
  return (
    <div className="App container-fluid">
      <Header />
      <MainInicio />
      <Footer />
    </div>
  );
}

export default App;
