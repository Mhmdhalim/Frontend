import React from 'react'
import Replies from './replies';

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
                    img={person.user.image.png}
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

