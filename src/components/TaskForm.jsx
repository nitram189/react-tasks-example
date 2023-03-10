
import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";


export const TaskForm = () => {
  
    const [ newTask, setNewTask ] = useState('');
    const [ newDescription, setNewDescription ] = useState('');
    const { onAddTask } = useContext( TaskContext );

    const onInputChange = (event) => {
        setNewTask( event.target.value );
    };
    const onTextChange = (event) => {
        setNewDescription( event.target.value );
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if( newTask.length === 0 ) return;

        onAddTask({ newTask, newDescription });
        setNewDescription('');
        setNewTask('');
    }

    return (
    <div className="max-w-md mx-auto">
     <form className="bg-slate-800 p-10 mb-4" onSubmit={ onSubmit }>
        <h1 className="text-2xl font-bold mb-3 text-white">Crea tu nueva tarea.</h1>
        <input 
            className="bg-slate-300 p-3 w-full mb-2"
            placeholder='Tarea a realizar'
            value={ newTask }
            onChange={ onInputChange }
            autoFocus
        />
        <textarea
        className="bg-slate-300 p-3 w-full mb-2"
        placeholder='Describi la tarea'
        value={ newDescription }
        onChange={ onTextChange }
        ></textarea>
        <button className="bg-indigo-500 p-3 py-1 text-white rounded-md">Save</button>
     </form>
    </div>
  )
}
