import React, { Dispatch, SetStateAction } from "react";
import "./filter.scss";
import { FilterDropdown } from "../filterDropdown/FilterDropdown";
import { FilterList } from "../../pages/Results/types";
import { Data } from "../../data/results";

export type FiltersObject = {
  brands: FilterList[];
  priceRange: FilterList[];
};

type FiltersProps = {
  filters: FiltersObject;

  setFilters: Dispatch<SetStateAction<FiltersObject>>;
  results: Data[];
  setdata: Dispatch<SetStateAction<Data[]>>;
};

export const Filters = ({
  filters,
  setFilters,
  results,
  setdata,
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
    </div>
  );
};
