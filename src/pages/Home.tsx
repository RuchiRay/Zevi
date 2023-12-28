import React from "react";
import logo from "../images/zeviLogo.png";
export const Home = () => {
  return (
    <div className="home-container">
      <div className="w-full logo-wrapper">
        <div>
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};
