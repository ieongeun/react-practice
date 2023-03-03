import React, { useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Navbar(){
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch('');
        navigate(`/videos/${search}`);
    }

    return (
        <nav>
            <Link to='/'><img src="../images/Youtube_logo.png" alt="Youtube" /></Link>
            <form action="" onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder='Search...'
                value={search}
                onChange={handleChange}/>
                <button>돋보기</button>
            </form>
        </nav>
    );
}

