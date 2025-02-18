import React from "react";
import "../stylePage/Category.css";

const Category = ({ handleCategoryChange }) => {
  return (
    <div className="category">
      <h3>Category</h3>
      <div className="category-operation">
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="category"
            value=""
            onChange={handleCategoryChange}
          />
          <span className="checkmark"></span>All
        </label>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="category"
            value="Casual"
            onChange={handleCategoryChange}
          />
          <span className="checkmark"></span>Casual
        </label>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="category"
            value="Running"
            onChange={handleCategoryChange}
          />
          <span className="checkmark"></span>Running
        </label>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="category"
            value="Hiking"
            onChange={handleCategoryChange}
          />
          <span className="checkmark"></span>Hiking
        </label>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="category"
            value="Sports"
            onChange={handleCategoryChange}
          />
          <span className="checkmark"></span>Sport
        </label>
      </div>
    </div>
  );
};

export default Category;
