import { useState } from 'react'
import './App.css'
import User from './components/User';

function App() {
  const [count, setCount] = useState(0)
  console.log(count);

  return (
    <>
     <h1>Hi, click the button to update the value</h1>
     <h1>{count}</h1>
     <button onClick= {()=>setCount(count+1)}>Update Count</button>
     <br />
     <h1>Below is an example of props and state</h1>

     <User username={"Sahil Thakur"} />
     <User username={"Ravi Roy"} email='ravi@gmail.com' />
    </>
  )
}

export default App
