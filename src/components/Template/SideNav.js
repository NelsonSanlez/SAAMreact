import { NavLink } from 'react-router-dom';
import './SideNav.css';
import { useContext } from 'react';
import { LoginContext } from '../../context/LoginContext'

function SideNav() {

  const { login } = useContext(LoginContext);


  return (
    <nav className={`sideBar col-md-2`}>
      <NavLink className="btn btn-light" to='/inicio'> Início</NavLink>
      <NavLink className="btn btn-light" to='/areaDeTrabalho'> Área de trabalho</NavLink>
      <NavLink className="btn btn-light" to='/usuario'> Usuário</NavLink>
      <NavLink className="btn btn-light" to='/pacientes'> Pacientes</NavLink>
      {(login.status === "admin") ? <NavLink className="btn btn-light" to='/notificacoes'> Notificações</NavLink>
        :
        <div></div>
      }
    </nav>
  )
}

export { SideNav }