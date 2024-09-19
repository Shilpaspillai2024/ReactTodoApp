import React,{useState} from 'react'

interface EditTodoProps{
    todo:{id:number;text:string};
    onSave:(id:number,text:string)=>void;
    onCancel:()=>void
}


const EditTodo:React.FC<EditTodoProps>=({todo,onSave,onCancel})=>{

    const[text,setText]=useState(todo.text);

    const handleSave=()=>{
        if(text.trim()){
            onSave(todo.id,text)
        }
    };

    return(
        <div className='flex gap-2'>
            <input type="text"
            value={text} 
            onChange={(e)=>setText(e.target.value)}
            className="border border-gray-300 rounded p-2 flex-grow mt-10"
           />
           <button onClick={handleSave} className='bg-slate-950 text-white px-4 py-2 rounded mr-2 mt-10'>Save</button>
           <button onClick={onCancel} className='bg-slate-700 text-white px-4 py-2 rounded mr-2 mt-10'>Cancel</button>
        </div>
    );
};

export default EditTodo