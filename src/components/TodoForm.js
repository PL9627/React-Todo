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

    console.log(this.state.item);
  };

  submitItem = e => {
    e.preventDefault();

    this.setState({ item: "" });

    this.props.addToDoItem(e, this.state.item);
  };

  render() {
    console.log("ToDoForm Props:", this.props);

    return (
      <form onSubmit={this.submitItem}>
        <input
          type="text"
          name="To Do Item..."
          value={this.state.item}
          onChange={this.handleChanges}
        />
        <button>Add To Do Item</button>
        <button className="clear-btn">Clear Completed</button>
      </form>
    );
  }
}

export default ToDoForm;
