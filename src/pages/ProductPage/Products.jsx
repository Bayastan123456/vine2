import React, { useEffect, useState } from "react";
import "../../components/Product/ProductCard/ProductCard";
import ProductCard from "../../components/Product/ProductCard/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../store/products/productAction";
import { useLocation } from "react-router-dom";
import Loaders from "../../components/Loaders/Loaders";

const Products = () => {
  const [search, setSearch] = useState("");
  const { products, loading } = useSelector((state) => state.products);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("all");
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    // const vremennaya = products;
    setData(products);
  }, [products]);

  useEffect(() => {
    if (location.state && location.state.filter) {
      setFilter(location.state.filter);
    }
  }, [location.state]);

  const handleFilter = (sort) => {
    setFilter(sort);
  };

  const filteredData =
    filter === "all" ? data : data.filter((item) => item.sort === filter);
  const searchProduct = filteredData.filter((product) => {
    return product.name.toLowerCase().includes(search.toLowerCase());
  });

  function currentData() {
    return searchProduct;
  }

  if (loading) {
    return <Loaders />;
  }

  return (
    <>
      <div className="productCard_container">
        <h2 id="font_nanum">FRANCIACORTA</h2>
        <div className="productCard_wrapper">
          <div className="sidebar" id="font_pathway">
            <div className="search_inp__block">
              <input
                className="search_inp"
                type="text"
                placeholder="SEARCH WINE"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
            </div>
            <div className="slide_wrapper" onClick={() => handleFilter("all")}>
              <div className="relative">
                <span>ALL</span>
              </div>
              <div className="absolute">
                <span>ALL</span>
              </div>
            </div>
            <div
              className="slide_wrapper"
              onClick={() => handleFilter("GRAPPE")}
            >
              <div className="relative">
                <span>GRAPPE</span>
              </div>
              <div className="absolute">
                <span>GRAPPE</span>
              </div>
            </div>
            <div className="slide_wrapper" onClick={() => handleFilter("Wine")}>
              <div className="relative">
                <span>WINES</span>
              </div>
              <div className="absolute">
                <span>WINES</span>
              </div>
            </div>
            <div
              className="slide_wrapper"
              onClick={() => handleFilter("FRANCIACORTA DOGG")}
            >
              <div className="relative">
                <span>FRANCIACORTA</span>
              </div>
              <div className="absolute">
                <span>FRANCIACORTA</span>
              </div>
            </div>
          </div>
          <ProductCard currentData={currentData} />
        </div>
      </div>
    </>
  );
};

export default Products;
