import React, { useState } from 'react';
import Header from './components/Header/Header.jsx';
import TodoList from './components/TodoList/TodoList.jsx';
import { useDarkMode, DarkModeProvider } from './context/DarkModeContext.jsx';

const filters = ['all','active','done'];
export default function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <>
      <DarkModeProvider>
        <Header filters={filters} filter={filter} onFilter={setFilter}/>
        <TodoList filter={filter}/>
        <ToggleButton/>
      </DarkModeProvider>
    </>
  );
}

function ToggleButton() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <button onClick={toggleDarkMode}>{darkMode? '🌕':'🌑'}</button>
  )
}