import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/Navbar/Navbar";
import ProductDetails from "./components/Product/Details/ProductDetails";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;
