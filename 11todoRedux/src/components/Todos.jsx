import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todos() {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    console.log(todos)
    const [editedTodo, setEditedTodo] = useState({id: null, text:''});

    const handleEdit = (id, text) => {
        setEditedTodo({ id, text });
    };
    
    const handleSave = () => {
        dispatch(updateTodo({ id: editedTodo.id, newText: editedTodo.text }));
        setEditedTodo({ id: null, text: '' });
    };

  return (
    <div>
        <h1>Todos</h1>

        <ul>
            {todos.map((todo) => (
                <li key={todo.id} className='flex gap-5'>
                    {editedTodo.id === todo.id ? (
              <>
                <input
                  type='text'
                  value={editedTodo.text}
                  onChange={(e) => setEditedTodo({ ...editedTodo, text: e.target.value })}
                />
                <button onClick={handleSave}>Save</button>
              </>
            ) : (
              <>
                <div>{todo.text}</div>
                <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                <button onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
              </>
            )}
                </li>
            ))}
        </ul>


    </div>
  )
}

export default Todos