import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component {    
    render(){
        const listTodo = this.props.todoList;
        const listItems = listTodo.map(
            item => <li><Todo itemTodo={item}/></li>
        );
        return (
            <ul>{listItems}</ul>
        );
    }
}
