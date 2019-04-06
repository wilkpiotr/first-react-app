import React, { Component } from 'react'

class Badge extends Component {
    render() {
        return (<div className="container">
            <label>{this.props.label}</label>
            <div className="insider">{this.props.value}</div>
        </div>)
    }
};

export default Badge;
