import React, { Component } from 'react';



class Collapse extends Component{

    state = {   class: 'hide' }

   
    handleClick =(e) => {
        console.log(this.state.class)
        this.setState((state) => {
            if (this.state.class === 'hide') {
            return {class: 'show'}}
            else return {class: 'hide'}
        })
    }

    render() {
    return(<div>
        <button href="blank" onClick={this.handleClick}>{this.props.title}</button>
        <span className={this.state.class}>{this.props.desc}</span>
    </div> )
    }
}




export default Collapse;