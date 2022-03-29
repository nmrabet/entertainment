import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Series from "../components/Series";
import data from "../data.json";

function Tv() {
  const [series, setSeries] = useState("");

  const tvShows = data.filter((item) => item.category === "TV Series");

  const filteredSeries = tvShows.filter((movie) => {
    return movie.title.toLocaleLowerCase().includes(series);
  });

  return (
    <div className="lg:flex">
      <div>
        <Navbar />
      </div>
      <div>
        <SearchBar
          placeholder="Search for TV series"
          onChange={(e) => setSeries(e.target.value.toLocaleLowerCase())}
        />
        {series ? (
          <div>
            <h2 className="text-2xl pb-5 pl-5">
              Found {filteredSeries.length} results for ‘{series}’
            </h2>
            <div className="flex flex-wrap">
              {filteredSeries.map((serie) => {
                return (
                  <div key={serie.title}>
                    <Series serie={serie} />
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div>
            <h2 className="p-5 text-2xl">TV Series</h2>
            <div className="flex flex-wrap">
              {tvShows.map((serie) => {
                return (
                  <div key={serie.title}>
                    <Series serie={serie} />
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

export default Tv;
