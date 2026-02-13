import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ currentData }) => {
  const navigate = useNavigate();
  return (
    <div className="product_cards_container">
      {currentData() && currentData().length > 0 ? (
        currentData().map((item) => (
          <div className="product_cards" key={item.id}>
            <div className="card_item">
              <img
                src={item.image}
                alt="nothing but a bottle of wine"
                onClick={() => navigate(`/details/${item.id}`)}
                style={{ cursor: "pointer" }}
              />
              <div
                className="slide_wrapper"
                id="font_nanum"
                onClick={() => navigate(`/details/${item.id}`)}
                style={{ cursor: "pointer" }}
              >
                <div className="relative">
                  <h3>{item.name}</h3>
                </div>
                <div className="absolute">
                  <h3>{item.name}</h3>
                </div>
              </div>
              <div className="card_item_text">
                <h5 id="font_pathway">{item.sort}</h5>
              </div>
              <button onClick={() => navigate(`/details/${item.id}`)}>
                DISCOVER
              </button>
            </div>
          </div>
        ))
      ) : (
        <h2 style={{ color: "white", marginTop: "100px" }}>No products found</h2>
      )}
    </div>
  );
};

export default ProductCard;
