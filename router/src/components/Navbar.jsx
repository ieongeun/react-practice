import React, { useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
export default function Navbar(){
  return (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/video'>Video</Link>
    </nav>
  );
}
