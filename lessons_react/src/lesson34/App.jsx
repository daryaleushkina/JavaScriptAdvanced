import React, {Component} from 'react';
import {UncontrolledForm} from "./UncontrolledForm";
class App extends Component {


    render() {
        return (
            <div className="App">
                <UncontrolledForm/>
            </div>
        );
    }
}

export default App;


const countStyle = {
    margin: '0 0.75rem',
    display: 'inline-block'
}