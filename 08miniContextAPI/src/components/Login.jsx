import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password});
    }

  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold'>Login</h1> <br />
        <input type='text' placeholder='username' value={username} onChange={(e)=> setUsername(e.target.value)} /> <br />
        <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
        <button className='bg-green-600 px-4 py-2 rounded-md mb-4' onClick={handleSubmit} >Submit</button>
    </div>
  )
}

export default Login