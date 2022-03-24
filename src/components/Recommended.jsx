import React from "react";
import data from "../data.json";
import { ReactComponent as Bookmark } from "../assets/icon-bookmark-empty.svg";
import { ReactComponent as MovieIcon } from "../assets/icon-category-movie.svg";

function Recommended() {
  const recommendedArr = data.filter((item) => !item.isTrending);
  return (
    <div>
      <h2 className="p-5 text-2xl">Recommended for you</h2>
      <div className="flex flex-wrap pl-5">
        {recommendedArr.map((item) => {
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
                  <MovieIcon className="inline-block mb-1" /> {item.category}{" "}
                  &bull;{" "}
                </span>
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

export default Recommended;
