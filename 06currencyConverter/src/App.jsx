import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen'>
      <h1 className="text-3xl font-bold underline text-center">
      Currency Converter
    </h1>
    </div>
  )
}

export default App
