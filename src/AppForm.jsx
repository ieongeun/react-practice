import React, { useEffect, useReducer, useState } from 'react';

export default function AppForm() {
    const [form, setForm] = useState({name:'', email:''});
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]:value});
    }
    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <label htmlFor="name">이름:</label>
                <input type="text" id='name' name='name' onChange={handleChange} value={form.name}/>
                <label htmlFor="email">이메일:</label>
                <input type="email" id='email' name='email' onChange={handleChange} value={form.email}/>
                <button>Submit</button>
            </form>
        </div>
    );
}