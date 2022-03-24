import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Trending from "../components/Trending";

function Home() {
  return (
    <>
      <Navbar />
      <SearchBar />
      <Trending />
    </>
  );
}

export default Home;
