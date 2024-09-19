import React,{useState} from "react";

interface AddTodoProps{
    onAdd:(text:string)=>void;
}

const AddTodo:React.FC<AddTodoProps>=({onAdd})=>{

    const[text,setText]=useState('')

    const handleAdd=()=>{
        if(text.trim()){
            onAdd(text);
            setText('')
        }
    };

    return(
        <div className="flex gap-2">
            <input type="text"
            value={text}
            onChange={(e)=>setText(e.target.value)}
            className="border border-gray-300 rounded p-2 flex-grow mt-10"
            placeholder="Enter a new to-do"
            
            />
            <button onClick={handleAdd} className="bg-neutral-600 text-white px-4 py-2 rounded mt-10">Add</button>
        </div>
    );
};

export default AddTodo