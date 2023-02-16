import React from 'react';

export default function Todo({todo:{id, text, status}, onDelete, onUpdate}) {
    const handleClick = (key) => onDelete(key);
    const handleChange = (key) => onUpdate(key);
    return (
        <li key={id}>
            <input type="checkbox" id={id} checked={status} onChange={()=>handleChange(id)}/>
            <label htmlFor={id}>{text}</label>
            <button onClick={()=>handleClick(id)}>삭제</button>
        </li>
    );
}

