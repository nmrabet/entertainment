import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

function Bookmarks() {
  return (
    <>
      <Navbar />
      <SearchBar placeholder="Search for bookmarked shows" />
    </>
  );
}

export default Bookmarks;
