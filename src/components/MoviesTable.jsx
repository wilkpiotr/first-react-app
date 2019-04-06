import React from 'react';

 

const MoviesTable = (props) => {
    
    const sorted = props.elements.sort((a,b) => {
        // if (props.sortBy === "title") {
        //     return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)
        // }
        if (props.sortBy === "title") {
            return props.sortOrder === "asc" ? ((a.title < b.title) ? -1 : 1) : ((a.title > b.title) ? -1 : 1)
        }
        if (props.sortBy === "productionYear") {
            return props.sortOrder === "asc" ? a.productionYear - b.productionYear : b.productionYear - a.productionYear
        } 
        else return props.sortOrder === "asc" ? a.boxOffice - b.boxOffice : b.boxOffice - a.boxOffice  
    });

    const table =  sorted.map((film, index) => {
        return <tr key={index}><td>{film.title}</td>
        <td>{film.productionYear}</td>
        <td>{parseFloat(film.boxOffice).toFixed(2)}{" USD"}</td></tr>
    })  

    
    
    return(<table><tbody>
        {table}
        </tbody></table> )
}


export default MoviesTable;

