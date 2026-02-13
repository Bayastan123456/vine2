import React from "react";
import { useLocation } from "react-router-dom";
import "./GenericPage.css";

const GenericPage = () => {
  const location = useLocation();
  const { title, img } = location.state || {
    title: "Page Not Found",
    img: "https://www.villafranciacorta.it/ecommerce/wp-content/uploads/2022/09/bg-menu-1280x720.jpg",
  };

  return (
    <div
      className="genericPage"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="genericPage__content">
        <h1 className="genericPage__title">{title}</h1>
        <p className="genericPage__subtitle">Coming Soon</p>
      </div>
    </div>
  );
};

export default GenericPage;
