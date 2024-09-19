import React from "react";
import TodoItem from "./TodoItem";


interface Todo{
    id:number;
    text:string;
    completed:boolean;
}

interface TodoListProps{
    todos:Todo[];
    onEdit:(id:number)=>void;
    onDelete:(id:number)=>void;
    onToggleComplete:(id:number)=>void;
}

const TodoList:React.FC<TodoListProps>=({todos,onEdit,onDelete,onToggleComplete})=>{
    return(
        <div className="space-y-4 m-6">
            {todos.map((todo)=>(
                <TodoItem  key={todo.id} todo={todo} onEdit={()=>onEdit(todo.id)}
                onDelete={()=>onDelete(todo.id)}
                onToggleComplete={() => onToggleComplete(todo.id)}/>
            ))}
        </div>
    );
};

export default TodoList