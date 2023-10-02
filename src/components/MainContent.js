import '../css/MainContent.css';
import { Inicio } from './Inicio';
import {InserirReceita} from './InserirReceita'

function MainSection({children}){
  return(
    <main className="col-md-9">
      {children}
    </main>
  )
}


function MainContent() {
    return (
      <div>
        <section className="row gap-5 p-3 pt-5 pb-5">
          <nav className="sideBar col-md-2">
            <a className="btn btn-light currentPage" href="http://127.0.0.1:5000/inicio">Início</a>
            <a className="btn btn-light" href="http://127.0.0.1:5000/areaDeTrabalho">Área de trabalho</a>
            <a className="btn btn-light" href="#">Usuário</a>
            <a className="btn btn-light" href="http://127.0.0.1:5000/listaUtentes">Pacientes</a>
            <a className="btn btn-light" href="http://127.0.0.1:5000/configuracaoAlertas">Notificações</a>
          </nav>
  
          <MainSection>
             {/* <Inicio/>  */}
            <InserirReceita/>
          </MainSection>

         
        </section>
  
  
        
      </div>
    )
}

export {MainContent};