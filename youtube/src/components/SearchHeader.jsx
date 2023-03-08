import React, { useEffect, useReducer, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { BsYoutube, BsSearch } from 'react-icons/bs'

export default function SearchHeader(){
    const { keyword } = useParams();
    const navigate = useNavigate();
    const [text, setText] = useState('');
    const handleChange = (e) => {
        setText(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/videos/${text}`);
    }
    useEffect(()=>setText(keyword || ''), [keyword]);

    return (
        <header>
            <Link to='/'>
                <BsYoutube/>
                <h1>Youtube</h1>
            </Link>
            <form action="" onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder='Search...'
                value={text}
                onChange={handleChange}/>
                <button>
                    <BsSearch/>
                </button>
            </form>
        </header>
    );
}

