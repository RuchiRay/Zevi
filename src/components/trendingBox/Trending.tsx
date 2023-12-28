import React from "react";
import "./trending.scss";
import { trending } from "../../data/trending";

export const Trending = () => {
  const suggestions: string[] = [
    "Striped shirt dress",
    "Satin shirts",
    "Denim jumpsuit",
    "Leather dresses",
    "Solid tshirts",
  ];
  return (
    <div className="trending-container">
      <p className="font-semi-bold heading">Latest trends</p>
      <div className="card-container flex-wrap">
        {trending.map((item) => {
          return (
            <div key={item.id} className="trend-card">
              <div className="trend-img">
                <img src={item.img} alt={item.name} />
              </div>
              <p className="trend-title font-light">{item.name}</p>
            </div>
          );
        })}
      </div>
      <div className="suggestions-list">
        <p className="font-semi-bold heading">Popular suggestions</p>

        {suggestions.map((item) => {
          return <p key={item}>{item}</p>;
        })}
      </div>
    </div>
  );
};
