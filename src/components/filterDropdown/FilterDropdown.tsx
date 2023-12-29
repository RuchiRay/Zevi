import React, { Dispatch, SetStateAction, useState } from "react";
import "./filterDropdown.scss";

import { FaAngleDown } from "react-icons/fa6";
import { FilterList } from "../../pages/Results/types";
import { Data } from "../../data/results";
import { FiltersObject } from "../filters/Filters";

type FilterDropdownProps = {
  filterType: string;
  filterList: FilterList[];
  setFilters: Dispatch<SetStateAction<FiltersObject>>;
  setdata: Dispatch<SetStateAction<Data[]>>;
};

export const FilterDropdown = ({
  filterType,
  filterList,
  setFilters,
  setdata,
}: FilterDropdownProps) => {
  const handleChange = (name: string, filterType: string) => {
    const newFilterList: FilterList[] = filterList.map((item) => {
      if (item.name === name) return { ...item, checked: !item.checked };
      else return item;
    });
    setFilters((prev) => {
      return { ...prev, [filterType]: newFilterList };
    });
  };
  const [showFilters, setShowFilters] = useState(true);
  return (
    <div className="filter-dropdown w-full">
      <div className="filter-dropdown-header">
        <p className="filter-type"> {filterType}</p>
        <div className="down-icon" onClick={() => setShowFilters(!showFilters)}>
          <FaAngleDown />
        </div>
      </div>
      {showFilters && (
        <div className="filter-list">
          {filterList.map((item) => {
            return (
              <div key={item.name} className="flex items-center input-wrapper">
                <input
                  type="checkbox"
                  name=""
                  onChange={() => handleChange(item.name, filterType)}
                  checked={item.checked}
                  id=""
                />{" "}
                <p className="font-light"> {item.name}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
