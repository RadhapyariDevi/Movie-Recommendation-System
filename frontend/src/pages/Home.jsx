import React, { useState, useEffect } from 'react'
import PopularMovies from '../sections/PopularMovies'
import { fetchHome, searchMovie } from '../services/api'
import SearchBar from '../components/SearchBar'
import Hero from '../sections/Hero'
import MovieDetail from '../components/MovieDetails'

function Home() {
  const [popular, setPopular] = useState([])
  const [searchResults, setSearchResults] = useState(null)

  async function loadHome(){
    try{
      const popularMovies = await fetchHome("popular")
      setPopular(popularMovies)
    }
    catch(err){
      console.log(err)
    }
  }

  async function handleSearch(query){
    try{
      const data = await searchMovie(query)
      setSearchResults(data)
    }
    catch(err){
      console.log(err)
    }
    
  }

  useEffect(() => {
    loadHome()
  }, [])

  return (
    <div className="w-full mx-auto px-6 pb-16 bg-ink">
      <Hero />

      <SearchBar onSearch={handleSearch}/>

      {searchResults && (
        <div className='mb-12'>
           <MovieDetail movie={searchResults.movie_details } />
        </div>
      )}

      <PopularMovies 
        movies={popular}
        onMovieSelect={setSearchResults}
      />

      
    </div>
  )
}

export default Home