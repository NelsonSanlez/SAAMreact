import { createContext, useState } from "react";


export const LoginContext = createContext();

export const LoginProvider = ({children}) => {
    const [login, setLogin] = useState({});


    const checkLogin = ({id, status})=>{
        if(!id || !status){
            setLogin({});
        }else{
            setLogin({id, status})
        }
    }

    return (<LoginContext.Provider value={{login, checkLogin}}>
        {children}
    </LoginContext.Provider>)
}