import React from 'react';

type AccordionPropsType = {
    title: string
    collapsed: boolean
}
export function Accordion(props: AccordionPropsType) {
    console.log('Accordion')
    return (
        <div style={{background:'rgba(0,0,0, 50%)'}}>
            <h3>{props.title}</h3>
            {props.collapsed ?  <AccordionBody /> : null}
        </div>
    )
}

function AccordionBody() {
    console.log('Accordion Body')
    return (
            <ol>
                <li>Item_1</li>
                <li>Item_2</li>
                <li>Item_3</li>
            </ol>
    )
}