import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [
        {
            id: 1,
            text: "todo msg",
            completed: false
        }
    ]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {

        // addTodo: ()=>{},                //these are the actions performed by the todo
        // removeTodo: ()=>{},
        // updateTodo: ()=>{},
        // toggleComplete: ()=>{}

        addTodo: (state, action)=>{
            const todo = {id: nanoid(), text: action.payload}
            state.todos.push(todo)
        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const { id, newText } = action.payload;
            const todoToUpdate = state.todos.find((todo) => todo.id === id);
            if (todoToUpdate) {
                todoToUpdate.text = newText;
            }
        },
        toggleComplete: (state, action) => {
            const { id } = action.payload;
            const todoToToggle = state.todos.find((todo) => todo.id === id);
            if (todoToToggle) {
                todoToToggle.completed = !todoToToggle.completed;
            }
        },
    }
})

export const {addTodo, removeTodo, updateTodo, toggleComplete} = todoSlice.actions
export default todoSlice.reducer
