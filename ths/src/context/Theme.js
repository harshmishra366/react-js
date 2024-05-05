import { createContext,useContext } from "react";
export const Themecontext=createContext({
    thememode:"light",
    lightmode:()=>{},
    darkmode:()=>{}
})
export const Themeprovider= Themecontext.Provider
export default function useTheme(){
    return useContext(Themecontext)
}