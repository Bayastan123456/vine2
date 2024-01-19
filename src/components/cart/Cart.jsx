import React, { useEffect } from "react";
import "./cart.css";
import img from ".././Navbar/image/15.png";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../store/cart/cartSlice";
import { calcSubPrice, calcTotalPrice } from "../function";
import deletSvg from "./delete_FILL0_wght400_GRAD0_opsz48.svg";
const Cart = () => {
  function openNav() {
    document.getElementById("mySidebar").style.width = "400px";
    document.getElementById("main").style.marginLeft = "300px";
  }

  function closeNav() {
    document.getElementById("mySidebar").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
  }
  const dispatch = useDispatch();

  const { products, totalPrice } = useSelector((state) => state.cart.cart || {});
  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({ products: [], totalprice: 0 })
      );
      cart = { products: [], totalPrice: 0 };
    }
    console.log(cart.totalPrice);
    // cart.totalprice = calcTotalPrice(products);
    dispatch(getCart(cart));
  }, []);

  const changeProductCount = (count, id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.products = cart.products.map((product) => {
      if (product.item.id === id) {
        product.count = count;
        product.subPrice = calcSubPrice(product);
      }
      return product;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch(getCart(cart));
  };
  function deleteCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.filter((item) => item.item.id !== id);
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch(getCart(cart));
  }

  return (
    <div>
      <div id="mySidebar" className="sidebar__main">
        <a className="closebtn" onClick={() => closeNav()}>
          ×
        </a>
        <div className="sidebar_box">
          {products?.map((elem) => (
            <div className="box__cart" key={elem.item.id}>
              <img
                className="img__svg-cart"
                src={deletSvg}
                alt=""
                onClick={() => deleteCart(elem.item.id)}
              />
              <img src={elem.item.image} alt="error" />
              <div className="cart__title">
                <h3>{elem.item.name}</h3>
                <p>price: {elem.item.price}$</p>
                <div className="cart__button">
                  <button
                    onClick={() => {
                      if (elem.count === 1) {
                        deleteCart(elem.item.id);
                      } else {
                        changeProductCount(elem.count - 1, elem.item.id);
                      }
                    }}
                  >
                    -
                  </button>
                  <p>{elem.count}</p>
                  <button
                    onClick={() =>
                      changeProductCount(elem.count + 1, elem.item.id)
                    }
                  >
                    +
                  </button>
                </div>
                <div className="total">Total Price €{elem.subPrice}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="total__box">
          <h4>Totale {totalPrice}€</h4>
          <button>go to checkout</button>
        </div>
      </div>

      <div id="main">
        <img
          src={img}
          alt="error"
          className="openbtn"
          onClick={openNav}
          style={{ width: " 20px", height: "20px" }}
        />
      </div>
    </div>
  );
};

export default Cart;
