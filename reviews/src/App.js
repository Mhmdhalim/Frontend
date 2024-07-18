import React from "react";
import "./styles/main.scss";

import data from "./data.json";
import Current from "./components/current";
import Comments from "./components/comments";
import Reply from "./components/reply";

function App() {
  // CurrentUserDate
  let currentImg = data.currentUser.image.png;
  let currentUser = data.currentUser.username;
  console.log(data.comments[0].user);
  // Add CommentsData
  let CommentUser = [data.comments[0], data.comments[1]];
  let CommentUserName = ["amyrobson", "maxblagun"];

  function MakeComments() {
    return CommentUser.map((person, index) => {
      return (
        <Comments
          id={person.id}
          score={person.score}
          createdAt={person.createdAt}
          img={person.user.image.png}
          user={CommentUserName[index]}
          content={person.content}
        />
      );
    });
  }

  return (
    <div className="container h-full m-2 p-3 flex flex-col justify-center items-center gap-2">
      {MakeComments()}
      <div className="replies"></div>
      <Current img={currentImg} alt="CurrentImg" user={currentUser} />
    </div>
  );
}

export default App;
