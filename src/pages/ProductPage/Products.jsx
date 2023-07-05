import React, { useEffect, useState } from "react";
import "../../components/Product/ProductCard/ProductCard";
import ProductCard from "../../components/Product/ProductCard/ProductCard";
import { useSelector } from "react-redux";
import { current } from "@reduxjs/toolkit";
import { Box, Pagination } from "@mui/material";

const Products = () => {
  const [search, setSearch] = useState("");
  const { products } = useSelector((state) => state.products);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    // const vremennaya = products;
    setData(products);
  }, [products]);

  const handleFilter = (sort) => {
    setFilter(sort);
  };

  const filteredData =
    filter === "all" ? data : data.filter((item) => item.sort === filter);
  console.log(filteredData);
  const searchProduct = filteredData.filter((product) => {
    return product.name.toLowerCase().includes(search.toLowerCase());
  });

  const [page, setPage] = useState(1);
  const itemPage = 4;
  const count = Math.ceil(searchProduct.length / itemPage);

  function currentData() {
    const begin = (page - 1) * itemPage;
    const end = begin + itemPage;
    return searchProduct.slice(begin, end);
  }

  const handleChange = (_, page) => {
    setPage(page);
  };

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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "0 auto 2%",
          background: "none",
          width: "100%",
          marginTop: "100vh",
          color: 'white'
        }}
      >
        <Box sx={{width:"fit-content", borderRadius:"20px", background: "rgba(255, 255, 255, 0.5)"}}>
          <Pagination
            color="primary"
            count={count}
            page={page}
            onChange={handleChange}
          />
        </Box>
      </Box>
    </>
  );
};

export default Products;
