import React from 'react';
import Newcomment from './newcomment';

export default function Add(props) {
    
    return (
        <Newcomment
        user={props.user}
        score="0"
        createdAt={props.createdAt}
        img={props.img}
        content={props.content}
        />
    )
}
