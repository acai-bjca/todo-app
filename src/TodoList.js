import React from 'react';
import Todo from './Todo';

export class TodoList extends React.Component { 
    constructor(props) {
        super(props);
    }
    
    render(){
        const listTodo = this.props.todoList;
        const listItems = listTodo.map(
            item => <li>item</li>
        );
        return (
            <ul>{listItems}</ul>
        );
    }
}
