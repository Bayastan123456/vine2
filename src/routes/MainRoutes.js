import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/HomePage/Home";
import Products from "../pages/ProductPage/Products";
import NotFound from "../pages/NotFoundPage/NotFound";
import Login from "../components/auth/Login/Login";
import Register from "../components/auth/Register/Register";
import ProductDetails from "../components/Product/Details/ProductDetails";
import AdminPage from "../pages/AdminPage";
import { useSelector } from "react-redux";
import { ADMIN } from "../const";
import EditProduct from "../components/Product/EditProduct/EditProduct";
import Menu from "../components/Menu/Menu";
import ShopMainScreen from "../components/Product/ShopMainScreen/ShopMainScreen";
import AboutUs from "../components/AboutUs/AboutUs";
import GenericPage from "../pages/GenericPage/GenericPage";

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
      link: "/details/:id",
      element: <ProductDetails />,
      id: 6,
    },
    {
      link: "/edit/:id",
      element: <EditProduct />,
      id: 7,
    },
    {
      link: "/menu",
      element: <Menu />,
      id: 8,
    },
    {
      link: "/shop",
      element: <ShopMainScreen />,
      id: 9,
    },
    {
      link: "/about",
      element: <AboutUs />,
      id: 10,
    },
    // The Village
    { link: "/winery", element: <GenericPage />, id: 11 },
    { link: "/vineyards", element: <GenericPage />, id: 12 },
    { link: "/villa-gradoni", element: <GenericPage />, id: 13 },
    { link: "/ela-restaurant", element: <GenericPage />, id: 14 },
    // Differently Villa
    { link: "/history", element: <GenericPage />, id: 15 },
    { link: "/values", element: <GenericPage />, id: 16 },
    { link: "/philosophy", element: <GenericPage />, id: 17 },
    { link: "/research", element: <GenericPage />, id: 18 },
    { link: "/family", element: <GenericPage />, id: 19 },
    // Franciacorta
    { link: "/territory", element: <GenericPage />, id: 20 },
    { link: "/method", element: <GenericPage />, id: 21 },
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
        <Route path={item.link} element={item.element} key={item.id}  />
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
