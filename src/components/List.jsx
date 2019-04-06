import React from 'react';


const List = (props) => {
    if (props.ordered) {
        return <ol>{props.elements.map((element, index) => {return <li key={index}>{element}</li>})}</ol>
    }
    else return<ul>{props.elements.map((element, index) => {return <li key={index}>{element}</li>})}</ul> 
}

export default List;