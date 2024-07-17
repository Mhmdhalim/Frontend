import React from 'react'
import { useState } from 'react';
import Reply from './reply';

export default function Comments(props) {

    // State for current and functions of add und substract
    const [score, setscore] = useState(`${props.score}`);
    
    function handelAdd() {
        return setscore(prev => parseInt(prev) + 1);
    }

    function handelSubstract() {
        return setscore(prev => prev - 1);
    }

    return (
        <div className='box gap-4 w-full flex'>
            {/* Score */}
            <div id={props.id} className='flex flex-col justify-center items-center'>
                <span onClick={handelAdd} className='cursor-pointer'>+</span>
                <span className='score' >{score}</span>
                <span onClick={handelSubstract} className='cursor-pointer'>-</span>
            </div>
            {/* Information */}
            <div className="information flex flex-col">
                {/* NAV */}
                <div className="header flex justify-between w-full">
                    <div className="bg-transparent text-white flex items-center align-middle mb-2">
                        <img className="rounded bg-transparent color-2 text-sm" src={props.img} alt="image_" />
                        <p className="user -ml-8">{props.user}</p>
                        <p className='text-black ml-2 createAt'>{props.createdAt}</p>
                    </div>
                    <p className='text-blue-700 cursor-pointer'>
                        <img className='cursor-pointer' src="../assets/images/icon-reply.svg" alt="" />
                        {/* ADD REPLIES */}
                        <button className='reply'>Reply</button>
                    </p>
                </div>
                {/* Content */}
                <div>
                    <p className='content'>{props.content}</p>
                </div>
            </div>

        </div>
    )
}
