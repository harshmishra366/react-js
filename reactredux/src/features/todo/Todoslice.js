import { createSlice,nanoid } from "@reduxjs/toolkit";
const initialState={
    todos:[{id:1,text:"hi harsh"}]
}
export const Todoslice=createSlice({
    name:'todo',
    initialState,
    reducers: {
        addtodo:(state,action)=>{
            const todo={
                id:nanoid,
                text:action.payload
            }
            state.todos.push(todo)
        },
        removetodo: (state, action) => {
            state.todos = state.todos.filter((todo) => {
                return todo.id !== action.payload
            })
        }
        
    }
})
export const {addtodo,removetodo}=Todoslice.actions
export default Todoslice.reducer