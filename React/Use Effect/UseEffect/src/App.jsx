import { useEffect, useState } from 'react'
import './App.css'

function App() {

const [count, setCount] = useState (0)

useEffect(() => {

  console.log("EFFECT CALLED!");

  setInterval(() => console.log("tick"), 1000);
  
}, [])

  return (
    <div>
<h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
export default App
