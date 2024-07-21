import React from "react";

import "./styles/main.scss";
import data from "./data.json";

import avatars from "./components/avatars.json"
import Current from "./components/current";
import Comments from "./components/comments";
import Newcomment from "./components/newcomment";
import Add from "./components/add";

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


  return (
    <div className="container h-full m-2 p-3 flex flex-col justify-center items-center gap-2">
      <div className="comments flex flex-col gap-4">
        {MakeComments()}
        <Newcomment/>
      </div>

      <div className="replies"></div>
      <Current alt="CurrentImg" />
    </div>
  );
}

export default App;
