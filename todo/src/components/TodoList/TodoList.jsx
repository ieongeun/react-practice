import React, { useState } from 'react';
import { VscPass } from "react-icons/vsc";

export default function TodoList({task}) {
    const [todos, setTodos] = useState([
        {id:123, status: 'not-started', task:'치과가기'},
        {id:133, status: 'done', task:'청소'}
    ]);
    return (
        <>{
            todos.map(list => <li key={list.id}><VscPass/>{list.task}</li>)
        }
        </>
    );
}

