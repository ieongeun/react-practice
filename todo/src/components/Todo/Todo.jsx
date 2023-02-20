import React from 'react';

export default function Todo({todo:{id, text, status}, onDelete, onUpdate}) {
    const handleClick = () => onDelete(id);
    const handleChange = () => {
        status = status === 'active'? 'done': 'active';
        onUpdate(id,{id,text,status});
    }
    return (
        <li key={id}>
            <input type="checkbox" id={id} checked={status === 'done'? true:false} onChange={handleChange}/>
            <label htmlFor={id}>{text}</label>
            <button onClick={handleClick}>삭제</button>
        </li>
    );
}