import React, { useState } from 'react'
import MovieCard from '../components/MovieCard'

function PopularMovies({ movies }) {

  const [showAll, setShowAll] = useState(false)

  const displayedMovies = showAll
    ? movies
    : movies.slice(0, 6)

  return (
    <div>
      <div className='flex items-baseline justify-between mb-5'>

        <h2
          className="text-xl font-bold text-snow"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Popular Now🔥
        </h2>

        <button
          onClick={() => setShowAll(!showAll)}
          className="text-[12px] uppercase tracking-wider text-sand hover:text-snow transition-colors"
        >
          {showAll ? "Show Less ↑" : "See All →"}
        </button>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {displayedMovies.map((movie) => (
          <MovieCard
            key={movie.tmdb_id}
            movie={movie}
          />
        ))}
      </div>
    </div>
  )
}

export default PopularMovies