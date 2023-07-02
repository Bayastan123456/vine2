import React, { useEffect } from "react";
import "./Navbar.css";
import img1 from "./image/imageLogo.png";
import img2 from "./image/14.png";
import img3 from "./image/17.png";
import img4 from "./image/16.png";
import img5 from "./image/15.png";
import img6 from "./image/shield_person_FILL1_wght400_GRAD0_opsz48.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authListener, handleLogout } from "../../store/auth/authActions";
import { clearInputs } from "../../store/auth/authSlice";
import { ADMIN } from "../../const";
const Navbar = () => {
  //   useEffect(() => {}, []);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(authListener());
  }, []);

  return (
    <nav>
      <div className="nav_left__side">
        <img className="nav_left__glass" src={img2} alt="" />
        <img className="nav_left__bottle" src={img3} alt="" />
        {user === ADMIN ? (
          <img
            className="nav_right__bottle"
            src={img6}
            alt="error"
            onClick={() => navigate("/admin")}
          />
        ) : (
          <></>
        )}
      </div>
      <div className="nav_logo">
        <img className="nav_logo__villa" src={img1} alt="" />
      </div>
      <div className="nav_right__side">
        <button className="nav_right__btn">SE</button>
        {user ? (
          <button
            className="nav_right__btn"
            onClick={() => {
              dispatch(handleLogout(navigate));
              dispatch(clearInputs());
            }}
          >
            <img className="nav_right_img" src={img4} alt="" />
          </button>
        ) : (
          <button
            className="nav_right__btn"
            onClick={() => {
              navigate("/login");
              dispatch(clearInputs());
            }}
          >
            <img className="nav_right_img" src={img4} alt="" />
          </button>
        )}
        <button className="nav_right__btn">
          <img className="nav_right_img" src={img5} alt="" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
