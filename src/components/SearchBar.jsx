import React from "react";
import { ReactComponent as Search } from "../assets/icon-search.svg";

function SearchBar() {
  return (
    <div className="flex items-center pl-5">
      <Search />
      <input
        type="search"
        name=""
        id=""
        className="border-0 bg-midnight w-full p-6"
        placeholder="Search for movies or TV series"
      />
    </div>
  );
}

export default SearchBar;
