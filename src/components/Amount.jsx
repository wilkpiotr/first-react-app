import React, { Component } from 'react'; 

class Amount extends Component {

    render() {
        return(<p>{parseFloat(this.props.value).toFixed(2)}{" USD"}</p>)
    }
}


export default Amount;