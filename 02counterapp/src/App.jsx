import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);

  const increaseCounter = ()=>{
    if(counter<20){
      setCounter(counter+1);
    }
  }

  const decreaseCounter = ()=>{
    if(counter>0){
      setCounter(counter-1);
    }
  }

  return (
    <>
    <h1>Welcome to Counter App</h1>
    <h2>Here you can increase or decrease counter between 0 to 20</h2>
    <div>Counter Value : <span className='counter-box'>{counter}</span></div>
    <br />
    <button onClick={increaseCounter}>Increase</button>
    <button onClick={()=>decreaseCounter()}>Decrease</button> 
    </>
  )
}

export default App
