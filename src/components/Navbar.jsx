import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Home } from "../assets/icon-nav-home.svg";
import { ReactComponent as Movies } from "../assets/icon-nav-movies.svg";
import { ReactComponent as Tv } from "../assets/icon-nav-tv-series.svg";
import { ReactComponent as Bookmark } from "../assets/icon-nav-bookmark.svg";
import img from "../assets/image-avatar.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-backblue flex justify-between p-7 lg:flex-col lg:h-screen lg:w-20 lg:m-5 lg:bg-backblue lg:rounded-lg">
      <Logo />
      <div className="flex space-x-6 lg:flex-col lg:p-0 lg:space-x-0 lg:space-y-5">
        <Link to="/home">
          <Home />
        </Link>
        <Link to="/movies">
          <Movies />
        </Link>
        <Link to="/tv">
          <Tv />
        </Link>
        <Link to="/bookmarks">
          <Bookmark />
        </Link>
      </div>
      <img
        src={img}
        alt="thumbnail"
        width="30px"
        className="border-2 rounded-full"
      />
    </div>
  );
}

export default Navbar;
