import React from 'react'
import NameOfTask from './nameoftask';
import { useState } from 'react';
import Task from './task';
import Count from './count';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';


export default function AllTasks() {
    // Create Box of tasks
    const [newTask, setnewTask] = useState(() => {
        const savedTasks = localStorage.getItem("newTask");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const [filter, setfilter] = useState('all');

    const createTasks = (value) => {
        setnewTask([
        ...newTask,
        { id: uuidv4(), task: value, completed: false, delete: false },
        ]);
    };

    // local storgae
    // Save tasks to localStorage whenever tasks change
    useEffect(() => {
        localStorage.setItem('newTask', JSON.stringify(newTask));
    }, [newTask]);
    // Remove Task
    const removeItem = (id) => { 
        setnewTask((previtem) => previtem.filter(item => item.id !== id));
    }

    // set complete
    const complete = (item) => {
        setnewTask(
            newTask.map((task) =>
                task.id === item.id ? { ...task, completed: !task.completed } : task
            )
        );
    };
    
    // clear complete
    const clearcomplete = () => {
            console.log(newTask);
        return setnewTask(newTask.filter((item) => item.completed !== true));
    };
    
    // controll in Showing
    const getFilteredTasks = () => {
        if (filter === "completed") {
            return newTask.filter((item) => !item.completed);
        }
        if (filter === "active") {
            return newTask.filter((item) => item.completed);
        }
        return newTask;
    };

    return (
        <>
            <NameOfTask addTask={createTasks} />
            <div className="radius_todo shadow rounded w-full py-1 px-1  leading-tight">
            {getFilteredTasks().map((task, index) => (
                <Task
                todo={task}
                index={index}
                removeItem={removeItem}
                completed={complete}
                getFilteredTasks={getFilteredTasks}
                />
            ))}
            <div className="footer flex justify-between p-1.5">
                <div className="count cursor-pointer">
                <Count numoftasks={newTask.length} />
                </div>
                <div className="icons-center">
                <span onClick={() => setfilter('all')} className="cursor-pointer">All</span>
                <span onClick={() => setfilter('completed')} className="mx-2 cursor-pointer">Active</span>
                <span onClick={() => setfilter('active')} className="cursor-pointer">Completed</span>
                </div>
                <div className="clear cursor-pointer" onClick={clearcomplete}>Clear Completed</div>
            </div>
            </div>
        </>
        );
}
