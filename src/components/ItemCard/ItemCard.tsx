import React from "react";
import { Results } from "../../data/results";
import "./itemCard.scss";
import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa6";
type ItemCardProps = {
  data: Results;
};

export const ItemCard = ({ data }: ItemCardProps) => {
  console.log(data);

  return (
    <div className="item-card-wrapper">
      <div className="item-img">
        <img src={data.img} alt={data.title} />
        {data.wishlisted ? (
          <div className={"heart-icon red"}>
            <FaHeart />
          </div>
        ) : (
          <div className={"heart-icon transparent"}>
            <FaRegHeart />
          </div>
        )}
      </div>
      <div className="item-info">
        <p className="item-name">{data.title}</p>
        <div>
          <span className="old-price font-light">Rs. {data.oldPrice}</span>
          <span className="new-price font-bold"> Rs. {data.newPrice}</span>
        </div>
        <div className="rating-wrapper">
          {[...Array(5)].map((_, index) => {
            return (
              <div
                key={index}
                className={index <= data.rating ? "filled" : "empty"}
              >
                <FaStar />
              </div>
            );
          })}
          <p className="font-light total-rating">({data.totalRating})</p>
        </div>
      </div>
    </div>
  );
};
