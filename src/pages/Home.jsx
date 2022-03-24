import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Trending from "../components/Trending";
import Recommended from "../components/Recommended";

function Home() {
  return (
    <>
      <Navbar />
      <SearchBar placeholder="Search for movies or TV series" />
      <Trending />
      <Recommended />
    </>
  );
}

export default Home;
