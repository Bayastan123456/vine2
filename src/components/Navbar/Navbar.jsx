import React from "react";
import img1 from "./image/image1.png";
const Navbar = () => {
  return (
    <nav>
      <div className="nav_left__side"></div>
      <div className="nav_logo">
        <img src={img1} alt="" />
      </div>
      <div className="nav_right__side"></div>
    </nav>
  );
};

export default Navbar;
