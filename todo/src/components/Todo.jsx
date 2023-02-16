import React from 'react';

export default function Todo({todo:{id, text, status},onDelete}) {
    const handleClick = (key) => onDelete(key);
    return (
        <li key={id}>
            {text}
            <button onClick={()=>handleClick(id)}>삭제</button>
        </li>
    );
}

