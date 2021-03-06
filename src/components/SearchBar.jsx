import React from "react";
import { ReactComponent as Search } from "../assets/icon-search.svg";

function SearchBar({ placeholder, onChange }) {
  return (
    <div className="flex items-center m-5">
      <Search />
      <input
        type="search"
        name=""
        id=""
        className=" placeholder:italic placeholder:text-slate-400 focus:outline-none border-0 bg-midnight w-96 pl-4"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBar;
