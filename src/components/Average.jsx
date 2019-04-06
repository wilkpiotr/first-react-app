import React, { Component } from 'react'


class Average extends Component {

    render() {
        let sum = 0;
        const arrayNumbers = this.props.numbers;
        for (let i = 0; i < arrayNumbers.length; i++ ) {
            sum += arrayNumbers[i]
        }
        const average = sum/arrayNumbers.length;
        
        return (<span>{"Average: "}{average}</span>)
    }
}

export default Average;
