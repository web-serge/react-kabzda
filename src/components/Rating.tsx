import React from 'react';

type StarPropsType = {
    num: 1 | 2 | 3 | 4 | 5
}
export const Rating: React.FC<StarPropsType> = (props) => {
    const arr: Array<string> = []
    for (let i = 1; i <= 5; i++) {
        i <= props.num ?  arr.push(' 🙂 ') : arr.push(` ☹ `)
    }
    console.log(arr)

    if (arr.length > 0) {
        return (
            <div>
                {arr.map(el => {
                    return (
                        <span key={Math.random()}>{el}</span>
                    )
                })}
            </div>
        )
    } else return null
}