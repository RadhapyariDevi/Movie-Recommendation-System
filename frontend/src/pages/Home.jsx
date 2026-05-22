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
  const [loading, setLoading] = useState(false);

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
      setLoading(true);
      const data = await searchMovie(query);
      setSearchResults(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadHome();
  }, []);

  return (
    <div className="w-full mx-auto md:px-8 px-6 pb-16 bg-ink">
      <Hero />

      <SearchBar onSearch={handleSearch}
      loading={loading} />

      {searchResults && (
        <div className="mb-12">
          {searchResults.tmdbBusy ? (

          <div
            className="
              mb-6
              rounded-2xl
              border border-red-400/20
              bg-red-500/10
              p-6
              text-center
            "
          >
            <p className="text-red-200 text-lg font-medium">
              TMDB API is busy right now
            </p>

            <p className="text-red-200/70 text-sm mt-1">
              Try again after some time
            </p>
          </div>

        ) : (

          <MovieDetail movie={searchResults.movie_details} />

        )}
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
                  key={item.tmdb_id}
                  movie={item}
                  title={item.title}
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
