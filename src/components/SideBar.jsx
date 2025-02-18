import React from "react";
import "../stylePage/SideBar.css";
import Category from "./Category";
import Pricing from "./Pricing";

const SideBar = ({ handleCategoryChange, handlePriceChange }) => {
  return (
    <div className="sidebar">
      <div className="logo">
        <h1>➗</h1>
      </div>
      <div>
        <Category handleCategoryChange={handleCategoryChange} />
        <Pricing handlePriceChange={handlePriceChange} />
      </div>
    </div>
  );
};

export default SideBar;
