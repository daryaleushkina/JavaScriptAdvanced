import React, {useState} from "react";

function Search({cb = Function.prototype}) {
    const [value,setValue] = useState('')

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit()
        }
    }

    const handleSubmit = () => {
        cb(value)
    }
    return <div className='row'>
        <div className='input-field col s12'>
            <input
                type='search'
                placeholder='Search'
                value={value}
                onKeyDown={handleKey}
                onChange={(e) => setValue(e.target.value)}
            />
            <button
                className='btn search-btn'
                onClick={handleSubmit}
            >Search</button>
        </div>
    </div>
}

export {Search}
