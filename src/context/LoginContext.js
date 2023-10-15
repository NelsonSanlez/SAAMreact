import { createContext, useState } from "react";


export const LoginContext = createContext();

export const LoginProvider = ({children}) => {
    const [login, setLogin] = useState({});


    const checkLogin = ({email, password})=>{
        if(!email || !password){
            setLogin({});
        }else{
            setLogin({email, password})
        }
    }

    return (<LoginContext.Provider value={{login, checkLogin}}>
        {children}
    </LoginContext.Provider>)
}