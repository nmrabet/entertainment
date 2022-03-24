import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Series from "../components/Series";

function Tv() {
  return (
    <div className="flex">
      <div>
        <Navbar />
      </div>
      <div>
        <SearchBar placeholder="Search for TV series" />
        <Series />
      </div>
    </div>
  );
}

export default Tv;
