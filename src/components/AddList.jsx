import React, { Component } from 'react';


 

class AddList extends Component{

    state = {list: ['Mariola']}

    handleClick =(e) => {
        const value = e.target.previousElementSibling.value;

        this.setState((state) => {
            const newList = [...state.list];
            newList.push(value)
            return {
                list: newList
            }
        })
        e.target.previousElementSibling.value = ""
    }

    render() {
    return(<div>
        <div><input type="text"/>
            <button onClick={this.handleClick}>ADD</button></div>
            <div>
                <ul>
                    {this.state.list.map((el, index) => {
                        return <li key={index}>{el}</li>
                    })}
                </ul>
            </div>
        </div> )
    }
}




export default AddList;