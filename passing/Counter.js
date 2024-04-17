import { useState } from 'react';
import React from 'react';

export default function Counter() {
    const [age, setAge] = useState(42);
    function increment() {
        //setAge(age + 1);
        setAge(age => age + 1)
    }
    return (
        <div>
            <h1>Your age: {age}</h1>
            <button onClick={() => {
                increment();
                increment();
                increment();
            }}> +3 </button>
            <button onClick={() => {
                increment();    
            }}> +1 </button>
        </div>
    );
}