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

  const [brandsFilter, setBrandsFilter] = useState<FilterList[]>([
    ...BrandsList,
  ]);
  const [priceRangeFilter, setPriceRangeFilter] = useState<FilterList[]>([
    ...PriceRangeList,
  ]);

  useEffect(() => {
    const filteredData = data.filter((item) => {});
  }, [brandsFilter, data]);

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
          brandsFilter={brandsFilter}
          priceRangeFilter={priceRangeFilter}
          setBrandsFilter={setBrandsFilter}
          setPriceRangeFilter={setPriceRangeFilter}
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
