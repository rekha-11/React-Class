import React,{ useState } from 'react';
import Movie from './Movie';

export default function Movies() {
    const [movies, setMovie] = useState([
        {name: 'Avanger', price:'100', is: '111'},
        {name: 'GOT', price:'150', is: '222'},
        {name: 'Avanger', price:'100', is: '333'}
    ]);

    return (
        <div>
            {movies.map(movie => (
                <Movie name= {movie.name} price= {movie.price} is = {movie.is}/>
            ))}
        </div>
    )
}
