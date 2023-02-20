import React from 'react';
import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import TodoList from './components/TodoList/TodoList.jsx';

const filters = ['all','active','done'];
export default function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <>
      <Header filters={filters} filter={filter} onFilter={setFilter}/>
      <TodoList filter={filter}/>
    </>
  );
}

