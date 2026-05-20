import React, { useState, useEffect } from "react";
import PopularMovies from "../sections/PopularMovies";
import { fetchHome, searchMovie } from "../services/api";
import SearchBar from "../components/SearchBar";
import Hero from "../sections/Hero";
import MovieDetail from "../components/MovieDetails";
import RecCard from "../components/RecCard";

function Home() {
  const [popular, setPopular] = useState([]);
  const [searchResults, setSearchResults] = useState(null);

  async function loadHome() {
    try {
      const popularMovies = await fetchHome("popular");
      setPopular(popularMovies);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleSearch(query) {
    try {
      const data = await searchMovie(query);
      setSearchResults(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadHome();
  }, []);

  return (
    <div className="w-full mx-auto px-6 pb-16 bg-ink">
      <Hero />

      <SearchBar onSearch={handleSearch} />

      {searchResults && (
        <div className="mb-12">
          <MovieDetail movie={searchResults.movie_details} />

          <div className="grid md:grid-cols-2 gap-2">
          {/* TF-IDF Recommendations */}

          {searchResults.tfidf_recommendations?.length > 0 && (
            <div
              className="
      mt-6
      bg-ink/60
      border border-sand/12
      rounded-2xl
      p-5
    "
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-sand" />

                <span
                  className="
          text-[10px]
          uppercase
          tracking-[0.14em]
          text-sand
          font-medium
        "
                >
                  TF-IDF Recommendations
                </span>
              </div>

              {searchResults.tfidf_recommendations.map((item, i) => (
                <RecCard
                  key={item.title}
                  movie={item.tmdb}
                  title={item.title}
                  score={item.score}
                  rank={i + 1}
                />
              ))}
            </div>
          )}

          {/* Genre Recommendations */}

          {searchResults.genre_recommendations?.length > 0 && (
            <div
              className="
      mt-6
      bg-ink/60
      border border-sand/12
      rounded-2xl
      p-5
    "
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-sand" />

                <span
                  className="
          text-[10px]
          uppercase
          tracking-[0.14em]
          text-sand
          font-medium
        "
                >
                  Genre Recommendations
                </span>
              </div>

              {searchResults.genre_recommendations.map((item, i) => (
                <RecCard
                  key={item.title}
                  movie={item.tmdb}
                  title={item.title}
                  score={item.score}
                  rank={i + 1}
                />
              ))}
            </div>
          )}
          </div>

        </div>
      )}
      


      <PopularMovies movies={popular} onMovieSelect={setSearchResults} />
    </div>
  );
}

export default Home;
