import React, { Component } from 'react'


class Max extends Component {
    render() {
        const array = this.props.numbers;
        let max = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        
        return (<div>{max}</div>)
    }
}

export default Max;
