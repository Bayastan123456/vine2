import React, { useEffect } from "react";
import "./cart.css";
import img from ".././Navbar/image/15.png";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../store/cart/cartSlice";
import { calcTotalPrice } from "../function";
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
  const { products, totalprice } = useSelector((state) => state.cart.cart);

  console.log(products);

  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({ products: [], totalprice: 0 })
      );
      cart = { products: [], totalprice: 0 };
    }
    cart.totalprice = calcTotalPrice(products);
    dispatch(getCart(cart));
  }, []);

  return (
    <div>
      <div id="mySidebar" className="sidebar">
        <a className="closebtn" onClick={() => closeNav()}>
          ×
        </a>
        {products?.map((elem) => (
          <div className="box__cart">
            <img src={elem.item.image} alt="error" />
            <div className="cart__title">
              <h3>{elem.item.name}</h3>
              <p>price: {elem.item.price}$</p>
              <div className="cart__button">
                <button>-</button>
                <p>0</p>
                <button>+</button>
              </div>
              <div className="total">SUBTOTALE € 31.50</div>
            </div>
          </div>
        ))}
        <div className="total__box">
          <h4>Totale 856,50 €</h4>
          <button>go to checkout</button>
        </div>
      </div>

      <div id="main">
        <img
          src={img}
          alt=""
          className="openbtn"
          onClick={openNav}
          style={{ width: " 20px", height: "20px" }}
        />
      </div>
    </div>
  );
};

export default Cart;
