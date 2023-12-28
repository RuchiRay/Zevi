import React from "react";
import logo from "../../images/zeviLogo.png";
import { Search } from "../../components/search/Search";
import "./home.scss";
import { Trending } from "../../components/trendingBox/Trending";
export const Home = () => {
  return (
    <div className="home-container">
      <div className="w-full logo-wrapper">
        <div>
          <img src={logo} alt="" />
        </div>
      </div>
      <Search />
      <Trending />
    </div>
  );
};
