import React, { useState, useEffect } from 'react'
import PopularMovies from '../sections/PopularMovies'
import { fetchHome, searchMovie } from '../services/api'
import SearchBar from '../components/SearchBar'
import Hero from '../sections/Hero'

function Home() {
  const [popular, setPopular] = useState([])
  const [trending, setTrending] = useState([])
  const [searchResults, setSearchResults] = useState(null)

  async function loadHome(){
    try{
      const popularMovies = await fetchHome("popular")
      const trendingMovies = await fetchHome("trending")
      setPopular(popularMovies)
      setTrending(trendingMovies)
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
           <div className='flex gap-6 mb-8'>
              <img
                src={searchResults.movie_details.poster_url}
                alt=""
                className='w-62.5 h-95 object-cover rounded-xl'
               />
               <div>
                <h2 className='text-2xl font-bold mb-4'>
                   {searchResults.movie_details.title}
                </h2>
                <p className='text-gray-300 mt-4'>
                  {searchResults.movie_details.overview}
                </p>
               </div>
           </div>
        </div>
      )}

      <PopularMovies 
        movies={popular}
      />

      
    </div>
  )
}

export default Home