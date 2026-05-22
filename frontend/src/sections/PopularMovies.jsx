import React, { useState } from 'react'
import MoviePoster from '../components/MoviePoster'
import { searchMovie } from '../services/api'

function PopularMovies({ movies, onMovieSelect }) {

  const [showAll, setShowAll] = useState(false)

  const displayedMovies = showAll
    ? movies
    : movies.slice(0, 6)

  async function handleMovieClick(movieTitle){
    try{
      const data = await searchMovie(movieTitle)
      onMovieSelect(data)
    }
    catch(err){
      console.log(err)
    }
}


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
          className="text-lg uppercase tracking-wider text-sand hover:text-snow transition-colors"
        >
          {showAll ? "Show Less ↑" : "See All →"}
        </button>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {displayedMovies.map((movie) => (

          <div
            key={movie.tmdb_id}
            onClick={() => handleMovieClick(movie.title)}
            className="
              group
              cursor-pointer
              transition-all duration-300
              hover:-translate-y-2
            "
          >

            {/* Poster */}
            <div className="overflow-hidden rounded-2xl border border-sand/10">

              <MoviePoster
                src={movie.poster_url}
                alt={movie.title}
                className="
                  w-full
                  h-[320px]
                  object-cover
                  group-hover:scale-105
                  transition-transform duration-300
                "
              />

            </div>

            {/* Title */}
            <h3 className="mt-3 text-sm text-snow font-medium truncate">
              {movie.title}
            </h3>

            {/* Rating */}
            <p className="text-sand text-xs mt-1">
              ★ {movie.vote_average?.toFixed(1) || "N/A"}
            </p>

          </div>
        ))}

      </div>
    </div>
  )
}

export default PopularMovies