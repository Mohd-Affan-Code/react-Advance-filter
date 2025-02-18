import React from "react";
import "../stylePage/Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing">
      <h3>Pricing</h3>
      <div className="pricing-operation">
        <label>
          <input className="active" type="radio" name="text2" />
          <span></span>All
        </label>
        <label>
          <input type="radio" name="text2" />
          <span></span>$0 - $50
        </label>
        <label>
          <input type="radio" name="text2" />
          <span></span>$50 - $100
        </label>
        <label>
          <input type="radio" name="text2" />
          <span></span>$100 - $150
        </label>
        <label>
          <input type="radio" name="text2" />
          <span></span>Over $150
        </label>
      </div>
    </div>
  );
};

export default Pricing;
