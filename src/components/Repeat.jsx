import React from 'react';


const Repeat = (props) => {
    const arr= [];
    // let content = (<div><p>{props.children}</p></div>)
    for (let i = 0; i < props.count; i++) {
        arr.push(props.children)
    } return <div><p>{arr}</p></div>
    
}

export default Repeat;