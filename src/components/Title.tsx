import React from 'react';

export function Title (props: {title: string}) {
    console.log('Title')
    return (
        <h1>{props.title}</h1>
    )
}