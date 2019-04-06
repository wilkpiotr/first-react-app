import React, { Component } from 'react';

 

class UserTable extends Component {

    
    render() {
    return(<table><tbody>
        {this.props.elements.map((element, index) => {
            return <tr key={index}><td>{element.name}</td>
            <td>{element.lastname}</td>
            <td>{element.gender}</td></tr>
        })}
        </tbody></table> )
        }
}

export default UserTable;

