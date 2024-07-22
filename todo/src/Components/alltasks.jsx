import React from 'react'
import NameOfTask from './nameoftask';
import { useState } from 'react';
import Task from './task';
export default function AllTasks() {
    // Create Box of tasks
    const [newTask, setnewTask] = useState([]);
    const createTasks = (value) => {
        setnewTask([
        ...newTask,
        { task: value, completed: false, isEditing: false },
        ]);
        console.log(newTask);
    };
    return (
        <>
            <NameOfTask addTask={createTasks} />
            <div className='radius_todo shadow rounded w-full py-1 px-1  leading-tight'>
                {newTask.map((task, index) => (
                    <Task todo={task} index={index} />
                ))}
            </div>
        </>
    );
}
