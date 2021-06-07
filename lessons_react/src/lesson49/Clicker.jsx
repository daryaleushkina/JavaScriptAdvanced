import React, {useState, useEffect} from 'react';

function Clicker() {
    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(false)
    const incrementCount = () => {
        setCount(count + 1)
    }
    const decrementCount = () => {
        setCount(count - 1)
    }
    useEffect(()=>{
        console.log('Hello from clicker!', count)

        return () => {
            console.log('goodbye clicker')
        }
    }, [count])
    return (
        <div className="App">
            <button onClick={decrementCount}>
                -
            </button>
            <span style={{display: 'inline-block', margin: '0 0.5rem'}}>{count}</span>
            <button onClick={incrementCount}>
                +
            </button>
        </div>
    )
}
export {Clicker}
