import React, { Component } from 'react';


class ShowContent2 extends Component {
    render() {
    return (<div>
        {this.props.show && <span>{this.props.children}</span>}</div>)
    }
}

export default ShowContent2;