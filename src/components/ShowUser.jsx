import React, { Component } from 'react';

class ShowUSer extends Component {
    render() {
        let tittle = this.props.gender === "man" ? "Mr." : "Mrs.";
        return(<div><p>{tittle}{" "}{this.props.name}{" "}{this.props.lastname}</p></div>)
    }
}

export default ShowUSer;