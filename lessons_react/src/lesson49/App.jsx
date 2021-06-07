import React, {useState, useEffect} from 'react';
import {Clicker} from './Clicker'

function App(){
    const [isClicker, setClicker] = useState(false)

    return (
        <div className="App">
            <h2>React App</h2>
            <button onClick={() => setClicker(!isClicker)}>
                Добавить кликер
            </button>
            {isClicker && <Clicker />}
        </div>
    )
}
export default App;
