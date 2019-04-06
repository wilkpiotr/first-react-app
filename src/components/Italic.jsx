import React, { Component } from 'react'

class Italic extends Component {
    render() {
        return (<em>{this.props.children}</em>)
    }
};

export default Italic