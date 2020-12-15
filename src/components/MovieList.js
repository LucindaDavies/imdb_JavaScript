import { useLayoutEffect } from 'react'
import Movie from './Movie'

const MovieList = ({movies}) => {

    const movieNodes = movies.map(movies => {
        return (
            <ul>
                <li>
                    <a href={movies.url}><Movie movie={movies.name} key={movies.id}></Movie></a>
                </li>
            </ul>
        )
    })

    return(
        <>
            {movieNodes}

        </>
    )



}


export default MovieList