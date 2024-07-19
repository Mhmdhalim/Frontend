import React, { useState } from "react";
import avatars from "./avatars.json";
import Add from "./add";

export default function Current() {
    // handel for changing the image
    const [currentindex, setcurrentindex] = useState(1);
    let index_ = currentindex - 1;

    function handelAdd() {
        if (currentindex === 4) {
        setcurrentindex(currentindex - 4);
        }
        return setcurrentindex((prev) => parseInt(prev) + 1);
    }

    // Add a new comment
    const [formData, setFormData] = useState(["", ""]);

    // Update the first value
    const handleInputChange = (event) => {
        const newFormData = [...formData];
        newFormData[0] = event.target.value;
        setFormData(newFormData);
    };

    // Update the second value
    const handleTextAreaChange = (event) => {
        const newFormData = [...formData];
        newFormData[1] = event.target.value;
        setFormData(newFormData);
    };

    // current date
    const currentDate = new Date().toLocaleDateString();
    // const now = new Date();
    // const past = new Date(pastDate);

    // const differenceInMilliseconds = now - past;
    // const differenceInDays = Math.floor(
    //   differenceInMilliseconds / (1000 * 60 * 60 * 24)
    // );

    // let timeAgo;

    // if (differenceInDays > 0) {
    //     timeAgo = `${differenceInDays} day${differenceInDays > 1 ? "s" : ""} ago`;
    // } else {
    //     timeAgo = "Today";
    // }

    // State to control whether to show the child component
    const [showChild, setShowChild] = useState(false);
    function handelclick() {
        setShowChild(!showChild);
    }

    return (
        <div className="box current flex justify-evenly align-middle gap-0 w-full h-auto">
        <div className="w-1/12 bg-white text-white">
            <img
            className={`cursor-pointer currentimg ${
                currentindex === index_ ? "transformed" : ""
            }`}
            onClick={handelAdd}
            src={avatars[currentindex].img}
            alt="img"
            />
        </div>
        <div className="input__ w-9/12 flex flex-col justify-center align-middle content-center gap-3">
            <input
            id="input"
            type="text"
            value={formData[0]}
            onChange={handleInputChange}
            placeholder="Author"
            />
            <textarea
            className="mx-2 "
            value={formData[1]}
            onChange={handleTextAreaChange}
            placeholder="Add a comment..."
            ></textarea>
        </div>
        <button
            onClick={handelclick}
            className="addbutton cursor-pointer  w-20 h-12 bg-blue-700 hover:bg-blue-300 text-white font-bold text-sm  rounded uppercase ease-out duration-700 hover:scale-110 -ml-4"
        >
            send
        </button>
        {showChild && (
            <Add
                user={formData[0]}
                score="0"
                createdAt={currentDate}
                img={avatars[currentindex].img}
                content={formData[1]}
                />
        )}
        </div>
    );
}
