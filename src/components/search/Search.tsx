import React, { Dispatch, SetStateAction } from "react";
import "./search.scss";
import { RiSearchLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

type SearchProps = {
  setOpenTrending: Dispatch<SetStateAction<boolean>>;
};

export const Search = ({ setOpenTrending }: SearchProps) => {
  const navigate = useNavigate();
  return (
    <div className="search-container ">
      <form action="" onSubmit={() => navigate("/results")}>
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
      </form>
    </div>
  );
};
