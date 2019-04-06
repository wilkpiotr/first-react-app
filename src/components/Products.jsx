import React from 'react';
import PropTypes from 'prop-types';


 

const Products = (props) => {

    let sum = 0;
    props.products.forEach(element => {
        sum += element.price;
        return sum
    });    
    
    return(<table><tbody>
        {props.products.map((product, index) => {
            return <tr key={index}><td>{product.name}</td>
            <td>{product.price}</td></tr>
        })}
        <tr><td colSpan="2" style={{textAlign: 'right'}}>{sum}</td></tr>
        </tbody></table> )
}

Products.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    })).isRequired,
}


export default Products;