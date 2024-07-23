import React from 'react'

import cross from '../images/icon-cross.svg'
import check from '../images/icon-check.svg'
import { useState } from 'react'; 
    
export default function Task({todo, index, removeItem, completed}) {
        const [isOn, setIson] = useState(false);
        const toggle = (e) => {
            setIson(!isOn);
            completed(e.target.value.id);

        };
        console.log(todo.completed)
    return (
        <>
            <div
            id={index}
            className="newtask flex justify-between align-middle items-center w-full leading-tight h-10 p-2"
            >
                <div className='flex gap-2 align-middle items-center'>
                    {!isOn ? <span onClick={toggle} className="rounded-full h-5 w-5 flex items-center justify-center border opacity-30 hover:opacity-70"></span> : <span onClick={toggle} className="checked rounded-full h-5 w-5 flex items-center justify-center border opacity-30 hover:opacity-70"><img src={check} alt="" /></span> }
                    <span className='text_'>{todo.task}</span>
                </div>
                <div>
                    <img src={cross} alt="cross" className='hover:opacity-70 cursor-pointer' onClick={() => removeItem(todo.id)} />
                </div>
            </div>
        </>
    );
}
