import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/HomePage/Home";
import Products from "../pages/ProductPage/Products";
import NotFound from "../pages/NotFoundPage/NotFound";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
    {
      link: "/product",
      element: <Products />,
      id: 2,
    },
    {
      link: "*",
      element: <NotFound />,
      id: 3,
    },
  ];

  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;