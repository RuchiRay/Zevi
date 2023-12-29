import React, { Dispatch, SetStateAction } from "react";
import "./filterDropdown.scss";

import { FaAngleDown } from "react-icons/fa6";
import { FilterList } from "../../pages/Results/types";
import { Results } from "../../data/results";

type FilterDropdownProps = {
  filterType: string;
  filterList: FilterList[];
  setFilter: Dispatch<SetStateAction<FilterList[]>>;
  setdata: Dispatch<SetStateAction<Results[]>>;
};

export const FilterDropdown = ({
  filterType,
  filterList,
  setFilter,
  setdata,
}: FilterDropdownProps) => {
  const handleChange = (name: string) => {
    const newFilterList: FilterList[] = filterList.map((item) => {
      if (item.name === name) return { ...item, checked: !item.checked };
      else return item;
    });
    setFilter(newFilterList);
  };

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
              <input
                type="checkbox"
                name=""
                onChange={() => handleChange(item.name)}
                checked={item.checked}
                id=""
              />{" "}
              <p className="font-light"> {item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
