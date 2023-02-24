import React, { useState, useEffect, useReducer } from 'react';
import AddTodo from '../AddTodo/AddTodo.jsx';
import Todo from '../Todo/Todo.jsx';
import todosReducer from "../../reducer/todos-reducer.js";

export default function TodoList({filter}) {
    const [todos, dispatch] = useReducer(todosReducer, initialTodos);

    const handleAdd = (todo) => {
        dispatch({type:'add', todo});
    }
    const handleDelete = (deleteKey) => {
        dispatch({type:'delete', deleteKey});
    }
    const handleUpdate = (updateKey,updateTodo) => {
        dispatch({type:'update', updateKey, updateTodo});
    }

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos));
    },[todos])
    const filtered = filtering(filter, todos);
    return (
        <>
            <section>
                <ul>
                {
                filtered.map((item) => (
                    <Todo
                    todo={item}
                    onDelete={handleDelete}
                    onUpdate={handleUpdate}
                        />
                        ))
                }
                </ul>
                <AddTodo onAdd={handleAdd} />
            </section>
        </>
    );
}
function filtering (filter, todos) {
    if (filter==='all') {
        return todos;
    }
    return todos.filter((t)=> t.status===filter);
}
const initialTodos = JSON.parse(localStorage.getItem('todos')) || [];