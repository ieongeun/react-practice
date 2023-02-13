import React, { useEffect, useReducer, useState } from 'react';
import TodoList from "./components/TodoList/TodoList.jsx";
export default function App(){
  return (
    <>
    <ul>
        <TodoList/>
    </ul>
    </>
  );
}
