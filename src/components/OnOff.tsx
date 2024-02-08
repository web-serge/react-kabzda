import React, {useState} from 'react';

export const OnOff = () => {
    let [ color, setColor ] = useState<boolean>(false)
    function open() {
        if (!color) return setColor(color = true)
    }

    function close() {
        if (color) return setColor(color = false)
    }
    let containerStyle = {
        display: 'flex',
        gap: '10px',
        alignItems: 'center'
    }
    let on = {
        background: 'green'
    }
    let off = {
        background: 'crimson'
    }

    let circleStyle = {
        padding: '30px',
        backgroundColor: color ? 'lightgreen' : 'crimson',
        display:'inline-block',
        borderRadius:'50%',
    }
    return (
        <div style={containerStyle}>
            <button onClick={open} style={color ? on : off}>ON</button>
            <button onClick={close} style={color ? off : on}>OFF</button>
            {color && <div style={circleStyle}></div>}
            {!color && <div style={circleStyle}></div>}
        </div>
    );
};