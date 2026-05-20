import React from 'react'
import MovieCard from './MovieCard'

function MovieRow({title, movies}) {
  return (
    <div>
        <h1 className='p-4 pl-0 text-2xl'>
            {title}
        </h1>
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