import React, { useEffect, useState } from "react";
import "./results.scss";
import { Search } from "../../components/search/Search";
import { Logo } from "../../components/logo/Logo";
import { results } from "../../data/results";
import { Filters } from "../../components/filters/Filters";
import { ItemCard } from "../../components/ItemCard/ItemCard";
import { FilterList } from "./types";
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

  useEffect(() => {
    let newData = [...results];
    console.log(newData, "new data");

    const selectedBrands = filters.brands
      .filter((item) => item.checked)
      .map((item) => item.name);
    const selectedPriceRange = filters.priceRange
      .filter((item) => item.checked)
      .map((item) => item.name);
    console.log(selectedBrands, selectedPriceRange);
    if (selectedBrands.length > 0)
      newData = newData.filter((item) => selectedBrands.includes(item.brand));
    console.log(newData, "after filter");
    if (selectedPriceRange.length > 0)
      newData = newData.filter((item) =>
        selectedPriceRange.some((range) => {
          if (range === "Under 500") return item.newPrice < 500;
          const [minPrice, maxPrice] = range.split("to").map(Number);
          return item.newPrice >= minPrice && item.newPrice <= maxPrice;
        })
      );

    setdata(newData);
  }, [filters]);

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
