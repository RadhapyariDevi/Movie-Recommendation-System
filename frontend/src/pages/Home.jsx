import React, { useState, useEffect } from 'react'
import MovieRow from '../components/MovieRow'
import { fetchHome } from '../services/api'

function Home() {
  const [popular, setPopular] = useState([])
  const [trending, setTrending] = useState([])
  

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

  useEffect(() => {
    loadHome()
  }, [])

  return (
    <div>
      <h1>
        Movie Recommendation System
      </h1>
      <MovieRow 
        title = "Popular Movies🍿"
        movies={popular}
      />

      <MovieRow 
        title = "Trending Movies🔥"
        movies={trending}
      />
    </div>
  )
}

export default Home