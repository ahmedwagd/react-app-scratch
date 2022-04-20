import React, { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)
  const increase = () => setCounter(prev => prev + 1);
  const multi = () => setCounter(prev => prev * 5);
  return (
    <div>
      <h1>App from scratch</h1>
      <p>{counter}</p>
      <button onClick={increase}>Add 1</button>
      <button onClick={multi}>* 5</button>
    </div>
  )
}

export default App