import React from 'react'
import NameOfTask from './nameoftask';
import { useState } from 'react';
import Task from './task';
import Count from './count';
import { v4 as uuidv4 } from 'uuid';

export default function AllTasks() {
    // Create Box of tasks
    const [newTask, setnewTask] = useState([]);
    const createTasks = (value) => {
        setnewTask([
        ...newTask,
        { id: uuidv4(), task: value, completed: false, delete: false },
        ]);
    };

    // Remove Task
        const removeItem = (id) => {
            setnewTask((previtem) => previtem.filter(item => item.id !== id));
    }

    // set complete
    const complete = (id) => {
        setnewTask(newTask.map((item) => {
            if(item.id === id)
            {
                item.completed = true;
            }
        }))
    }
    
    // clear complete
        const clearcomplete = (id) => {
            setnewTask((previtem) => previtem.filter((item) => item.clearcomplete === true));
        };
    
    return (
        <>
            <NameOfTask addTask={createTasks} />
            <div className="radius_todo shadow rounded w-full py-1 px-1  leading-tight">
            {newTask.map((task, index) => (
                <Task
                todo={task}
                index={index}
                removeItem={removeItem}
                completed={complete}
                />
            ))}
            <div className="footer flex justify-between p-1.5">
                <div className="count cursor-pointer">
                <Count numoftasks={newTask.length} />
                </div>
                <div className="icons-center">
                <span className="cursor-pointer">All</span>
                <span className="mx-2 cursor-pointer">Active</span>
                <span className="cursor-pointer">Completed</span>
                </div>
                <div className="clear cursor-pointer" onClick={clearcomplete}>Clear Completed</div>
            </div>
            </div>
        </>
        );
}
