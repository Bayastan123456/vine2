import React, { useEffect } from "react";
import "./ProductCard.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../store/products/productAction";
import { useNavigate } from "react-router-dom";

const ProductCard = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      {products.map((item, index) => (
        <div className="product_cards">
          <div className="card_item">
            <img src={item.image} alt="nothing but a bottle of wine" />
            <div className="slide_wrapper" id="font_nanum">
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
      ))}
    </>
  );
};

export default ProductCard;
