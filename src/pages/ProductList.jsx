import React from "react";
import "../stylePage/ProductList.css";
import { FaShoppingBag } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
// import { data } from "../db/data";

const ProductList = ({ filterData }) => {
  return (
    <div className="product-container">
      {filterData.map((item, index) => (
        <div className="card" key={item.id}>
          <img src={item.img} alt="sheos Image" />
          <div className="cart-details">
            <h3>{item.title}</h3>
            <div>
              <span>
                <AiFillStar />
              </span>
              <span>{item.star}</span>
            </div>
            <p className="reviews">{`reviews ${item.reviews}`}</p>
            <div className="pricingCart">
              <span>{`Price $${item.price}`}</span>
              <span>
                <FaShoppingBag />
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
