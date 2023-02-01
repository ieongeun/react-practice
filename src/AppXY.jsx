import React, { useState } from "react";
import './AppXY.css'

export default function AppXY() {
    const [position, setPosition] = useState({left:0,top:0});
    const pointer = document.querySelector('.pointer');
    function move(e) {
        setPosition({left:e.clientX, top:e.clientY});
            pointer.style.left = position.left+'px';
            pointer.style.top = position.top+'px'; //null이던상태에서 그래서그런가는아니구 ㅁ ㅝ
    }
    return(
        <div className='container' onMouseMove={move}>
            <div className="pointer" />
        </div>
    );}
    // 맞게나오는데 왜 에러뜨지
    // 엘리도 에러뜨나?