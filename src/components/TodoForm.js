import React from "react";

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
        <button>Add To Do Item</button>
      </form>
    );
  }
}

export default ToDoForm;
