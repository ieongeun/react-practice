import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo.jsx';
import Todo from '../Todo/Todo.jsx';

export default function TodoList({filter}) {
    const [todos, setTodos] = useState([
        { id: '123', text: '장보기', status: 'done' },
        { id: '125', text: '공부하기', status: 'active' },
    ]);
    const handleAdd = (todo) => setTodos([...todos, todo]);
    const handleDelete = (deleteKey) => {
        setTodos(todos.filter((todo)=> todo.id !== deleteKey));
    }
    const handleUpdate = (updateKey,updateTodo) => {
        setTodos(todos.map((t)=> t.id === updateKey? updateTodo:t));
    }
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