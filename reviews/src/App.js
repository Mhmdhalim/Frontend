import React from "react";
import "./styles/main.scss";

import data from "./data.json";
import avatars from "./components/avatars.json"
import Current from "./components/current";
import Comments from "./components/comments";

function App() {
  console.log(avatars[0].img)
  // CurrentUserDate
  let currentImg = data.currentUser.image.png;
  let currentUser = data.currentUser.username;

  // Add CommentsData
  let CommentUser = [data.comments[0], data.comments[1]];
  let CommentUserName = ["amyrobson", "maxblagun"];

  // function RandomImg() {
  //   for (let i = 0; i < 5; i++) {
  //     return avatars[Math.floor(Math.random() * 5) + 1].img;
  //   }
  // }
  function MakeComments() {
    return CommentUser.map((person, index) => {

      return (
        <Comments
          person={person}
          id={person.id}
          score={person.score}
          createdAt={person.createdAt}
          // img={RandomImg()}
          user={CommentUserName[index]}
          content={person.content}
          // Empty or not, have som replies !?
          replyuser={data.comments[index].replies.length ? true : false}
        />
      );
    });
  }

  return (
    <div className="container h-full m-2 p-3 flex flex-col justify-center items-center gap-2">
      <div className="cmments flex flex-col gap-4">{MakeComments()}</div>
      
      <div className="replies"></div>
      <Current img={currentImg} alt="CurrentImg" user={currentUser} />
    </div>
  );
}

export default App;
