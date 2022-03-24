import React from "react";
import data from "../data.json";
import { ReactComponent as Bookmark } from "../assets/icon-bookmark-empty.svg";

function Trending() {
  const isTrendingArr = data.filter((item) => item.isTrending);
  return (
    <div>
      <h2 className="p-5 text-2xl">Trending</h2>
      <div className="flex flex-wrap pl-5">
        {isTrendingArr.map((item) => {
          return (
            <div key={item.title}>
              <Bookmark />
              <p>
                <span>{item.year} &bull; </span>
                <span>{item.category} &bull; </span>
                <span>{item.rating}</span>
              </p>
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Trending;
