import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

function Tv() {
  return (
    <>
      <Navbar />
      <SearchBar placeholder="Search for TV series" />
    </>
  );
}

export default Tv;
