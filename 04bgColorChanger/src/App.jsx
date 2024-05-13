import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from "./components/Button"

function App() {
  const [color, setColor] = useState("Olive")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl"> 
          <button 
          onClick={()=>setColor("red")}
          type="button"
          class="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          style={{backgroundColor:"red"}}
            >
            Red
          </button>
          <button 
          onClick={()=>setColor("green")}
          type="button"
          class="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          style={{backgroundColor:"green"}}
            >
            Green
          </button>
          <button 
          onClick={()=>setColor("yellow")}
          type="button"
          class="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          style={{backgroundColor:"yellow"}}
            >
            Yellow
          </button>
          <button 
          type="button"
          onClick={()=>setColor("blue")}
          class="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          style={{backgroundColor:"blue"}}
            >
            Blue
          </button>
          <button 
          onClick={()=>setColor("orange")}
          type="button"
          class="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          style={{backgroundColor:"orange"}}
            >
            Orange
          </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
