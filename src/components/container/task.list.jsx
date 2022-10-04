import React, { useEffect, useState } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/forms/task';

import '../../styles/task.scss'
import  TaskForm  from '../pure/forms/taskForm';


const TaskListComponent = () => {


    const defaultTask1 = new Task('Example1', ' description1', true, LEVELS.NORMAL)
    const defaultTask2 = new Task('Example2', ' description2', false, LEVELS.URGENT)
    const defaultTask3 = new Task('Example3', ' description3', false, LEVELS.BLOCKING)



    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    /*control del ciclo del vida*/
    useEffect(() => {
        console.log('task State has been modified');
        setLoading(false);
        return () => {
            console.log('Taslist component is going ti inmount')
        };
    }, [tasks]);

    function completeTask(task){
        console.log('Complete this Task:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed= !tempTasks[index].completed;
        //actualizo la tarea
        setTasks(tempTasks)
    }

    function deleleTask(task){
        console.log('Complete this Task:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index,1);
        setTasks(tempTasks);
    }

    function addTask(task){
        console.log('Complete this Task:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

  
    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>
                            Your Task:
                        </h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ { position: 'relative', height: '400px'}}>
                        <table>
                            <thead>
                                <tr>
                                <th scope='col'>Title</th>
                                <th scope='col'>Description</th>
                                <th scope='col'>Priority</th>
                                <th scope='col'>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task, index)=>{
                                    return (
                                        <TaskComponent 
                                            key={ index } 
                                            task= { task }
                                            complete={ completeTask }
                                            remove= {deleleTask}
                                            />
                                    )
                                })}
                            </tbody>  
                        </table>
                    </div>
                    
                </div>
            </div>
            <TaskForm add={addTask}></TaskForm>
        </div>
    );
};


export default TaskListComponent;
