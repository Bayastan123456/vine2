import React, { useState, useEffect, useMemo } from "react";
import "./MainScreenInlineItem.css";
import img from "../../../images/Diamant-2018-300.png";

const MainScreenInlineItem = () => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  const arr = useMemo(
    () => [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30,
    ],
    []
  );
  const totalUlCount = useMemo(() => Math.ceil(arr.length / 5), [arr]);
  const ulsPerRow = 4;

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
        className="itemScreenSecond"
      >
        {Array.from({ length: totalUlCount }).map((_, index) => {
          const startIndex = index * 5;
          const endIndex = startIndex + 5;
          const subArr = arr.slice(startIndex, endIndex);

          return (
            <React.Fragment key={index}>
              {Array.from({ length: ulsPerRow }).map((_, repetitionIndex) => (
                <ul
                  key={`${index}-${repetitionIndex}`}
                  style={{ flex: `0 0 calc(100% / ${ulsPerRow})` }}
                  onMouseDown={handleUlMouseDown}
                  onMouseMove={handleUlMouseMove}
                  onMouseUp={handleUlMouseUp}
                  onMouseLeave={handleUlMouseLeave}
                >
                  {subArr.map((e, i) => (
                    <li
                      key={e}
                      className={activeIndex === startIndex + i ? "active" : ""}
                      onClick={() => handleLiClick(startIndex + i)}
                    >
                      <div className="imgBlock">
                        <img src={img} alt="#" width="30%" height="80%" />
                        <span>Diamant</span>
                      </div>
                    </li>
                  ))}
                </ul>
              ))}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default MainScreenInlineItem;
