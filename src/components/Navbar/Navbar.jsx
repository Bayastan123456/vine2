import React, { useEffect } from "react";
import "./Navbar.css";
import img1 from "./image/imageLogo.png";
import img2 from "./image/image2.png";
import img3 from "./image/image3.png";
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
        <button className="nav_right__btn">LO</button>
        <button className="nav_right__btn" onClick={() => navigate("/login")}>
          CT
        </button>
        <button className="nav_right__btn">EN</button>
      </div>
    </nav>
  );
};

export default Navbar;
