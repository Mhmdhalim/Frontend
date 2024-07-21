import React from "react";
import { useState } from "react";

import avatars from "./avatars.json";


export default function Add({ data }) {
    const [score, setscore] = useState(0);
    if (!data) {
        return null;
    }

    function handelAdd() {
        return setscore((prev) => parseInt(prev) + 1);
    }

    function handelSubstract() {
        return setscore((prev) => prev - 1);
    }
    return (
        <div>
            {/* <h1>User: {data.user}</h1>
            <p>Score: {data.score}</p>
            <p>Created At: {data.createdAt}</p>
            <img src={avatars[data.img].img} alt="" />
            <p>Content: {data.content}</p> */}
            <div className="flex flex-col justify-center w-full">
            <div className="box gap-4 w-full flex">
                {/* Score */}
                <div className="score_ flex flex-col justify-center items-center px-2 rounded-md">
                <span onClick={handelAdd} className="cursor-pointer">
                    +
                </span>
                <span className="score">{score}</span>
                <span onClick={handelSubstract} className="cursor-pointer">
                    -
                </span>
                </div>
                {/* Information */}
                <div className="information flex flex-col">
                {/* NAV */}
                <div className="header flex justify-between w-full">
                    <div className="bg-transparent text-white flex items-center align-middle mb-2">
                    <img
                        className="rounded bg-transparent color-2 text-sm"
                        src={avatars[data.img].img}
                        alt="image_"
                    />
                    <p className="user -ml-8 capitalize">{data.user}</p>
                    <p className="text-black ml-2 createAt w-96">{data.createdAt}</p>
                    </div>
                    <div className="text-blue-700 cursor-pointer mr-2 gap-4 flex flex-nowrap">
                        {/* ADD REPLIES */}
                        
                        <button className="Delete">
                            
                            Delete
                        </button>
                        <button className="Edit">Edit</button>
                    </div>
                </div>
                {/* Content */}
                <div>
                    <p className="content">{data.content}</p>
                </div>
                </div>
            </div>

            </div>
        </div>
        );
}
