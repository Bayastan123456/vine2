import React, { useState, useEffect, useMemo } from "react";
import "./MainScreenInlineItem.css";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../store/products/productAction";
import { useNavigate } from "react-router";
import Loaders from "../../Loaders/Loaders";

const MainScreenInlineItem = () => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const arr = useMemo(() => products.map((product) => product.id), [products]);
  const totalUlCount = useMemo(() => Math.ceil(arr.length / 5), [arr]);
  const ulsPerRow = 3; // Количество списков ul в каждом ряду

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

    // const active = document.querySelector(".active");

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
    // Обработка нажатия кнопки мыши на элемент списка ul
    event.stopPropagation();
    setIsDragging(true);
    setStartX(event.pageX);
    setStartY(event.pageY);
  };

  const handleUlMouseMove = (event) => {
    // Обработка перемещения мыши по элементу списка ul
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
    // Обработка отпускания кнопки мыши на элементе списка ul
    setIsDragging(false);
  };
  const handleUlMouseLeave = () => {
    // Обработка выхода мыши за пределы элемента списка ul
    setIsDragging(false);
  };

  const handleLiClick = (index) => {
    // Обработка клика по элементу списка li
    setActiveIndex(index);
  };

  const ulKey = "list"; // Ключ списка <ul>, чтобы гарантировать его уникальность

  //Загруска
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getProducts());
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [products, dispatch]);

  return (
    <div>
      {isLoading ? (
        <Loaders />
      ) : (
        <div
          onMouseDown={(event) => {
            setIsMouseDown(true);
            setStartX(event.pageX);
            setStartY(event.pageY);
          }}
          onDoubleClick={handleDoubleClick}
          onMouseMove={(event) => {
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
          }}
          onMouseUp={() => {
            setIsMouseDown(false);
            setIsDragging(false);
          }}
          onMouseLeave={() => {
            setIsMouseDown(false);
            setIsDragging(false);
          }}
        >
          <div
            className="itemScreen"
            style={{ transform: `translate(${scrollX}px, ${scrollY}px)` }}
          >
            <div style={{ display: "flex" }}>
              {Array.from({ length: ulsPerRow }).map((_, rowIndex) => (
                <ul
                  key={`${ulKey}-${rowIndex}`}
                  className={`${ulKey} itemListProduct`}
                  style={{
                    width: `calc(100% / ${ulsPerRow})`,
                    height: `calc(100% / ${Math.ceil(
                      totalUlCount / ulsPerRow
                    )})`,
                  }}
                  onMouseDown={handleUlMouseDown}
                  onMouseMove={handleUlMouseMove}
                  onMouseUp={handleUlMouseUp}
                  onMouseLeave={handleUlMouseLeave}
                >
                  {arr.map((id, liIndex) => {
                    const product = products.find((item) => item.id === id);
                    if (product) {
                      const liKey = `li-${ulKey}-${liIndex}`;

                      return (
                        <li
                          key={liKey}
                          className={`list-${ulKey}-item itemProduct ${
                            liIndex === activeIndex ? "active" : ""
                          }`}
                          onClick={() => handleLiClick(liIndex)}
                        >
                          <div className="imgBlock">
                            <img
                              src={product.image}
                              alt="product"
                              width="30%"
                              height="80%"
                            />
                            <span>{product.name}</span>

                            {liIndex === activeIndex && (
                              <p
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                  navigate(`/details/${product?.id}`)
                                }
                                className="getDeteilsProduct"
                              >
                                Get Details
                              </p>
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
          <div
            className="itemScreen"
            style={{ transform: `translate(${scrollX}px, ${scrollY}px)` }}
          >
            <div style={{ display: "flex", marginLeft: "210px" }}>
              {Array.from({ length: ulsPerRow }).map((_, rowIndex) => (
                <ul
                  key={`${ulKey}-${rowIndex}`}
                  className={`${ulKey} itemListProduct`}
                  style={{
                    width: `calc(100% / ${ulsPerRow})`,
                    height: `calc(100% / ${Math.ceil(
                      totalUlCount / ulsPerRow
                    )})`,
                  }}
                  onMouseDown={handleUlMouseDown}
                  onMouseMove={handleUlMouseMove}
                  onMouseUp={handleUlMouseUp}
                  onMouseLeave={handleUlMouseLeave}
                >
                  {arr
                    .slice()
                    .reverse()
                    .map((id, liIndex) => {
                      const product = products.find((item) => item.id === id);
                      if (product) {
                        const liKey = `li-${ulKey}-${liIndex}`;

                        return (
                          <li
                            key={liKey}
                            className={`list-${ulKey}-item itemProduct ${
                              liIndex === activeIndex ? "active" : ""
                            }`}
                            onClick={() => handleLiClick(liIndex)}
                          >
                            <div className="imgBlock">
                              <img
                                src={product.image}
                                alt="product"
                                width="30%"
                                height="80%"
                              />
                              <span>{product.name}</span>

                              {liIndex === activeIndex && (
                                <p
                                  style={{ cursor: "pointer" }}
                                  onClick={() =>
                                    navigate(`/details/${product?.id}`)
                                  }
                                  className="getDeteilsProduct"
                                >
                                  Get Details
                                </p>
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
        </div>
      )}
    </div>
  );
};

export default MainScreenInlineItem;
