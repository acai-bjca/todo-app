import React from 'react';
import ReactDOM from 'react-dom';

export class Todo extends React.Component {
    constructor(props) {
        super(props);
    }   

    render() {
        return (
            <div>
                <h2>{this.props.itemTodo.text} </h2>
                <h2>{this.props.itemTodo.priority}</h2>
                <h2>{this.props.itemTodo.date.toString()}</h2>
            </div>
        );
    }

}

//export default App;
