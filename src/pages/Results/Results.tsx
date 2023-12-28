import React, { useState } from "react";
import "./results.scss";
import { Search } from "../../components/search/Search";
import { Logo } from "../../components/logo/Logo";
import { results } from "../../data/results";
import { Filters } from "../../components/filters/Filters";
import { ItemCard } from "../../components/ItemCard/ItemCard";
export const Results = () => {
  const [data, setdata] = useState(results);
  console.log(data);

  return (
    <div className="results-container">
      <Search setOpenTrending={() => {}} />
      <div className="logo-wrapper">
        <Logo />
      </div>
      <div className="w-full">
        <p className="title">Search Results</p>
      </div>
      <div className="filter-result-wrapper w-full">
        <Filters />
        <div className="results-wrapper flex-wrap">
          {data.map((item) => {
            return <ItemCard data={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};
