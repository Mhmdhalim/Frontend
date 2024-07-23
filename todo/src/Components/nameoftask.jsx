import React from 'react'
import { useState } from 'react'

export default function NameOfTask({addTask}) {
    const [task, setTask] = useState("");
    const handelsubmit = e => {
        e.preventDefault();
        if (task === '') {
            return null
        }
        addTask(task)
        setTask('')
    }
    return (
        <div className='w-full mb-8'>
            <form onSubmit={handelsubmit} className='flex gap-4 bg-white shadow-md rounded w-full'>
                <input className='shadow appearance-none border-none rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline' placeholder='Create a new todo...' type="text" value={task} onChange={(e) => setTask(e.target.value)} />
                <button type='submit' className='btn  text-white font-bold py-2 px-4 rounded outline-none'>Add</button>        
            </form>
        </div>
    )
}
