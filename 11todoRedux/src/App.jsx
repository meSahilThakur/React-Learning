import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, updateTodo, toggleComplete } from './features/todo/todoSlice';
import AddTodo from './components/AddTodo';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleUpdateTodo = (id, newText) => {
    dispatch(updateTodo({ id, newText }));
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete({ id }));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <AddTodo />
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
            <button onClick={() => handleToggleComplete(todo.id)}>Toggle Complete</button>
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove Todo</button>
            <input
              type="text"
              value={todo.text}
              onChange={(e) => handleUpdateTodo(todo.id, e.target.value)}
            />
          </li>
        ))}
      </ul>
    </div>
  );

}

export default App;
