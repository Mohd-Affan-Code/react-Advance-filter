import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./pages/ProductList";
import Recammended from "./components/Recammended";
import SideBar from "./components/SideBar";
import { data } from "./db/data";

const App = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");

  const handleSearch = (e) => setQuery(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleBrandFilter = (brandname) => setBrand(brandname);

  const filterData = data.filter((product) => {
    const priceValue = Number(product.price); // Product price ko number me convert karna zaroori hai

    const priceMatch =
      price === ""
        ? true
        : price === "0-50"
        ? priceValue >= 0 && priceValue <= 50
        : price === "50-100"
        ? priceValue > 50 && priceValue <= 100
        : price === "100-150"
        ? priceValue > 100 && priceValue <= 150
        : price === "150"
        ? priceValue > 150
        : true;

    return (
      product.title.toLowerCase().includes(query.toLowerCase()) &&
      (category ? product.category === category : true) &&
      priceMatch &&
      (brand ? product.company === brand : true)
    );
  });

  return (
    <div>
      <SideBar
        handleCategoryChange={handleCategoryChange}
        handlePriceChange={handlePriceChange}
      />
      <Navbar handleSearch={handleSearch} />
      <Recammended handleBrandFilter={handleBrandFilter} />
      <ProductList filterData={filterData} />
    </div>
  );
};

export default App;
