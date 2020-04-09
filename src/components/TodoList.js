// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import styled from 'styled-components';

import ToDo from "./Todo";

const Bttn = styled.button`
    color: green;
    border: 1px solid green;
    border-radius: 5px;

    &:hover{
        background-color: green;
        color: white;
    }
`;

const ToDoList = props => {
  return (
    <div className="ToDoList">
      {props.toDoItems.map(item => (
        <ToDo key={item.id} item={item} toggleToDoItem={props.toggleToDoItem} />
      ))}
      <Bttn className="clear-btn" onClick = {props.clearCompleted}>Clear Completed</Bttn>
    </div>
  );
};

export default ToDoList;
