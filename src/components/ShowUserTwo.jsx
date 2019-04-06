import React from 'react';


const ShowUserTwo = (props) => {

        let tittle;
        if (props.gender === "man") {
            tittle = "Mr"
        } else tittle = "Mrs"

        return(<div><p>{tittle}{" "}{props.name}{" "}{props.lastname}</p></div> )
}

export default ShowUserTwo;

