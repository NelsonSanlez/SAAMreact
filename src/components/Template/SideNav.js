import { NavLink } from 'react-router-dom';
import './SideNav.css';


function SideNav() {
    return (  
          <nav className={`sideBar col-md-2`}>
            <NavLink className="btn btn-light"  to='/inicio'> Início</NavLink>
            <NavLink className="btn btn-light"  to='/areaDeTrabalho'> Área de trabalho</NavLink>
            <NavLink className="btn btn-light"  to='/usuario'> Usuário</NavLink>
            <NavLink className="btn btn-light"  to='/pacientes'> Pacientes</NavLink>
            <NavLink className="btn btn-light"  to='/notificacoes'> Notificações</NavLink>
          </nav>
    )
}

export {SideNav}