import React from "react";
import "./results.scss";
import { Search } from "../../components/search/Search";
import { Logo } from "../../components/logo/Logo";
export const Results = () => {
  return (
    <div className="results-container">
      <Search setOpenTrending={() => {}} />
      <div className="logo-wrapper">
        <Logo />
      </div>
    </div>
  );
};
