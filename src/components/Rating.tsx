import React, {useState} from 'react';

type StarPropsType = {
    num: 1 | 2 | 3 | 4 | 5
}
export const Rating: React.FC<StarPropsType> = (props) => {
    let [number, setNumber] = useState<number>(0)

    const arr: Array<string> = []
    for (let i = 1; i <= 5; i++) {
        i <= number ? arr.push(' 🙂 ') : arr.push(` ☹ `)
    }

    const spanStyle = {
        cursor: 'pointer',
        transition: '50ms',
        margin: '0 1px',
        display: 'inline-block',
        fontSize: '40px',
        color: 'crimson'
    }
    function onclickButtonhandler() {
        setNumber(0)
    }
    if (arr.length > 0) {
        return (
            <div style={{padding: '30px 50px', backgroundColor: 'lightblue'}}>
                <h3>Click rating</h3>
                {arr.map((el, idx) => {
                    return (
                        <span style={spanStyle}
                              key={Math.random()}
                              onClick={() => setNumber(idx += 1)}>
                            {el}
                        </span>
                    )
                })}
                <button onClick={onclickButtonhandler} style={{display: 'block'}}>Clear rating</button>
            </div>
        )
    } else return null
}