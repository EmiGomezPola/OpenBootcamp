import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/forms/task';


const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL)

    {/*changeState = (id)=>{
        console.log('cambiar estado de una tarea')
    }*/}


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
