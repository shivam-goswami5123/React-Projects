import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/Theme"
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";


function App() {
  const [themeMode,setThemeMode]=useState("light");

  //As functionalities of these two functions were not defined in Theme.js
  //So we are defining these functions here
  //REMEMBER: NAME SHOULD BE SAME !!!!
  const darkTheme=()=>{
      setThemeMode("dark");
  }

  const lightTheme=()=>{
        setThemeMode("light");
  }

  //Actual Change of theme
  const htmlContainer=document.querySelector('html');
  useEffect(()=>{
    htmlContainer.classList.remove("light","dark");
    htmlContainer.classList.add(themeMode);
  },[themeMode]);
  
  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/*themeBtn*/}
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/*card*/}
                       <Card/>
                    </div>
                </div>
            </div>
    </ThemeProvider>
  )
}

export default App
