import React from 'react'
import Replies from './replies';
import avatars from './avatars.json'

export default function Reply(props) {
    let CommentUserName = ["ramsesmiron", "juliusomo"];
    function makereply()
    {
        return props.person.map((person, index) => {
            return (
                <Replies
                    person={person}
                    id={person.id}
                    score={person.score}
                    createdAt={person.createdAt}
                    replyingTo={person.replyingTo}
                    img={avatars[index+2].img}
                    content={person.content}
                    user={CommentUserName[index]}
                />
            );
        })
    }
    return (
        <div>
            {makereply()}
        </div>
        
    )
}

