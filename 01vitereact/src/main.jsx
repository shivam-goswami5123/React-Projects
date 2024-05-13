import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom React App</h1>
    </div>
  )
}

const reactElement={
  type:'a',
  props:{
      href:"https://google.com",
      target:"_blank"
  },
  children:"Click Me to open Google"
}

const anotherReactElement=(
  <a href="https://google.com" target="_blank">Click Me to Google</a>
)

const anotherVar="ChaiAurShivam";

//React Syntax of creating custom react element
const correctReactElement=React.createElement(
  'a',
  {'href':'https://google.com','target':'_blank'}, //leave it blank if no  attributes of that tag
  'Visit Google',
  //custom variables or EVALUATED EXPRESSIONS are injected after the complete tree has been formed at its end
  anotherVar
)

ReactDOM.createRoot(document.getElementById('root')).render(
    correctReactElement
    /*anotherReactElement : will work */
    /*MyApp()*/
    /*reactElement : will not work as syntax is not correct*/
  
)
