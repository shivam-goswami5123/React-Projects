import {createSlice,nanoid} from "@reduxjs/toolkit";

//state
const initialState={
    todos:[{id:1,text:"Hello"}]
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        //properties or functions
        //everytime we will get access of two properties state and action
        //state:current value
        //action:data passed
        //difference from contextAPI is that function is defined along with declaration here itself

        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
                //payload is a object 
            }
            state.todos.push(todo);
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
        //assignment updateTodo()
        updateTodo:(state,action)=>{
            state.todos=state.todos.map((todo)=> todo.text = todo.id == action.payload ? action.payload : todo.text)
        }
    }
});

export const {addTodo,removeTodo,updateTodo}=todoSlice.actions;

export default todoSlice.reducer;