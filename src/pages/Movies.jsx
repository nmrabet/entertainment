import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

function Movies() {
  return (
    <>
      <Navbar />
      <SearchBar placeholder="Search for movies" />
    </>
  );
}

export default Movies;
