import React, { useState } from "react";
import avatars from './avatars.json';

export default function Current() {
    
    const [currentindex, setcurrentindex] = useState(1);

    let index_ = currentindex - 1; 
    function handelAdd() {
        if (currentindex === 4)
        {
            setcurrentindex(currentindex - 4);
        }
        return setcurrentindex((prev) => parseInt(prev) + 1);
    }
    return (
    <div className="box current flex justify-evenly align-middle gap-1 w-full h-[100px]">
        <div className="w-1/12 bg-white text-white">
                <img className={`cursor-pointer currentimg ${currentindex === index_ ? 'transformed' : ''}`}
                    onClick={handelAdd}
                    src={avatars[currentindex].img}
                    alt="img"
            />
        </div>
            <input id="input text" type="text" placeholder="Add a comment..." />
            <label for="text" class="label">Placeholder</label>
        <button
            className="bg-blue-700 hover:bg-blue-300 text-white font-bold text-sm py-2 px-4 rounded uppercase h-9 ease-out duration-700 hover:scale-110"
        >
            send
        </button>
        </div>
    );
}
