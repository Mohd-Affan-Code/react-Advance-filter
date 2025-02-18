import React from "react";
import "../stylePage/Category.css";

const Category = () => {
  return (
    <div className="categroy">
      <h3>Category</h3>
      <div className="category-operation">
        <label className="sidebar-label-container">
          <input type="radio" name="text1" />
          <span className=".checkmark"></span>All
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="text1" />
          <span className=".checkmark"></span>Casual
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="text1" />
          <span className=".checkmark"></span>Running
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="text1" />
          <span className=".checkmark"></span>Hiking
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="text1" />
          <span className=".checkmark"></span>Sport
        </label>
      </div>
    </div>
  );
};

export default Category;
