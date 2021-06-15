import React, {useState, useEffect} from 'react';
import {Movies} from "../Movies";
import {Preloader} from "../Preloader"
import {Search} from "../Search";
function Main (){
    const[movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    const searchMovies = (s,type='all') => {
        setLoading(true)
        if (!s.length)
            s = 'computer'
        setMovies([])
        fetch(`http://www.omdbapi.com/?apikey=b98de2fc&s=${s}${
            type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search)
                setLoading(false)
            })
            .catch((err) => {
            console.log(err)
            setLoading(false)
        })

    }

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=b98de2fc&s=computer`)
            .then((response) => response.json())
            .then((data) => {
                    setMovies(data.Search)
                    setLoading(false)
                }
            )
            .catch((err) => {
                console.error(err);
                setLoading(false );
            });
    }, [])

    return (
        <main className='container content'>
            <Search searchMovies={searchMovies} />
            {loading ? <Preloader /> : <Movies movies={movies} />}
        </main>
    );



}

export {Main}