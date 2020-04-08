import React from 'react';

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
    }

    submitItem = e => {
        e.preventDefault();

        this.setState({item: ""});

        this.props.addToDoItem(e, this.state.item);
    };

    render() {}
};

export default ToDoForm;