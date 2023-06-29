import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleLogin } from "../../../store/auth/authActions";
import { setEmail, setPassword } from "../../../store/auth/authSlice";

const Login = () => {
  const { email, password, passwordError, emailError } = useSelector(
    (state) => state.auth
  );
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleUser() {
    if (!email.trim() || !password.trim()) {
      setShowError(true);
      return;
    }
    let obj = {
      email,
      password,
      navigate,
    };
    dispatch(handleLogin(obj));
  }
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
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
          />
          {emailError && (
            <p
              style={{
                width: "80%",
                color: "red",
                marginBottom: "10px",
              }}
            >
              {emailError}
            </p>
          )}
          <input
            type="password"
            placeholder="PASSWORD"
            className="modal_inp__all"
            value={password}
            onChange={(e) => dispatch(setPassword(e.target.value))}
          />
        </div>
        {passwordError && (
          <p
            style={{
              width: "80%",
              color: "red",
              marginBottom: "10px",
            }}
          >
            {passwordError}
          </p>
        )}
        {showError ? <p style={{ color: "red" }}>Заполните все поля</p> : <></>}
        <div className="modal_btn">
          <button className="modal_btn__enter" onClick={handleUser}>
            ENTER
          </button>
          <p onClick={() => navigate("/register")}>CREATE IN ACCOUNT</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
