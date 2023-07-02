import React from "react";
import "./cart.css";
import img from ".././Navbar/image/15.png";
import { useSelector } from "react-redux";
const Cart = () => {
  function openNav() {
    document.getElementById("mySidebar").style.width = "400px";
    document.getElementById("main").style.marginLeft = "300px";
  }

  function closeNav() {
    document.getElementById("mySidebar").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
  }
  const { products, totalPrice } = useSelector((state) => state.cart);
  // console.log(products);
  return (
    <div>
      <div id="mySidebar" className="sidebar">
        <a className="closebtn" onClick={() => closeNav()}>
          ×
        </a>
        <div className="box__cart">
          <img
            src="	https://www.villafranciacorta.it/ecommerce/wp-content/uploads/2022/11/Bianchi-Roncalli-2015.png"
            alt="error"
          />
          <div className="cart__title">
            <h3>Name</h3>
            <p>price: 50$</p>
            <div className="cart__button">
              <button>-</button>
              <p>0</p>
              <button>+</button>
            </div>
            <div className="total">SUBTOTALE € 31.50</div>
          </div>
        </div>
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
