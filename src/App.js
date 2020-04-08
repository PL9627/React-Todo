import React from 'react';

const toDoItems = [
  {
    task: "Clean Bedroom",
    id: 1,
    completed: false
  },
  {
    task: "Make Dinner",
    id: 2,
    completed: false
  },
  {
    task: "Change Engine Oil",
    id: 3,
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
    console.log("First To Do Item:", this.state.toDoItems);

    e.preventDefault();

    const newToDoItem = {
      task: item,
      id: Date.now(),
      completed: false
    };

    this.setState({
      toDoItems: [...this.state.toDoItems, newToDoItem]
    });

    console.log("Second To Do Item:", this.state.toDoItems);
  }

  toggleToDoItem = itemId => {
    console.log(itemId);

    this.setState({
      toDoItems: this.state.toDoItems.map(item => {
        if (itemId === item.id) {
          return {
            ...item, completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
