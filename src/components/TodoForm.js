import React from "react";
import styled from 'styled-components';

const Btn = styled.button`
    margin: 0 2%;
    border: 1px solid red;
    border-radius: 5px;
    color: red;

    &:hover {
        color: white;
        background-color: red;
    }
`;

class ToDoForm extends React.Component {
  constructor() {
    super();

    this.state = {
      item: ""
    };
  }

  handleChanges = e => {
      
    this.setState({ [e.target.name]: e.target.value });
  };

  submitItem = e => {
    e.preventDefault();

    this.setState({ item: "" });

    this.props.addToDoItem(e, this.state.item);
  };

  render() {
    console.log(this.state.item)
    return (
      <form onSubmit={this.submitItem}>
        <input
          type="text"
          name="item"
          value={this.state.item}
          onChange={this.handleChanges}
        />
        <Btn>Add To Do Item</Btn>
      </form>
    );
  }
}

export default ToDoForm;
