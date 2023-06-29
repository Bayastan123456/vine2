import React, { useState } from "react";
import "../Login/Login.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleSignUp } from "../../../store/auth/authActions";
import { setEmail, setPassword } from "../../../store/auth/authSlice";

const Register = () => {
  const { email, password, emailError, passwordError } = useSelector(
    (state) => state.auth
  );
  console.log(emailError);
  const [showError, setShowError] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!email.trim() || !password.trim()) {
      setShowError(true);
      return;
    }
    let obj = {
      email,
      password,
      navigate,
    };
    dispatch(handleSignUp(obj));
    navigate();
  };

  return (
    <div className="container">
      <div className="mainModal_login">
        <div className="modal_block1">
          <h2 className="modal_h2">Register</h2>
          <button onClick={() => navigate("/")}>x</button>
        </div>
        <div className="modal_inp">
          <input
            type="text"
            placeholder="USERNAME"
            className="modal_inp__all"
          />
          <input
            type="text"
            placeholder="EMAIL ADRESS"
            className="modal_inp__all"
            onChange={(e) => dispatch(setEmail(e.target.value))}
            value={email}
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
            onChange={(e) => dispatch(setPassword(e.target.value))}
            value={password}
          />
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
          {showError ? (
            <p style={{ color: "red" }}>Заполните все поля</p>
          ) : (
            <></>
          )}
        </div>
        <div className="modal_btn">
          <button className="modal_btn__enter" onClick={handleSubmit}>
            ENTER
          </button>
          <p>FORGOT PASSWORD</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
