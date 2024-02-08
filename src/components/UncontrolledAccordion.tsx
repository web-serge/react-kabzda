import React, {useState} from 'react';

type AccordionPropsType = {
    title: string
}

const ButtonStyle = {
    padding: '5px 10px',
    background: 'silver',
    cursor: 'pointer',
    borderRadius: '10px',
    margin: '10px',
    display: 'inline-block'
}
export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('Accordion')
    let [shrink, setShrink] = useState<boolean>(false)
    function toggleCollapsed() {
        setShrink(!shrink)
    }
    return (
        <div style={{background:'rgba(0,0,0, 50%)'}}>
            <h3 style={ButtonStyle} onClick={toggleCollapsed}>{props.title}</h3>
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