import React from "react";
import { ReactComponent as Bookmark } from "../assets/icon-bookmark-empty.svg";
import { ReactComponent as TvIcon } from "../assets/icon-category-tv.svg";

function Series({ serie }) {
  return (
    <>
      <div className="flex flex-wrap pl-5">
        <div key={serie.title} className="relative">
          <img
            src={serie.thumbnail.regular.medium}
            alt=""
            className="rounded-xl mr-4 mb-2"
          />
          <Bookmark className="absolute top-5 right-10" />
          <div className="mb-4">
            <span>{serie.year} &bull; </span>
            <span>
              <TvIcon className="inline-block mb-1" /> {serie.category} &bull;{" "}
            </span>
            <span>{serie.rating}</span>
            <p>{serie.title}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Series;
