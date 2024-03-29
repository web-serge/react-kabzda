import React, {useState} from 'react';

type AccordionPropsType = {
    title: string
    shrink: boolean
}
export function Accordion(props: AccordionPropsType) {
    console.log('Accordion')
    let [shrink, setShrink] = useState(props.shrink || false)
    function toggleCollapsed() {
        setShrink(!shrink)
    }
    return (
        <div style={{background:'rgba(0,0,0, 50%)'}}>
            <h3>{props.title}</h3>
            <button onClick={toggleCollapsed}>open/close</button>
            {shrink &&  <AccordionBody />}
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