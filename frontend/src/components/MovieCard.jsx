import React from 'react'

function MovieCard({movie}) {
  return (
    <div className = "w-45 shrink-0">
        <img 
            src={movie.poster_path}
            alt={movie.title}
            className='rounded-xl'
        />
        <h2 className='mt-2 font-semibold text-white'>
            {movie.title}
        </h2>

        <p className='text-gray-400 text-sm'>
            {movie.vote_average}
        </p>
    </div>
  )
}

export default MovieCard