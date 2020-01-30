import React from 'react';
import ReactDOM from 'react-dom';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        return (
            <div>
                <h2>{this.props.text} </h2>
                <h2>{this.props.priority}</h2>
                <h2>{this.props.dueDate}</h2>
            </div>
        );
    }

}


ReactDOM.render(<Todo/>, document.getElementById('root'))
//export default App;
