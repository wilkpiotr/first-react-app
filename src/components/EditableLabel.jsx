import React, { Component } from 'react';



class EditableLabel extends Component{

    state = {   value: 'ŻONA TO NIE ZOŁZA' }

    handleDoubleClick =(e) => {
        const label = document.querySelector('label')
        const input = document.querySelector('input')
        label.classList.replace('show', 'hide')
        input.classList.replace('hide', 'show')
    }

    handleBlur = (e) => {
        console.log('blur')
        const label = document.querySelector('label')
        const input = document.querySelector('input')
        this.setState((state) => {
            return {value: input.value}
        })
        label.classList.replace('hide', 'show')
        input.classList.replace('show', 'hide')
    }

    render() {
    return(<form>
        <label className="show" onDoubleClick={this.handleDoubleClick}>{this.state.value}</label>
        <input className="show" onBlur={this.handleBlur} defaultValue={this.state.value} />

    </form> )
    }
}




export default EditableLabel;