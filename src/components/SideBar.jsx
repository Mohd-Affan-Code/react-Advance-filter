import React from "react";
import "../stylePage/SideBar.css";
import Category from "./Category";
import Pricing from "./Pricing";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <h1>➗</h1>
      </div>
      <div>
        <Category />
        <Pricing />
      </div>
    </div>
  );
};

export default SideBar;
