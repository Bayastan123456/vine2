import React from "react";
import "../../components/Product/ProductCard/ProductCard";
import ProductCard from "../../components/Product/ProductCard/ProductCard";

const Products = () => {
  return (
    <>
      <div className="productCard_container">
        <h2 id="font_nanum">FRANCIACORTA</h2>
        <div className="productCard_wrapper">
          <div className="sidebar" id="font_pathway">
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
          <ProductCard />
        </div>
      </div>
    </>
  );
};

export default Products;
