import React from 'react';

export default function Header({filters,filter,onFilter}) {
    const handleClick = (e) => onFilter(e.target.innerHTML);
    return (
        <header>
            <ul>
                {
                    filters.map((f,index)=>
                        <li key={index}><button onClick={handleClick}>{f}</button></li>
                    )
                }
            </ul>
        </header>
    );
    }