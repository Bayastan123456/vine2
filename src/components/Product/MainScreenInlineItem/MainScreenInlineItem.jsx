import React, { useState, useEffect, useMemo } from "react";
import "./MainScreenInlineItem.css";
import img from "../../../images/Diamant-2018-300.png";
import { useSelector, useDispatch } from "react-redux";
import {
  getProducts,
  addProduct,
  getOneProduct,
} from "../../../store/products/productAction";
import { useNavigate } from "react-router";

const MainScreenInlineItem = () => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeLink, setActiveLink] = useState(false);

  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const arr = useMemo(() => products.map((product) => product.id), [products]);
  const totalUlCount = useMemo(() => Math.ceil(arr.length / 5), [arr]);
  const ulsPerRow = 4;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (isMouseDown && isDragging) {
        const currentX = event.pageX;
        const currentY = event.pageY;

        const deltaX = startX - currentX;
        const deltaY = startY - currentY;

        setScrollX((prevScrollX) => prevScrollX + deltaX);
        setScrollY((prevScrollY) => prevScrollY + deltaY);

        setStartX(currentX);
        setStartY(currentY);
      }
    };

    const active = document.querySelector(".active");

    active ? setActiveLink(true) : setActiveLink(false);

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMouseDown, isDragging, startX, startY]);

  useEffect(() => {
    const handleMouseUp = () => {
      setIsMouseDown(false);
      setIsDragging(false);
    };

    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const handleDoubleClick = (event) => {
    event.preventDefault();
  };

  const handleUlMouseDown = (event) => {
    event.stopPropagation();
    setIsDragging(true);
    setStartX(event.pageX);
    setStartY(event.pageY);
  };

  const handleUlMouseMove = (event) => {
    if (isDragging) {
      const currentX = event.pageX;
      const currentY = event.pageY;

      const deltaX = startX - currentX;
      const deltaY = startY - currentY;

      setScrollX((prevScrollX) => prevScrollX + deltaX);
      setScrollY((prevScrollY) => prevScrollY + deltaY);

      setStartX(currentX);
      setStartY(currentY);
    }
  };

  const handleUlMouseUp = () => {
    setIsDragging(false);
  };

  const handleUlMouseLeave = () => {
    setIsDragging(false);
  };

  const handleLiClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div
      className="itemScreen"
      onMouseDown={() => setIsMouseDown(true)}
      onDoubleClick={handleDoubleClick}
      style={{ transform: `translate(${scrollX}px, ${scrollY}px)` }}
    >
      <div
        style={{ display: "flex", flexWrap: "wrap" }}
        onMouseMove={handleUlMouseMove}
        onMouseUp={handleUlMouseUp}
        onMouseLeave={handleUlMouseLeave}
      >
        {Array.from({ length: totalUlCount }).map((_, ulIndex) => (
          <ul
            key={ulIndex}
            className={`list-${ulIndex} itemListProduct`}
            style={{
              width: `calc(100% / ${ulsPerRow})`,
              height: `calc(100% / ${Math.ceil(totalUlCount / ulsPerRow)})`,
            }}
            onMouseDown={handleUlMouseDown}
            onDoubleClick={handleDoubleClick}
          >
            {arr.slice(ulIndex * 5, ulIndex * 5 + 5).map((id, liIndex) => {
              const product = products.find((item) => item.id === id);
              if (product) {
                return (
                  <li
                    key={id}
                    className={`list-${ulIndex}-item itemProduct ${
                      ulIndex * 5 + liIndex === activeIndex ? "active" : ""
                    }`}
                    onClick={() => handleLiClick(ulIndex * 5 + liIndex)}
                  >
                    <div className="imgBlock">
                      <img
                        src={product.image}
                        alt="product"
                        width="30%"
                        height="80%"
                      />
                      <span>{product.name}</span>

                      {ulIndex * 5 + liIndex === activeIndex && (
                        <a
                          onClick={() => navigate(`/details/${product?.id}`)}
                          className="getDeteilsProduct"
                        >
                          Get Details
                        </a>
                      )}
                    </div>
                  </li>
                );
              }
              return null;
            })}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default MainScreenInlineItem;
