import React, { useEffect, useState } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/forms/task';

import '../../styles/task.scss'


const TaskListComponent = () => {


    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL)

    //const [task, setTask] = useState([inicialState]);
    //const [loading, setLoading] = useState(true);

    /*control del ciclo del vida*/
  {/*  useEffect(() => {
        console.log('task State has been modified');
        setLoading(false);
        return () => {
            console.log('Taslist component is going ti inmount')
        };
    }, [task]);

    changeComplete = (id)=>{
        console.log('cambiar estado de una tarea')
    }

*/}
    return (
        <div>
            <div>
                <h1>
                    Your Task:
                </h1>
            </div>
            <TaskComponent task = { defaultTask }/>
        </div>
    );
};


export default TaskListComponent;
