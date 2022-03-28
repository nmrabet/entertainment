import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Cinema from "../components/Cinema";

function Movies() {
  return (
    <div className="lg:flex">
      <div>
        <Navbar />
      </div>
      <div>
        <SearchBar placeholder="Search for movies" />
        <Cinema />
      </div>
    </div>
  );
}

export default Movies;
