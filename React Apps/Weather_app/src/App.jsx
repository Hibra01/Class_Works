import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <img src="./images/coin.png" alt="coin" />
        <h1>{count}</h1>
        <div>
          <button onClick={() => setCount(count + 1)}>click</button>
        </div>
      </main>
    </>
  );
}

export default App;
