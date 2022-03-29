import React from "react";
import data from "../data.json";
import { ReactComponent as Bookmark } from "../assets/icon-bookmark-empty.svg";
import { ReactComponent as MovieIcon } from "../assets/icon-category-movie.svg";

function Trending() {
  const isTrendingArr = data.filter((item) => item.isTrending);
  return (
    <div>
      <h2 className="p-5 text-2xl">Trending</h2>
      <div className="flex flex-wrap pl-5">
        {isTrendingArr.map((item) => {
          return (
            <div key={item.title} className="relative">
              <img
                src={item.thumbnail.regular.medium}
                alt=""
                className="rounded-xl mr-4 mb-4"
              />
              <Bookmark className="absolute top-5 right-10" />
              <div className="absolute bottom-7 left-4">
                <span>{item.year} &bull; </span>
                <span><MovieIcon className="inline-block mb-1"/> {item.category} &bull; </span>
                <span>{item.rating}</span>
                <p>{item.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Trending;
