import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../store/products/productAction";
import { useNavigate } from "react-router";
import Loaders from "../../Loaders/Loaders";
import "./ShopMobile.css";

const ShopMobile = () => {
  const { products, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (loading) {
    return <Loaders />;
  }

  return (
    <div className="shopMobile_container">
      <ul className="shopMobile_list">
        {products.map((product) => (
          <li key={product.id} className="shopMobile_item">
            <div className="shopMobile_imgBlock">
              <img
                src={product.image}
                alt={product.name}
                onClick={() => navigate(`/details/${product.id}`)}
                style={{ cursor: "pointer" }}
              />
              <span
                onClick={() => navigate(`/details/${product.id}`)}
                style={{ cursor: "pointer" }}
              >
                {product.name}
              </span>
              <button
                className="shopMobile_detailsBtn"
                onClick={() => navigate(`/details/${product.id}`)}
              >
                Get Details
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopMobile;
