import { createBrowserRouter } from 'react-router-dom'
import Root from './root/index';
import ErrorPage from './error';
import Contactos from './contactos/Contactos';
import SobreNos from './sobrenos/SobreNos';
import HomePage from './home/HomePage';

const router = createBrowserRouter(
    [   {
        path:'',
        element: <HomePage/>,
    },
        {
            path:'/',
            element: <Root/>,
            errorElement: <ErrorPage/>,
            
            children:[
                {
                    path:'/contactos',
                    element: <Contactos/>,
                    
                },
                {
                    path:'/sobrenos',
                    element: <SobreNos/>,
                    
                }
            ]
        }        
    ]
);

export default router;