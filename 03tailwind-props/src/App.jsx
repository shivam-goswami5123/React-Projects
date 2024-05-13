import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card"

//[[]] : hidden scope
function App() {
  

  return (
    <>
    <h1 className="mb-4 text-black bg-green-100 rounded-xl ">TAILWIND</h1>
    <Card name="Angela Yu" btnName="Click Me"/>
    <br/>
    <Card name="Darwin Clerk" btnName="Visit Me" />

    </>
  )
}

export default App
