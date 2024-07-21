import React from "react";
import { useState } from "react";
import "./styles/main.scss";
import data from "./data.json";
import Add from "./components/add";
import avatars from "./components/avatars.json"
import Current from "./components/current";
import Comments from "./components/comments";



function App() {
  // Add CommentsData
  let CommentUser = [data.comments[0], data.comments[1]];
  let CommentUserName = ["amyrobson", "maxblagun"];

  function MakeComments() {
    return CommentUser.map((person, index) => {
      return (
        <Comments
          person={person}
          id={person.id}
          score={person.score}
          createdAt={person.createdAt}
          img={avatars[index].img}
          user={CommentUserName[index]}
          content={person.content}
          // Empty or not, have some replies !?
          replyuser={data.comments[index].replies.length ? true : false}
        />
      );
    });
  }
    // State to hold data from child component
    const [data1, setData] = useState(null);

    // Handler function to receive data from child
    const handleDataExport = (exportedData) => {
      setData(exportedData);
    };

  return (
    <div className="container h-full m-2 p-3 flex flex-col justify-center items-center gap-2">
      <div className="comments flex flex-col gap-4">
        {MakeComments()}
        <>
          <Add data={data1} />
        </>
      </div>
      <Current onExport={handleDataExport} />
    </div>
  );
}

export default App;
