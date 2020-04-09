// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import ToDo from "./Todo";

const ToDoList = props => {
  return (
    <div className="ToDoList">
      {props.toDoItems.map(item => (
        <ToDo key={item.id} item={item} toggleToDoItem={props.toggleToDoItem} />
      ))}
      <button className="clear-btn" onClick = {props.clearCompleted}>Clear Completed</button>
    </div>
  );
};

export default ToDoList;
