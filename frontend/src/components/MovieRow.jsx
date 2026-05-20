import React from 'react'
import MovieCard from './MovieCard'

function MovieRow({movies}) {
  return (
    <div>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2'>
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