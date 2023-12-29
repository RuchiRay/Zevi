import React, { Dispatch, SetStateAction } from "react";
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
  return (
    <div className="filter-dropdown w-full">
      <div className="filter-dropdown-header">
        <p className="filter-type"> {filterType}</p>
        <div className="down-icon">
          <FaAngleDown />
        </div>
      </div>
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
    </div>
  );
};
