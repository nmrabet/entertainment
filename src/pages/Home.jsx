import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Trending from "../components/Trending";
import Recommended from "../components/Recommended";
import Cinema from "../components/Cinema";
import data from "../data.json";

function Home() {
  const [search, setSearch] = useState("");

  const research = data.filter((item) => {
    return item.title.toLocaleLowerCase().includes(search);
  });

  return (
    <div className="lg:flex">
      <div>
        <Navbar />
      </div>
      <div>
        <SearchBar
          placeholder="Search for movies or TV series"
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
        />
        {search ? (
          <div>
            <h2 className="text-2xl pb-5 pl-5">
              Found {research.length} results for ‘{search}’
            </h2>
            {research.map((movie) => {
              return (
                <div key={movie.title}>
                  <Cinema movie={movie} />
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <Trending />
            <Recommended />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
