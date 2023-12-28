import React, { Dispatch, SetStateAction } from "react";
import "./search.scss";
import { RiSearchLine } from "react-icons/ri";
type SearchProps = {
  setOpenTrending: Dispatch<SetStateAction<boolean>>;
};

export const Search = ({ setOpenTrending }: SearchProps) => {
  return (
    <div className="search-container margin-top">
      <input
        type="text"
        name=""
        id=""
        onClick={() => setOpenTrending(true)}
        placeholder="Search"
      />
      <div className="icon">
        <RiSearchLine />
      </div>
    </div>
  );
};
