import React from 'react';

const ToDo = props => {
    console.log("ToDo props:", props)
    return(
        <div
        classname = {`item${props.item.completed ? "completed" : ""}`}
        onClick = {() => props.toggleToDoItem(item.id)}
        >
            <p>{props.item.name}</p>
        </div>
    )
};

export default ToDo;