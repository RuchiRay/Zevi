import React from "react";
import "./filterDropdown.scss";

import { FaAngleDown } from "react-icons/fa6";
type FilterList = {
  name: string;
  checked: boolean;
};

type FilterDropdownProps = {
  filterType: string;
  filterList: FilterList[];
};

export const FilterDropdown = ({
  filterType,
  filterList,
}: FilterDropdownProps) => {
  return (
    <div className="filter-dropdown w-full">
      <div className="filter-dropdown-header">
        <p className="filter-type"> {filterType}</p>
        <div className="down-icon">
          <FaAngleDown />
        </div>
      </div>
      <div className="filter-list">
        {filterList.map((item) => {
          return (
            <div className="flex items-center input-wrapper">
              <input type="checkbox" name="" checked={item.checked} id="" />{" "}
              <p className="font-light"> {item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
