import React, { useEffect, useState } from "react";
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
import Cart from "../cart/Cart";
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(authListener());
  }, []);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visibleOffset = 100; // Определите необходимое смещение для скрытия/появления навбара

      if (prevScrollPos > currentScrollPos) {
        setIsNavbarVisible(true);
      } else {
        setIsNavbarVisible(false);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <navburg>
      <div className="nav_logo">
          <img className="nav_logo__villa" src={img1} alt="" onClick={()=>navigate("/about")}/>
        </div>
      <div className="nav_burger">
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
          <ul className="nav_burgerList">
            <li className="nav_burgerList_item" onClick={() => navigate("/menu")}>MENU</li>
            <li className="nav_burgerList_item" onClick={() => navigate("/shop")}>SHOP</li>
              {user ? (
                <li
                  className="nav_burgerList_item"
                  onClick={() => {
                    dispatch(handleLogout(navigate));
                    dispatch(clearInputs());
                  }}
                >
                  LOG OUT
                </li>
                ) : (
                  <li
                    className="nav_burgerList_item"
                    onClick={() => {
                      navigate("/login");
                      dispatch(clearInputs());
                    }}
                  >
                    LOG IN
                  </li>
              )}
          </ul>
        </div>
      </navburg>
      <navtop className={`navbar ${isNavbarVisible ? "show" : "hide"}`}>
        <div className="nav_left__side">
          <img
            className="nav_left__glass"
            src={img2}
            alt=""
            onClick={() => navigate("/menu")}
          />
          <img
            className="nav_left__bottle"
            src={img3}
            alt=""
            onClick={() => navigate("/shop")}
          />
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
          <img className="nav_logo__villa" src={img1} alt="" onClick={()=>navigate("/about")}/>
        </div>
        <div className="nav_right__side">
         
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
          <button className="nav_right__btn" id="btn__nav">
            {/* <img className="nav_right_img" src={img5} alt="" /> */}
            <Cart />
          </button>
        </div>
      </navtop>
    </>
  );
};

export default Navbar;
