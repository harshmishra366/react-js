import { createContext, useContext } from "react";
export const TodoContext=createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    addtodo: (todo)=>{},
    updatetodo: (todo,id)=>{},
    deletetodo: (id)=>{},
    togglecomplete: (id)=>{},

})
export const useTodo= ()=>{ return useContext(TodoContext)}
export const TodoProvider=TodoContext.Provider