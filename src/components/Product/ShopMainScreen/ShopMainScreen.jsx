import React, { useEffect, useState } from "react";
import MainScreenInlineItem from "../MainScreenInlineItem/MainScreenInlineItem";
import ShopMobile from "./ShopMobile";
import "./ShopMainScreen.css";

const ShopMainScreen = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Disable custom scroll logic for mobile devices
      if (isMobile) return;

      const docWidth = document.documentElement.clientWidth * 5;
      const docHeight = document.documentElement.clientHeight * 3;

      const centerX = docWidth / 2;
      const centerY = docHeight / 2;

      const scrollX = window.scrollX || window.pageXOffset;
      const scrollY = window.scrollY || window.pageYOffset;

      const distanceX = Math.abs(centerX - scrollX);
      const distanceY = Math.abs(centerY - scrollY);

      if (distanceX > 1000 || distanceY > 1000) {
        window.scrollTo(
          centerX - window.innerWidth / 2,
          centerY - window.innerHeight / 2
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  if (isMobile) {
    return <ShopMobile />;
  }

  return (
    <div className="allItem">
      <MainScreenInlineItem />
      <MainScreenInlineItem />
      <MainScreenInlineItem />
    </div>
  );
};

export default ShopMainScreen;
