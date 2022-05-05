import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import data from "../data.json";

function Bookmarks() {
  const isBookmarked = data.filter((item) => item.isBookmarked);
  console.log(isBookmarked);
  return (
    <div className="lg:flex">
      <div>
        <Navbar />
      </div>
      <div>
        <SearchBar placeholder="Search for bookmarked shows" />
      </div>
    </div>
  );
}

export default Bookmarks;
