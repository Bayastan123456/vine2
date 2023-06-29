import React, { useState } from "react";
import "../Login/Login.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../../store/auth/authActions";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!email.trim() || !username.trim() || !password.trim()) {
      alert("Заполните поля!!!");
      return;
    }
    let formData = new FormData();
    formData.append("email", email);
    formData.append("username", username);
    formData.append("password", password);
    dispatch(register({ formData, navigate }));
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
          />
          <input
            type="password"
            placeholder="PASSWORD"
            className="modal_inp__all"
          />
        </div>
        <div className="modal_btn">
          <button className="modal_btn__enter">ENTER</button>
          <p>FORGOT PASSWORD</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
