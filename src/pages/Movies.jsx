import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Cinema from "../components/Cinema";
import data from "../data.json";

function Movies() {
  const [searchMovie, setSearchMovie] = useState("");

  const movies = data.filter((item) => item.category === "Movie");

  const filteredMovies = movies.filter((movie) => {
    return movie.title.toLocaleLowerCase().includes(searchMovie);
  });

  return (
    <div className="lg:flex">
      <div>
        <Navbar />
      </div>
      <div>
        <SearchBar
          placeholder="Search for movies"
          onChange={(e) => setSearchMovie(e.target.value.toLocaleLowerCase())}
        />
        {searchMovie ? (
          <div>
            <h2 className="text-2xl pb-5 pl-5">
              Found {filteredMovies.length} results for ‘{searchMovie}’
            </h2>
            <div className="flex flex-wrap">
              {filteredMovies.map((movie) => {
                return (
                  <div key={movie.title}>
                    <Cinema movie={movie} />
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div>
            <h2 className="p-5 text-2xl">Movies</h2>
            <div className="flex flex-wrap">
              {movies.map((movie) => {
                return (
                  <div key={movie.title}>
                    <Cinema movie={movie} />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Movies;
