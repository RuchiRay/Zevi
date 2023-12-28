import React from "react";
import "./filter.scss";
import { FilterDropdown } from "../filterDropdown/FilterDropdown";
export const Filters = () => {
  const BrandsList = [
    { name: "Mango", checked: false },
    { name: "H&M", checked: false },
  ];
  const PriceRangeList = [
    { name: "Under 500", checked: false },
    { name: "500 to 1000", checked: false },
    { name: "1000 to 3000", checked: false },
  ];
  return (
    <div className="filters-container">
      <FilterDropdown
        key={"brand"}
        filterType="Brand"
        filterList={BrandsList}
      />
      <div className="divider"></div>
      <FilterDropdown
        key={"price-range"}
        filterType="Price Range"
        filterList={PriceRangeList}
      />
      <div className="divider"></div>
    </div>
  );
};
