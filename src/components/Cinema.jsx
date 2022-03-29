import React from "react";
import { ReactComponent as Bookmark } from "../assets/icon-bookmark-empty.svg";
import { ReactComponent as MovieIcon } from "../assets/icon-category-movie.svg";

function Cinema({ movie }) {
  return (
    <>
      <div className="flex flex-wrap pl-5">
        <div key={movie.title} className="relative">
          <img
            src={movie.thumbnail.regular.small}
            alt=""
            className="rounded-xl mr-4 mb-2"
          />
          <Bookmark className="absolute top-5 right-10" />
          <div className="mb-4">
            <span>{movie.year} &bull; </span>
            <span>
              <MovieIcon className="inline-block mb-1" /> {movie.category}{" "}
              &bull;{" "}
            </span>
            <span>{movie.rating}</span>
            <p>{movie.title}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cinema;
