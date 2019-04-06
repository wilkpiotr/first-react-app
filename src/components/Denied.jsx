import React, { Component } from 'react';



class Denied extends Component {
    render() {
        let secret = this.props.denied === true ? "Access denied" : this.props.secret
        
        return(<p>{secret}</p>)
    }
}

export default Denied;