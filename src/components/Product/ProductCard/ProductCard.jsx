import React from "react";
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div className="productCard_container">
      <h2>FRANCIACORTA</h2>
      <div className="productCard_wrapper">
        <div className="sidebar">
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
        <div className="product_cards">
          <div className="card_item">
            <img
              src="https://www.villafranciacorta.it/ecommerce/wp-content/uploads/2022/11/SelezioneBrut_2011.png"
              alt="nothing but a bottle of wine"
            />
            <div className="slide_wrapper">
              <div className="relative">
                <h3>SELEZIONE 2011</h3>
              </div>
              <div className="absolute">
                <h3>SELEZIONE 2011</h3>
              </div>
            </div>
            <div className="card_item_text">
              {/* <h4>SOLD OUT</h4> */}
              <h5>FRANCIACORTA DOCG</h5>
            </div>
            <button>DISCOVER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
