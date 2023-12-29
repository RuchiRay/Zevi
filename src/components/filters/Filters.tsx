import React, { Dispatch, SetStateAction } from "react";
import "./filter.scss";
import { FilterDropdown } from "../filterDropdown/FilterDropdown";
import { FilterList } from "../../pages/Results/types";
import { Results } from "../../data/results";

type FiltersProps = {
  brandsFilter: FilterList[];
  priceRangeFilter: FilterList[];
  setBrandsFilter: Dispatch<SetStateAction<FilterList[]>>;
  setPriceRangeFilter: Dispatch<SetStateAction<FilterList[]>>;
  results: Results[];
  setdata: Dispatch<SetStateAction<Results[]>>;
};

export const Filters = ({
  brandsFilter,
  priceRangeFilter,
  setBrandsFilter,
  setPriceRangeFilter,
  results,
  setdata,
}: FiltersProps) => {
  return (
    <div className="filters-container">
      <FilterDropdown
        key={"brand"}
        filterType="Brand"
        filterList={brandsFilter}
        setFilter={setBrandsFilter}
        setdata={setdata}
      />
      <div className="divider"></div>
      <FilterDropdown
        key={"price-range"}
        filterType="Price Range"
        filterList={priceRangeFilter}
        setFilter={setPriceRangeFilter}
        setdata={setdata}
      />
      <div className="divider"></div>
    </div>
  );
};
