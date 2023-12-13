import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {

    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    
    const handleAddTodo = (e) => {
      e.preventDefault();
      if(input.trim() !== "")
        dispatch(addTodo(input))
        setInput("");
    }

  return (
    <form onSubmit={handleAddTodo}>
        <input type="text" placeholder='Enter a todo..' value={input} onChange={(e)=> setInput(e.target.value)} />
        <button>AddTodo</button>
    </form>
  )
}

export default AddTodo