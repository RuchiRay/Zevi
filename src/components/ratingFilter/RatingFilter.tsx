import React, { Dispatch, SetStateAction, useState } from "react";
import "./ratingFilter.scss";
import { FaAngleDown, FaStar } from "react-icons/fa6";
import { StarsList } from "../../pages/Results/types";
type RatingFilterProps = {
  filterType: string;
  stars: StarsList[];
  setStars: Dispatch<SetStateAction<StarsList[]>>;
};
export const RatingFilter = ({
  filterType,
  stars,
  setStars,
}: RatingFilterProps) => {
  const handlechange = (number: number) => {
    const newStarsList: StarsList[] = stars.map((item) => {
      if (item.number === number) return { ...item, checked: !item.checked };
      else return item;
    });
    setStars(newStarsList);
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
          {stars.map((item, index) => {
            return (
              <div key={index} className="star-wrapper">
                <input
                  type="checkbox"
                  name=""
                  onChange={() => handlechange(item.number)}
                  checked={item.checked}
                  id=""
                />
                {[...Array(5)].map((_, index) => {
                  return (
                    <div
                      key={index}
                      className={index < item.number ? "filled" : "empty"}
                    >
                      <FaStar />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
