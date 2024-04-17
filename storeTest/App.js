import React from "react";
import { useState } from "react";
import CountLabel from "./storeTest/CountLabel.js";

export default function App() {
    const [count, setCount] = useState(0);
    return (
    <div>
        <button onClick = {() => setCount(count + 1)}>Increment</button>
        <button onClick = {() => setCount(count - 1)}>Decrement</button>
        <CountLabel count = {count} />
    </div>
  );
}

// src/App.js에 붙여넣기