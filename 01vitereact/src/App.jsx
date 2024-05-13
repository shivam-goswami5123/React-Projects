import Chai from "./Chai";


function App() {
  //We can insert custom variables to the fragment of return block
  //These are EVALUATED EXPRESSIONS : this contains output of the expression not the JS expression
  const username="ChaiAurReact"

  return (
    <>
    <Chai/>
    <p>Welcome to React World {username}</p>
    <p>Vite</p>
    </>
  )
}

export default App
