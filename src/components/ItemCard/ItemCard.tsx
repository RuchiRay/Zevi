import React, { Dispatch, SetStateAction } from "react";
import { Results } from "../../data/results";
import "./itemCard.scss";
import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa6";
type ItemCardProps = {
  item: Results;
  data: Results[];
  setdata: Dispatch<SetStateAction<Results[]>>;
};

export const ItemCard = ({ item, data, setdata }: ItemCardProps) => {
  const handleWishlist = (id: number) => {
    const newData = data.map((item) => {
      if (item.id === id) return { ...item, wishlisted: !item.wishlisted };
      else return item;
    });
    setdata(newData);
  };
  return (
    <div className="item-card-wrapper">
      <div className="item-img">
        <img src={item.img} alt={item.title} />
        <div onClick={() => handleWishlist(item.id)} className="like-icon">
          {item.wishlisted ? (
            <div className={"heart-icon red"}>
              <FaHeart />
            </div>
          ) : (
            <div className={"heart-icon transparent"}>
              <FaRegHeart />
            </div>
          )}
        </div>

        <div className="view w-full font-semi-bold">View Product</div>
      </div>
      <div className="item-info">
        <p className="item-name">{item.title}</p>
        <div>
          <span className="old-price font-light">Rs. {item.oldPrice}</span>
          <span className="new-price font-bold"> Rs. {item.newPrice}</span>
        </div>
        <div className="rating-wrapper">
          {[...Array(5)].map((_, index) => {
            return (
              <div
                key={index}
                className={index < item.rating ? "filled" : "empty"}
              >
                <FaStar />
              </div>
            );
          })}
          <p className="font-light total-rating">({item.totalRating})</p>
        </div>
      </div>
    </div>
  );
};
