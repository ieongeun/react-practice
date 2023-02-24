import { createContext, useState, useContext, useEffect } from 'react';
const DarkModeContext = createContext();

export function DarkModeProvider({children}) {
    const [darkMode, setDarkMode] = useState(initialDarkMode);
    useEffect(()=>{
        handleDarkMode(darkMode);
    },[darkMode])
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }
    return(
        <DarkModeContext.Provider value={{darkMode,toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}
const handleDarkMode = (isDark) => {
    if (isDark) {
        localStorage.setItem('darkMode', 'dark');
        document.documentElement.classList.add('dark');
    } else {
        localStorage.setItem('darkMode', 'light');
        document.documentElement.classList.remove('dark');
    }
}
const initialDarkMode = () => localStorage.getItem('darkMode')==='dark'? true : false;
export const useDarkMode = () => useContext(DarkModeContext);