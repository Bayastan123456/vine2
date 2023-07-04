import React from "react";
import "./notFound.css";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="notfound">
        <h2>404</h2>
        <button onClick={() => navigate("/")}>home</button>
      </div>
    </div>
  );
};

export default NotFound;
