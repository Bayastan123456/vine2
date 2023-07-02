import React, { useEffect, useRef, useState } from "react";
import "./ProductDetails.css";
import image1 from "./image/11.png";
import image2 from "./image/2.png";
import image3 from "./image/3.png";
import image6 from "./image/6.png";
import image7 from "./image/7.png";
import image8 from "./image/8.png";
import image9 from "./image/9.png";
import { useDispatch, useSelector } from "react-redux";
import { ADMIN } from "../../../const";
import { useNavigate, useParams } from "react-router-dom";
import { getOneProduct } from "../../../store/products/productAction";
import { calcTotalPrice } from "../../function";
import { getCart } from "../../../store/cart/cartSlice";

const ProductDetails = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const { user } = useSelector((state) => state.auth);

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { oneProduct } = useSelector((state) => state.products);
  const [checkProduct, setCheckProduct] = useState(false);

  useEffect(() => {
    dispatch(getOneProduct(id));
  }, [id]);
  console.log(oneProduct);

  useEffect(() => {
    const handleScroll = () => {
      const top = ref.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top < windowHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const addProductToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price,
    };

    let productToFind = cart.products.filter(
      (elem) => elem.item.id === product.id
    );

    if (productToFind.length == 0) {
      cart.products.push(newProduct);
    } else {
      cart.products = cart.products.filter(
        (elem) => elem.item.id !== product.id
      );
    }

    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));

    setCheckProduct((prev) => !prev);
    dispatch(getCart(cart.products));
  };

  return (
    <>
      <>
        <div className="glav__datail">
          <div className="box1__detail">
            <div className="details__box-title">
              <img className="details__img" src={oneProduct.image} alt="vino" />
              <h3 className="details__title">{oneProduct.name}</h3>
            </div>
          </div>
          <div className="box2__detail">
            <div
              className={`box2__detail-Right ${isVisible ? "show" : ""}`}
              ref={ref}
            >
              <h4>
                {oneProduct.sort}
                <img className="imgDetails" src={image6} alt="error" />
              </h4>
              <h4>
                {oneProduct.descr}
                <img className="imgDetails" src={image7} alt="error" />
              </h4>
              <h4>
                100%
                <img className="imgDetails" src={image3} alt="error" />
              </h4>
            </div>
            <div
              className={`box2__detail-Left ${isVisible ? "show" : ""}`}
              ref={ref}
            >
              <h4>
                <img className="imgDetails" src={image1} alt="error" />
                ROSSO
              </h4>
              <h4>
                <img className="imgDetails" src={image3} alt="error" />
                ALCOOL 14.5%
              </h4>
              <h4>
                <img className="imgDetails" src={image2} alt="error" />
                AFFINAMENTO 42 MESI IN BOTTIGLIA
              </h4>
              <h4>
                <img className="imgDetails" src={image3} alt="error" />
                ALCOOL 14.5%
              </h4>

              <h4>
                <img className="imgDetails" src={image8} alt="error" />
                AFFINAMENTO IN BOTTE 36 MESI
              </h4>
              <h4>
                <img className="imgDetails" src={image9} alt="error" />
                PRIMA FERMENTAZIONE 42 MESI IN BARRIQUE
              </h4>
            </div>
          </div>
        </div>
        <div className="glav2__detail">
          <div className="title__detail2">
            <h3>BIANCHI RONCALLI 2015</h3>
            <p>SEBINO IGT </p>
          </div>
          <div className="glav2__descr">
            <p>
              The name Bianchi Roncalli originates from the patrons of the Villa
              company, Alessandro Bianchi and his wife Ivonne Roncalli. Thanks
              to the excellent quality of the Barbera grape in the 2007 vintage,
              the intuition of vinifying this native vine in purity was born,
              for the first time in the history of the company.
            </p>
            <span>
              The result is an intense ruby red wine of great class, capable of
              surprising thanks to the heady scent of red fruit and sweet
              spices.
            </span>
          </div>
          <div className="main_btn">
            {user !== ADMIN ? (
              <div className="btn__containerGlav">
                <div className="container__btn">
                  <div className="center__btn">
                    <button className="btn" onClick={addProductToCart}>
                      <svg
                        className="border"
                        viewBox="0 0 180 60"
                        height="60px"
                        width="180px"
                      >
                        <polyline
                          className="bg-line"
                          points="179,1 179,59 1,59 1,1 179,1"
                        ></polyline>
                        <polyline
                          className="hl-line"
                          points="179,1 179,59 1,59 1,1 179,1"
                        ></polyline>
                      </svg>
                      <span>Buy</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="btn__containerGlav">
                  <div className="container__btn">
                    <div className="center__btn">
                      <button className="btn">
                        <svg
                          className="border"
                          viewBox="0 0 180 60"
                          height="60px"
                          width="180px"
                        >
                          <polyline
                            className="bg-line"
                            points="179,1 179,59 1,59 1,1 179,1"
                          ></polyline>
                          <polyline
                            className="hl-line"
                            points="179,1 179,59 1,59 1,1 179,1"
                          ></polyline>
                        </svg>
                        <span onClick={() => navigate("/details/:id")}>
                          Edit
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="btn__containerGlav">
                  <div className="container__btn">
                    <div className="center__btn">
                      <button className="btn">
                        <svg
                          className="border"
                          viewBox="0 0 180 60"
                          height="60px"
                          width="180px"
                        >
                          <polyline
                            className="bg-line"
                            points="179,1 179,59 1,59 1,1 179,1"
                          ></polyline>
                          <polyline
                            className="hl-line"
                            points="179,1 179,59 1,59 1,1 179,1"
                          ></polyline>
                        </svg>
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </>
    </>
  );
};

export default ProductDetails;
