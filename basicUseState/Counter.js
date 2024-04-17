import React from 'react';
import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    
    function handleClick() {
        setCount(count +1);
    }

    return (
        <div>
            <button onClick={handleClick}>You pressed me {count} times </button>
            <d> </d>
            <button onClick={()=>setCount(0)}>reset</button>
        </div>
    );
}
