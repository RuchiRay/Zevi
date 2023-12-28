import React from "react";
import logo from "../../images/zeviLogo.png";
import "./logo.scss";
export const Logo = () => {
  return (
    <div className="w-full logo-wrapper">
      <div>
        <img src={logo} alt="" />
      </div>
    </div>
  );
};
