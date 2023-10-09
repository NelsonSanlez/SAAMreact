import React from "react";
import { Routes, Route } from "react-router-dom";

import { Inicio } from "./components/pages/Inicio/Inicio";
import { AreaDeTrabalho } from './components/pages/AreaDeTrabalho/AreaDeTrabalho';
import { Notificacoes } from './components/pages/Notificacoes/Notificacoes'
import {InserirReceita} from './components/pages/InserirReceita/InserirReceita'
import {Pacientes} from './components/pages/Pacientes/Pacientes'
import {Receitas} from './components/pages/Receitas/Receitas'

function Rotas() {
    return (
        <Routes>
            <Route exact path="/" element={<p>Home</p>} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/areaDeTrabalho" element={<AreaDeTrabalho />} />
            <Route path="/usuario" element={<p>Usuario</p>} />
            <Route path="/pacientes" element={<Pacientes/>} />
            <Route path="/notificacoes" element={<Notificacoes />} />
            <Route path="/inserirReceita" element={<InserirReceita />}/>
            <Route path="*" element={<p>Error Page</p>} />
            <Route path="/pacientes/:id?" element={<Receitas/>} />
        </Routes>
    )
}

export default Rotas