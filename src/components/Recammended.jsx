import React from "react";
import "../stylePage/Recammended.css";

const Recammended = ({ handleBrandFilter }) => {
  return (
    <div className="recammended-flex">
      <h2>Recommended</h2>
      <div className="recammended-button">
        <button onClick={() => handleBrandFilter("")}>All Product</button>
        <button onClick={() => handleBrandFilter("Niike")}>Nike</button>
        <button onClick={() => handleBrandFilter("Adidas")}>Adidas</button>
        <button onClick={() => handleBrandFilter("Puma")}>Puma</button>
        <button onClick={() => handleBrandFilter("Sparx")}>Sparx</button>
      </div>
    </div>
  );
};

export default Recammended;
