import React, { Component } from 'react';


class Button extends Component {
    
   handleClick =(e) => {
       console.log('click');
   }
    render() {
    return(<div><button onClick={this.handleClick}>
        Click Me
        </button></div> )
        }
}


export default Button;