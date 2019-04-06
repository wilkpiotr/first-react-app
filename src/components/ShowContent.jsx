import React from 'react';


const ShowContent = (props) => {

        let content;
        if (props.propsShow === true) {
            content = props.children
        }

        return(<div><p>{content}</p></div> )
}

export default ShowContent;