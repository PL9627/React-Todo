import React from "react";
import styled from 'styled-components';

const Card = styled.p`
    width: 10%;
    border: 1px solid blue;
    text-align: center;
    padding: 5px;
    border-radius: 5px;
    color: blue;
`;

const ToDo = props => {
  return (
    <div
      className={`item${props.item.completed ? " completed" : ""}`}
      onClick={() => props.toggleToDoItem(props.item.id)}
    >
      <Card>{props.item.name}</Card>
    </div>
  );
};

export default ToDo;
