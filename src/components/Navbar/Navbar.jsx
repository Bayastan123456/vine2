import React, { useEffect } from "react";
import "./Navbar.css";
import img1 from "./image/imageLogo.png";
import img2 from "./image/14.png";
import img3 from "./image/17.png";
import img4 from "./image/16.png";
import img5 from "./image/15.png";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  //   useEffect(() => {}, []);
  const navigate = useNavigate();

  return (
    <nav>
      <div className="nav_left__side">
        <img className="nav_left__glass" src={img2} alt="" />
        <img className="nav_left__bottle" src={img3} alt="" />
      </div>
      <div className="nav_logo">
        <img className="nav_logo__villa" src={img1} alt="" />
      </div>
      <div className="nav_right__side">
        <button className="nav_right__btn">SE</button>
        <button className="nav_right__btn" onClick={() => navigate("/login")}>
          <img className="nav_right_img" src={img4} alt="" />
        </button>
        <button className="nav_right__btn">
          <img className="nav_right_img" src={img5} alt="" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
