import React from 'react';
import { useState } from 'react';

export default function App() {
    const [version, setVersion] = useState(0);

    function handleReset() {
        setVersion(version + 1);
    }

    return (
        <div>
            <button onClick = {handleReset}>Reset</button>
            <Form key = {version}/>
        </div>
    );
}

function Form() {
    const [name, setName] = useState('Taylor');
    return (
        <>
            <input
                value = {name}
                onChange = {e => setName(e.target.value)}
            />
            <p>Hello, {name}!</p>
        </>
    );
}

// src/App.js에 붙여넣기