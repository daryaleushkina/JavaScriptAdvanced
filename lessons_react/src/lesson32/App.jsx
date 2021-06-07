import React, {Component} from 'react';
import {Form} from "./Form";
class App extends Component {


    render() {
        return (
            <div className="App">
                <Form/>
            </div>
        );
    }
}

export default App;


const countStyle = {
    margin: '0 0.75rem',
    display: 'inline-block'
}