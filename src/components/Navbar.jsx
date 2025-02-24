import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import "../stylePage/Navbar.css";

const Navbar = ({ handleSearch }) => {
  return (
    <div className="navbar-section">
      <input
        onChange={handleSearch}
        type="text"
        name="search"
        placeholder="Enter your search shoes"
      />
    </div>
  );
};

export default Navbar;
