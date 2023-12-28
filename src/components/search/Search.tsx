import React, { Dispatch, SetStateAction } from "react";
import "./search.scss";

type SearchProps = {
  setOpenTrending: Dispatch<SetStateAction<boolean>>;
};

export const Search = ({ setOpenTrending }: SearchProps) => {
  return (
    <div className="search-container">
      <input
        type="text"
        name=""
        id=""
        onClick={() => setOpenTrending(true)}
        placeholder="Search"
      />
    </div>
  );
};
