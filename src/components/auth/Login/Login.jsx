import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="mainModal_login">
        <div className="modal_block1">
          <h2 className="modal_h2">LOGIN</h2>
          <button onClick={() => navigate("/")}>x</button>
        </div>
        <div className="modal_inp">
          <input
            type="text"
            placeholder="USERNAME OR EMAIL ADRESS"
            className="modal_inp__all"
          />
          <input
            type="password"
            placeholder="PASSWORD"
            className="modal_inp__all"
          />
        </div>
        <div className="modal_btn">
          <button className="modal_btn__enter">ENTER</button>
          <p onClick={() => navigate("/register")}>CREATE IN ACCOUNT</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
