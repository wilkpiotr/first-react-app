import React, { Component } from 'react';


class MultiCheckbox extends Component{

    // state = {   class: 'hide' }

   
    // handleClick =(e) => {
    //     // console.log(this.state.class)
    //     // this.setState((state) => {
    //     //     if (this.state.class === 'hide') {
    //     //     return { class: 'show'};}
    //     //     else return {class: 'hide'}
    //     })
    // }

    render() {
    return(<div>
        {this.props.checks.map((box, index) => {
            return <div key={index}><input type="checkbox"/>
            <label name={box.name}>{box.label}</label>
            </div>
        })
        }
    </div> )
    }
}




export default MultiCheckbox;