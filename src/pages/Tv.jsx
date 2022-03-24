import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import data from "../data.json";
import { ReactComponent as Bookmark } from "../assets/icon-bookmark-empty.svg";
import { ReactComponent as TvIcon } from "../assets/icon-category-tv.svg";

function Tv() {
  const series = data.filter((item) => item.category === "TV Series");
  return (
    <>
      <Navbar />
      <SearchBar placeholder="Search for TV series" />
      <h2 className="p-5 text-2xl">TV Series</h2>
      <div className="flex flex-wrap pl-5">
        {series.map((item) => {
          return (
            <div key={item.title} className="relative">
              <img
                src={item.thumbnail.regular.small}
                alt=""
                className="rounded-xl mr-4 mb-2"
              />
              <Bookmark className="absolute top-5 right-10" />
              <div className="mb-4">
                <span>{item.year} &bull; </span>
                <span>
                  <TvIcon className="inline-block mb-1" /> {item.category}{" "}
                  &bull;{" "}
                </span>
                <span>{item.rating}</span>
                <p>{item.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Tv;
