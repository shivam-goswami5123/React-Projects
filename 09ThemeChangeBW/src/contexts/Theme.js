import {createContext,useContext} from "react";

//Different from previous Approach 08MiniContext Two files work in one file
export const ThemeContext=createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{}
});

export const ThemeProvider=ThemeContext.Provider;

export default function useTheme(){
    return useContext(ThemeContext)
};

//REMEMBER: CHANGE IN tailwind.config.js : Add darkMode:"class"