import React, { useState } from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';

export default function TodoList() {
    const [todos, setTodos] = useState([
        { id: '123', text: '장보기', status: 'active' },
        { id: '125', text: '공부하기', status: 'active' },
    ]);
    const handleAdd = (todo) => setTodos([...todos, todo]);
    const handleDelete = (deleteKey) => {
        setTodos(todos.filter((todo)=> todo.id !== deleteKey));
    }
    return (
    <section>
        <ul>
        {todos.map((item) => (
            <Todo todo={item} onDelete={handleDelete}/>
        ))}
        </ul>
        <AddTodo onAdd={handleAdd} />
    </section>
    );
}
