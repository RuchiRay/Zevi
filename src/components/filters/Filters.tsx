import React, { Dispatch, SetStateAction } from "react";
import "./filter.scss";
import { FilterDropdown } from "../filterDropdown/FilterDropdown";
import { FilterList, StarsList } from "../../pages/Results/types";
import { Data } from "../../data/results";
import { RatingFilter } from "../ratingFilter/RatingFilter";

export type FiltersObject = {
  brands: FilterList[];
  priceRange: FilterList[];
};

type FiltersProps = {
  filters: FiltersObject;
  stars: StarsList[];
  setStars: Dispatch<SetStateAction<StarsList[]>>;
  setFilters: Dispatch<SetStateAction<FiltersObject>>;
  results: Data[];
  setdata: Dispatch<SetStateAction<Data[]>>;
};

export const Filters = ({
  filters,
  setFilters,
  results,
  setdata,
  stars,
  setStars,
}: FiltersProps) => {
  return (
    <div className="filters-container">
      <FilterDropdown
        key={"brand"}
        filterType="brands"
        filterList={filters.brands}
        setFilters={setFilters}
        setdata={setdata}
      />
      <div className="divider"></div>
      <FilterDropdown
        key={"price-range"}
        filterType="priceRange"
        filterList={filters.priceRange}
        setFilters={setFilters}
        setdata={setdata}
      />
      <div className="divider"></div>
      <RatingFilter stars={stars} setStars={setStars} filterType="Ratings" />
    </div>
  );
};
