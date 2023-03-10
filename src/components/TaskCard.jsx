import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";


export const TaskCard = ({ task}) => {

    const { onDeleteTask } = useContext(TaskContext);
   
    const taskId = task.id;

    const deleteTask = () => {
        onDeleteTask( taskId );       
    }

    return (
    <div className='bg-gray-800 text-white p-4 rounded-md'>
        <h2 className="text-xl font-bold capitalize">{ task.title }</h2>
        <p className="text-gray-500 text-sm">{ task.description }</p>
        <button className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400" onClick={ deleteTask }>Eliminar tarea</button>
    </div>
    
  )
}
