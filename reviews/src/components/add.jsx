import React from 'react';
import Newcomment from './newcomment';

export default function Add(props) {
    
    if (!props.show)
    {
        return null
    } else if (!props.user)
    {
        return null
    }
        console.log(props);
    return (
        <>
            <h1>jl</h1>
        </>
    )
}
