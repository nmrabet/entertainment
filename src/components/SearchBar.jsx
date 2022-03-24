import React from "react";
import { ReactComponent as Search } from "../assets/icon-search.svg";

function SearchBar({ placeholder }) {
  return (
    <div className="flex items-center pl-5">
      <Search />
      <input
        type="search"
        name=""
        id=""
        className="focus:outline-none border-0 bg-midnight w-full p-6"
        placeholder={placeholder}
      />
    </div>
  );
}

export default SearchBar;
