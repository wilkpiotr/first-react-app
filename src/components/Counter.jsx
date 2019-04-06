import React, { Component } from 'react';


class Counter extends Component {

    state = {   i: 0,
        disabled: true};

   
    handleClickAdd =(e) => {
        this.setState((state) => {    
            return {disabled: false, 
                i: this.state.i + 1};
        })
    };
    handleClickSubs =(e) => {
        this.setState((state) => {
            if (this.state.i === 1) {
                return {i: this.state.i - 1,
                disabled: true}
            } else 
            return {i: this.state.i - 1}
        })
    };

    render() {
    return(<div>
        <button onClick={this.handleClickAdd}>Add</button>
        <span>Counter:{this.state.i}</span>
        <button id="btn" disabled={this.state.disabled} onClick={this.handleClickSubs}>Substract</button>
    </div> )
    }
}




export default Counter;