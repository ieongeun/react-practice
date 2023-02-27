import React, { useEffect, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Video(){
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const handleChange = (e) => {
    setText(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setText('');
    navigate(`/video/${text}`);
  }
  return (
    <div>Video
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='video id:'
          value={text}
          onChange={handleChange}/>
      </form>
    </div>
  );
}
