import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { TaskCard } from './TaskCard';


export const TaskList = () => {
  
   const { tasks } = useContext( TaskContext );

   if (tasks.length === 0 ){
    return <h3 className='text-xl text-white'>No hay tareas pendientes</h3>
    }

    return (
        <div className='grid grid-cols-4 gap-2'>
            {tasks.map( task => (
            <TaskCard key={ task.id } task={ task } />
         ))}
        </div>
    );
}

