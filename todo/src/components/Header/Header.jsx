import React from 'react';

export default function Header() {
    const handleClick = () => {
        
    }
    return (
        <header>
            <ul>
                <li><button onClick={handleClick}>전체</button></li>
                <li><button onClick={handleClick}>할일</button></li>
                <li><button onClick={handleClick}>한일</button></li>
            </ul>
        </header>
    );
}

