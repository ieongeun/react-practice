import React, { useState } from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';

export default function TodoList() {
    const [todos, setTodos] = useState([
        { id: '123', text: '장보기', status: true },
        { id: '125', text: '공부하기', status: false },
    ]);
    const handleAdd = (todo) => setTodos([...todos, todo]);
    const handleDelete = (deleteKey) => {
        setTodos(todos.filter((todo)=> todo.id !== deleteKey));
    }
    const handleUpdate = (updateKey) => {
        setTodos((prev)=>prev.map((todo)=> todo.id === updateKey? {...todo,status:(!todo.status)} : todo));
    }
    return (
    <section>
        <ul>
        {todos.map((item) => (
            <Todo
                todo={item}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
                />
        ))}
        </ul>
        <AddTodo onAdd={handleAdd} />
    </section>
    );
}
