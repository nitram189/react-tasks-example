import { createContext, useState, useEffect } from 'react';
import { tasks as data } from '../data/tasks';

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {

    const [ tasks, setTasks ] = useState([]);


    const onAddTask = ( newData ) => {
        setTasks([ {
          id: tasks.length,
          title: newData.newTask,
          description: newData.newDescription
        },...tasks ])
      };
    
    const onDeleteTask = ( taskId ) => {
        setTasks(tasks.filter( task => task.id !== taskId ));
      };

    useEffect(()=> {
        setTasks( data )
        }, [])

    return (
        <TaskContext.Provider value={{
            tasks,
            onAddTask,
            onDeleteTask
            }}>{props.children}
        </TaskContext.Provider>
    
  )
}
