import React, {useState} from 'react'
import {Main} from "./layot/Main";
function Search(props){
    const {
        searchMovies = Function.prototype,
    } = props
    const [search, setSearch] = useState('')
    const [type, setType] = useState('all')

    const handleChange = (event) => {
        setSearch(event.target.value)
    }
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            searchMovies(search, type);
        }
    }
    const handleFilter = (event) => {
        setType(event.target.value)
        searchMovies(search, event.target.value)
    }

    return <div className="row">
            <div className="input-field">
                <input
                    placeholder='Search'
                    type="search"
                    className="validate"
                    name="search"
                    value={search}
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}
                />
                <button className='btn search-btn' onClick={() =>searchMovies(search)} >Search</button>
            </div>
        <label>
            <input value="all"
                   name='type'
                   type="radio"
                   onChange={handleFilter}
                   checked = {type==="all"}/>
            <span>All </span>
        </label>
        <label>
            <input value="movie"
                   name='type'
                   type="radio"
                   onChange={handleFilter}
                   checked = {type === "movie"}/>
            <span>Movie </span>
        </label>
        <label>
            <input value="series"
                   name='type'
                   type="radio"
                   onChange={handleFilter}
                   checked = {type==="series"} />
            <span>Series </span>
        </label>
        </div>

}
export {Search}