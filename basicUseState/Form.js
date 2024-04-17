import React from 'react';
import { useState } from 'react';

export default function Form() {
    const [name, setName] = useState("Talyor");
    const [age, setAge] = useState(2000);
    return (
        <div>
            <input
             value={name}
             onChange={e=>setName(e.target.value)}/>
            <button onClick={() => setAge(age + 1)}>
                Increment Age
            </button>
            <p>Hello, {name}. You are {age} years old.</p>
        </div>
    );
}