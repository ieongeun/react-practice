import React from 'react';
import style from "./Header.module.css";


export default function Header({filters,filter,onFilter}) {
    const handleClick = (e) => onFilter(e.target.innerHTML);
    return (
        <header>
            <ul>
                {
                    filters.map((f,index)=>
                        <li key={index}><button className={`${style.filter} ${f===filter? style.selected:''}`} onClick={handleClick}>{f}</button></li>
                    )
                }
            </ul>
        </header>
    );
    }