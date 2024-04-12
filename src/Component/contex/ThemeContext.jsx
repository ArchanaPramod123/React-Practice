import { createContext } from "react";
import { theme } from "./theme";


type ThemContextProviderPropbs={
    children:React.ReactNode
}
export const ThemContext=createContext(theme)

export const ThemContextProviderPropbs=({children}:ThemContextProviderPropbs)=>{
    return <ThemContext.Provider value={theme}>{children}</ThemContext.Provider>
}