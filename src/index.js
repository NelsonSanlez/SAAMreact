import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Inicio } from "./components/pages/Inicio/Inicio";
import { AreaDeTrabalho } from './components/pages/AreaDeTrabalho/AreaDeTrabalho';
import { Notificacoes } from './components/pages/Notificacoes/Notificacoes';
import { InserirReceita } from './components/pages/InserirReceita/InserirReceita';
import {Receitas} from './components/pages/Receitas/Receitas'
import ErrorPage from './components/pages/ErrorPage/ErrorPage'
import Pacientes from './components/pages/Pacientes/Pacientes';
import Perfil from './components/pages/Pacientes/Perfil/Perfil';
import Receitas from './components/pages/Pacientes/Receitas/Receitas';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <p>Home</p>,
            },
            {
                path: 'inicio',
                element: <Inicio />
            },
            {
                path: 'areaDeTrabalho',
                element: <AreaDeTrabalho />
            },
            {
                path: 'usuario',
                element: <p>Usuario</p>
            },
            {
                path: '/pacientes',
                element: <Pacientes/>
            },
            {
                path: '/pacientes/perfil/:id',
                element: <Perfil/>
            },
            {
                path: '/pacientes/stock/:id',
                element: <Stock/>
            },
            {
                path: '/pacientes/historico/:id',
                element: <Historico/>
            },
            {
                path: 'notificacoes',
                element: <Notificacoes />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={router} />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
