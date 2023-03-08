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
        <header className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4'>
            <Link to='/' className='flex items-center'>
                <BsYoutube className='text-4xl text-brand'/>
                <h1 className='font-bold ml-2 text-3xl'>Youtube</h1>
            </Link>
            <form className='w-full flex justify-center' action="" onSubmit={handleSubmit}>
                <input
                className='w-7/12 p-2 outline-none bg-black text-gray-50 rounded-l-lg'
                type="text"
                placeholder='Search...'
                value={text}
                onChange={handleChange}/>
                <button className='bg-zinc-600 px-4 rounded-r-lg'>
                    <BsSearch/>
                </button>
            </form>
        </header>
    );
}

