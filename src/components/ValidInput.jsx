import React, { Component } from 'react';



class ValidInput extends Component{

    state = {   error: 'err occured' }

   
    handleBlur = (e) => {
        const value = e.target.value;
        this.setState(state => {
            if (value === "") {
                return {error: 'Field is Required'}
            } 
            return  {error: ''}

        })
    
    }

    render() {
    return(<div>
        <div><label>{this.props.label}</label></div>
        <input type="text" onBlur={this.handleBlur}/>
        <div><label>{this.state.error}</label></div>
    </div> )
    }
}




export default ValidInput;