import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./pages/ProductList";
import Recammended from "./components/Recammended";
import SideBar from "./components/SideBar";
import { data } from "./db/data";

const App = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => setQuery(e.target.value);

  const filterData = data.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <SideBar />
      <Navbar handleSearch={handleSearch} />
      <Recammended />
      <ProductList filterData={filterData} />
    </div>
  );
};

export default App;
