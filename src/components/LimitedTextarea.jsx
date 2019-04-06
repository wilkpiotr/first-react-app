import React, { Component } from 'react';


class LimitedTextarea extends Component {

    state = {   disabled: false }

   
    handleChange =(e) => {
        // this.setState


        this.setState((state) => {
            if (this.state.class === 'hide') {
            return { class: 'show'};}
            else return {class: 'hide'}
        })
    }

    render() {
    return(<div>
        <textarea disabled={this.state.disabled} name="xyz" id="xyz" cols="30" rows="10" onChange={this.handleChange}></textarea><br/>
        <label>Number of characters is: /{this.props.limit}</label>
    </div> )
    }
}




export default LimitedTextarea;