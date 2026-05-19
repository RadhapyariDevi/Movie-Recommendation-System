import React from 'react'
import MovieCard from './MovieCard'

function MovieRow({title, movies}) {
  return (
    <div>
        <h1>
            {title}
        </h1>
        <div className='flex gap-4 overflow-x-auto'>
            {movies.map((movie) => (
                <MovieCard 
                  key={movie.tmdb_id}
                  movie={movie}
                />
            ))}
        </div>
    </div>
  )
}

export default MovieRow