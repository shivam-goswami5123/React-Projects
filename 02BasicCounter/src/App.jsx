import { useState } from 'react'

import './App.css'

function App() {
 
  let [counter,setCounter]=useState(15);

  function incrementByOne(){
      setCounter(counter+1);
      setCounter(counter+1);
      setCounter(counter+1);
      setCounter(counter+1);
  };

  function decrementByOne(){
      setCounter(counter-1);
  };

  return (
    <>
      <h1>Basic Counter</h1>
      <h3>Counter:{counter}</h3> 
      <button
        onClick={incrementByOne}
      >Increment</button>
      <br/>
      <br/>
      <button
        onClick={decrementByOne}
      >Decrement</button>
      <p>Footer:{counter}</p>
    </>
  )
}

export default App
