import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/HomePage/Home";
import Products from "../pages/ProductPage/Products";
import NotFound from "../pages/NotFoundPage/NotFound";
import Login from "../components/auth/Login/Login";
import Register from "../components/auth/Register/Register";
import Activation from "../components/auth/Activation/Activation";
import ProductDetails from "../components/Product/Details/ProductDetails";
import AdminPage from "../pages/AdminPage";
import { useSelector } from "react-redux";
import { ADMIN } from "../const";
import EditProduct from "../components/Product/EditProduct/EditProduct";
import Menu from "../components/Menu/Menu";

const MainRoutes = () => {
  const { user } = useSelector((state) => state.auth);
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
      link: "/details/:id",
      element: <ProductDetails />,
      id: 7,
    },
    {
      link: "/edit/:id",
      element: <EditProduct />,
      id: 8,
    },
    {
      link: "/menu",
      element: <Menu />,
      id: 9,
    },
  ];

  const PRIVATE__ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
  ];

  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
      {user &&
        PRIVATE__ROUTES.map((item) => (
          <Route
            path={item.link}
            element={
              user === ADMIN ? item.element : <Navigate replace to="*" />
            }
            key={item.id}
          />
        ))}
    </Routes>
  );
};

export default MainRoutes;
