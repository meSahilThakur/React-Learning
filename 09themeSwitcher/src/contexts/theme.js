import { useContext } from "react";
import { createContext } from "react";

export const ThemeContext = createContext({             //step1 - createContext
    themeMode: "light",
    darkTheme: ()=>{},
    lightTheme: ()=>{}
});


export const ThemeProvider = ThemeContext.Provider         //step2 - context.Provider


export default function useTheme(){                        //step3 - useContext
    return useContext(ThemeContext);
}