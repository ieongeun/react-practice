import React, { useEffect, useReducer, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
export default function Root(){
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}
