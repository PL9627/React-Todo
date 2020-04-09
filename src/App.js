import React from "react";

import ToDoList from "./components/TodoList";
import ToDoForm from "./components/TodoForm";

const toDoItems = [
  {
    name: "Clean Bedroom",
    id: 1,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();

    this.state = {
      toDoItems
    };
  }

  addToDoItem = (e, item) => {
    e.preventDefault();

    const newItem = {
      name: item,
      id: Date.now(),
      completed: false
    };

    this.setState({
      toDoItems: [...this.state.toDoItems, newItem]
    });
  };

  toggleToDoItem = itemId => {
    this.setState({
      toDoItems: this.state.toDoItems.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();

    this.setState({
      toDoItems: this.state.toDoItems.filter(item => !item.completed)
    });
  };

  render() {
    return (
      <div>
        <div>
          <h2>To Do List</h2>
          <ToDoForm
              addToDoItem={this.addToDoItem}
            />
        </div>
        <ToDoList
            toDoItems={this.state.toDoItems}
            toggleToDoItem={this.toggleToDoItem}
            clearCompleted={this.clearCompleted}
          />
      </div>
    );
  }
}

export default App;
