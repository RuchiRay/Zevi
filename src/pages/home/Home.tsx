import React, { useState } from "react";
import { Search } from "../../components/search/Search";
import "./home.scss";
import { Trending } from "../../components/trendingBox/Trending";
import { Logo } from "../../components/logo/Logo";
export const Home = () => {
  const [openTrending, setOpenTrending] = useState(false);
  console.log("test");

  return (
    <div className="home-container">
      <Logo />
      <div className="margin-top"></div>
      <Search setOpenTrending={setOpenTrending} />
      {openTrending && <Trending />}
    </div>
  );
};
