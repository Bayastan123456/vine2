import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/HomePage/Home";
import Products from "../pages/ProductPage/Products";
import NotFound from "../pages/NotFoundPage/NotFound";
import Login from "../components/auth/Login/Login";
import Register from "../components/auth/Register/Register";
import Activation from "../components/auth/Activation/Activation";
import ProductDetails from "../components/Product/Details/ProductDetails";
import AdminPage from "../pages/AdminPage";

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
    {
      link: "/login",
      element: <Login />,
      id: 4,
    },
    {
      link: "/register",
      element: <Register />,
      id: 5,
    },
    {
      link: "/activation",
      element: <Activation />,
      id: 6,
    },
    {
      link: "/details",
      element: <ProductDetails />,
      id: 7,
    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: 8,
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
