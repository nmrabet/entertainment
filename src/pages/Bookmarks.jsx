import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

function Bookmarks() {
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
