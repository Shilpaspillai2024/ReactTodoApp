import React from 'react';



interface Todo{
    id:number;
    text:string;
    completed: boolean;
}

interface TodoItemProps{
    todo:Todo;
    onEdit:(id:number)=>void;
    onDelete:(id:number)=>void;
    onToggleComplete: (id:number) => void;
}

const TodoItem:React.FC<TodoItemProps>=({todo,onEdit,onDelete,onToggleComplete}) => {
     return(
        <div className='flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md'>
            
            <div className="flex items-center">
               
                <button onClick={()=>onToggleComplete(todo.id)} className='mr-4'>
                    {todo.completed ? (
                        <span className='text-green-500'>✔️</span> 
                    ) : (
                        <span className='text-gray-500'>⬜</span>  
                    )}
                </button>

                {/* Display the Todo text */}
                <span className={`text-lg ${todo.completed ? 'line-through text-gray-500' : 'text-black'}`}>
                    {todo.text}
                </span>
            </div>



            <div>
            
                <button onClick={()=>onEdit(todo.id)} >  <i className='fas fa-pen-to-square mr-3'></i> </button>
                <button onClick={()=>onDelete(todo.id)} > <i className='fas fa-trash mr-3'></i> </button>
            </div>
        </div>
     );
};

export default TodoItem