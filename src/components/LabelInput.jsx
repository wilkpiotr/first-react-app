import React, { Component } from 'react'

class LabelInput extends Component {
    render() {
        return (<div>
            <label style={{display: 'block'}}>{this.props.label}</label>
            <input type="text"></input>
            {this.props.children}
        </div>)
    }
};

export default LabelInput