import React from "react";
import "../stylePage/Pricing.css";

const Pricing = ({ handlePriceChange }) => {
  return (
    <div className="pricing">
      <h3>Pricing</h3>
      <div className="pricing-operation">
        <label>
          <input
            type="radio"
            name="price"
            value=""
            onChange={handlePriceChange}
          />
          <span></span>All
        </label>
        <label>
          <input
            type="radio"
            name="price"
            value="0-50"
            onChange={handlePriceChange}
          />
          <span></span>$0 - $50
        </label>
        <label>
          <input
            type="radio"
            name="price"
            value="50-100"
            onChange={handlePriceChange}
          />
          <span></span>$50 - $100
        </label>
        <label>
          <input
            type="radio"
            name="price"
            value="100-150"
            onChange={handlePriceChange}
          />
          <span></span>$100 - $150
        </label>
        <label>
          <input
            type="radio"
            name="price"
            value="150"
            onChange={handlePriceChange}
          />
          <span></span>Over $150
        </label>
      </div>
    </div>
  );
};

export default Pricing;
