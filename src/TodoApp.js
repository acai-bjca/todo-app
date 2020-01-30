import React from 'react';
import {TodoList} from './TodoList';
import './App.css';

class TodoApp extends React.Component {
    guardar(){
        
    }

    constructor(props) {
        super(props);
        this.state = { items: [], text: '', priority: '', date:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <h3>TODO</h3>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="text">
                        Text
                    </label>
                    <input
                        id="text"
                        onChange={this.handleChange}
                        value={this.state.text}
                    /> <br/><br/>

                    <label htmlFor="priority">
                        Priority
                    </label>
                    <input
                        id="priority"
                        onChange={this.handleChange}
                        value={this.state.priority}
                    /><br/><br/>

                    <label htmlFor="date">
                        Date
                    </label>
                    <input
                        type= "date"
                        id="date"
                        onChange={this.handleChange}
                        value={this.state.date}
                    /><br/><br/>

                    <button>
                        Add #{this.state.items.length + 1}
                    </button>
                </form>
            </div>
        );
    }

    handleChange(e) {
        if(e.target.id === 'text'){
            this.setState({text: e.target.value });
        }else if(e.target.id === 'priority'){
            this.setState({priority: e.target.value});
        }else if(e.target.id === 'date'){
            this.setState({date: e.target.value});
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            date: this.state.date,
            id: Date.now()
        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            date: ''
        }));
    }
}
export default TodoApp;