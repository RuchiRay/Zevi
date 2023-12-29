import React, { useEffect, useState } from "react";
import "./results.scss";
import { Search } from "../../components/search/Search";
import { Logo } from "../../components/logo/Logo";
import { results } from "../../data/results";
import { Filters } from "../../components/filters/Filters";
import { ItemCard } from "../../components/ItemCard/ItemCard";
import { FilterList, StarsList } from "./types";
export const Results = () => {
  const [data, setdata] = useState(results);
  const BrandsList: FilterList[] = [
    { name: "Mango", checked: false },
    { name: "H&M", checked: false },
  ];
  const PriceRangeList: FilterList[] = [
    { name: "Under 500", checked: false },
    { name: "500 to 1000", checked: false },
    { name: "1000 to 3000", checked: false },
  ];

  const [filters, setFilters] = useState({
    brands: [...BrandsList],
    priceRange: [...PriceRangeList],
  });
  const [stars, setStars] = useState<StarsList[]>([
    { number: 5, checked: false },
    { number: 4, checked: false },
    { number: 3, checked: false },
    { number: 2, checked: false },
    { number: 1, checked: false },
  ]);
  useEffect(() => {
    let newData = [...results];

    const selectedBrands = filters.brands
      .filter((item) => item.checked)
      .map((item) => item.name);
    const selectedPriceRange = filters.priceRange
      .filter((item) => item.checked)
      .map((item) => item.name);
    const selectedRatings = stars
      .filter((item) => item.checked)
      .map((item) => item.number);
    if (selectedBrands.length > 0)
      newData = newData.filter((item) => selectedBrands.includes(item.brand));
    if (selectedPriceRange.length > 0)
      newData = newData.filter((item) =>
        selectedPriceRange.some((range) => {
          if (range === "Under 500") return item.newPrice < 500;
          const [minPrice, maxPrice] = range.split("to").map(Number);
          return item.newPrice >= minPrice && item.newPrice <= maxPrice;
        })
      );
    if (selectedRatings.length > 0)
      newData = newData.filter((item) => selectedRatings.includes(item.rating));
    setdata(newData);
  }, [filters, stars]);

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
        <Filters
          filters={filters}
          setFilters={setFilters}
          results={results}
          setdata={setdata}
          stars={stars}
          setStars={setStars}
        />
        <div className="results-wrapper flex-wrap">
          {data.map((item) => {
            return (
              <ItemCard
                setdata={setdata}
                data={data}
                item={item}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
