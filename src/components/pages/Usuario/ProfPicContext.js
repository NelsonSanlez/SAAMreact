// Not using at the moment
import { createContext, useState } from "react";


export const ProfPicContext = createContext();

export const LoginProvider = ({children}) => {
    const [customProfPic, setCustomProfPic] = useState(false)
    return (<ProfPicContext.Provider value={{customProfPic}}>
        {children}
    </ProfPicContext.Provider>)
}