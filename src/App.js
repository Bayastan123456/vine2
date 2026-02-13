import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/Navbar/Navbar";
import Footere from "./components/Footer/Footere";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
      <Footere />
    </div>
  );
};

export default App;
