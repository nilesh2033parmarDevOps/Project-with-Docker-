import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>🚀 React + Docker App</h1>
      <p>DevOps Practice Project 1 </p>

      <div className="card">
        <h2>Counter: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    </div>
  );
}

export default App;