import React, { Component } from 'react'

class Difference extends Component {

    render() {
        let result = this.props.value - this.props.substractedValue;
        let style = {color: 'green'};
        if (result < 0 ) {
            style.color = 'red';
        }
        if (result === 0 ) {
            style.color = 'gray';
        }
        

        return (<div style={style}>{result}</div>)
    }
}

export default Difference;