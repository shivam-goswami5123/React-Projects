import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //Injection of a variable "Evaluated Expression" in return block in frontend
  //useState(<defaultValue> e.g:any number , function , object , string , array etc...)
  //it returns a array [<variable> , <function>] : this function will update the variable
  let [counter,setCounter]=useState(15);

  function incrementByOne(){
    if(counter+1<=20){
      setCounter(counter+1);
    }
  };

  function decrementByOne(){
    if(counter-1>=0){
      setCounter(counter-1);
    }
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
