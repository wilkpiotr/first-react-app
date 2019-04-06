import React from 'react';

const OverLimit = (props) => {
    let information = props.value > props.limit ? "You are above limit!" : "You are below limit!"
    return props.limit && <div>{information}</div>
}

export default OverLimit;