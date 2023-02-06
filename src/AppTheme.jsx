import React, { useContext } from 'react';
import { DarkModeContext, DarkModeProvider } from './context/DarkModeContext';
export default function AppTheme(){
    return (
        <DarkModeProvider>
        <header>Header</header>
        <main>main</main>
        <footer>footer</footer>
        <ProductDetail />
    </DarkModeProvider>
  );
}

function ProductDetail(params) {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    console.log(darkMode);
    console.log(toggleDarkMode);
    return(
    <div>
        <p>DarkMode : {darkMode.toString()}</p>
        <button onClick={toggleDarkMode}>toggle</button>
    </div>)
}