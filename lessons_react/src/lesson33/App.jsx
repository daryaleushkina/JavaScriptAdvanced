import React, {Component} from 'react';
import {FormWithRef} from "./FormWithRef";
class App extends Component {


    render() {
        return (
            <div className="App">
                <FormWithRef/>
            </div>
        );
    }
}

export default App;


const countStyle = {
    margin: '0 0.75rem',
    display: 'inline-block'
}