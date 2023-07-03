import React, { useState } from "react";
import "../../components/Product/ProductCard/ProductCard";
import ProductCard from "../../components/Product/ProductCard/ProductCard";
import { useSelector } from "react-redux";

const Products = () => {
  const [search, setSearch] = useState("");

  const { products } = useSelector((state) => state.products);

  const searchProduct = products.filter((product) => {
    return product.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <div className="productCard_container">
        <h2 id="font_nanum">FRANCIACORTA</h2>
        <div className="productCard_wrapper">
          <div className="sidebar" id="font_pathway">
            <div className="search_inp__block">
              <input
                className="search_inp"
                type="text"
                placeholder="SEARCH WINE"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
            </div>
            <div className="slide_wrapper">
              <div className="relative">
                <span>ALL</span>
              </div>
              <div className="absolute">
                <span>ALL</span>
              </div>
            </div>
            <div className="slide_wrapper">
              <div className="relative">
                <span>GRAPPE</span>
              </div>
              <div className="absolute">
                <span>GRAPPE</span>
              </div>
            </div>
            <div className="slide_wrapper">
              <div className="relative">
                <span>WINES</span>
              </div>
              <div className="absolute">
                <span>WINES</span>
              </div>
            </div>
            <div className="slide_wrapper">
              <div className="relative">
                <span>FRANCIACORTA</span>
              </div>
              <div className="absolute">
                <span>FRANCIACORTA</span>
              </div>
            </div>
          </div>
          <ProductCard searchProduct={searchProduct} />
        </div>
      </div>
    </>
  );
};

export default Products;
