import React from "react";
import data from "../data.json";
import { ReactComponent as Bookmark } from "../assets/icon-bookmark-empty.svg";

function Recommended() {
  const recommendedArr = data.filter((item) => !item.isTrending);
  console.log(recommendedArr);
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
              <p className="mb-4">
                <span>{item.year} &bull; </span>
                <span>{item.category} &bull; </span>
                <span>{item.rating}</span>
                <p>{item.title}</p>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Recommended;
