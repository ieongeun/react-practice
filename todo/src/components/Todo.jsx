import React from 'react';

export default function Todo({todo:{id, text, status}, onDelete, onUpdate}) {
    const handleClick = () => onDelete(id);
    const handleChange = () => onUpdate(id);
    return (
        <li key={id}>
            <input type="checkbox" id={id} checked={status} onChange={handleChange}/>
            <label htmlFor={id}>{text}</label>
            <button onClick={handleClick}>삭제</button>
        </li>
    );
}

// 아 바보 이 하나의 컴포넌트가 하나지 그럼 ()=> 이렇게할일도 없었잖아 ㄱ치 
