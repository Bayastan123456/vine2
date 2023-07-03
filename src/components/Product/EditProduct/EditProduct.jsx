import React, { useState, useEffect } from "react";

import "../../Admin/Admin.css";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate, useParams } from "react-router-dom";
import {
  editedOneProduct,
  getOneProduct,
} from "../../../store/products/productAction";

const EditProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { oneProduct } = useSelector((state) => state.products);

  const [name, setName] = useState(oneProduct.name);
  const [image, setImage] = useState(oneProduct.image);
  const [sort, setSort] = useState(oneProduct.sort);
  const [descr, setDescr] = useState(oneProduct.descr);
  const [price, setPrice] = useState(oneProduct.price);
  //   const [vid, setVid] = useState("");
  //   const [percent, setPercent] = useState("");
  //   const [ref, setRef] = useState("");
  //   const [stain, setStain] = useState("");
  //   const [char, setChar] = useState("");
  //   const [franc, setFranc] = useState("");

  useEffect(() => {
    dispatch(getOneProduct(id));
  }, [id]);

  useEffect(() => {
    setName(oneProduct.name);
    setImage(oneProduct.image);
    setPrice(oneProduct.price);
    setDescr(oneProduct.descr);
    setSort(oneProduct.sort);
  }, [oneProduct]);
  function handleEditProduct() {
    if (!name || !image || !sort || !descr || !price) {
      alert("fill in the field");
      return;
    }
    let editedobj = {
      name,
      image,
      sort,
      descr,
      price,
      id: oneProduct.id,
      //   vid,
      //   percent,
      //   ref,
      //   stain,
      //   char,
      //   franc,
    };
    dispatch(editedOneProduct(editedobj));
    // navigate(`/details/${oneProduct.id}`);
    navigate("/product");
  }

  return (
    <div className="admin__box">
      <div className="admin__container">
        <h2>ADMIN</h2>
        <div className="admin__input">
          <div className="right__boxAdmin">
            <input
              placeholder="name"
              className="input__admin"
              name="text"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              placeholder="image"
              className="input__admin"
              name="text"
              type="text"
              onChange={(e) => setImage(e.target.value)}
              value={image}
            />
            <input
              placeholder="sort"
              className="input__admin"
              name="text"
              type="text"
              onChange={(e) => setSort(e.target.value)}
              value={sort}
            />
            <input
              placeholder="description"
              className="input__admin"
              name="text"
              type="text"
              onChange={(e) => setDescr(e.target.value)}
              value={descr}
            />
            <input
              placeholder="price"
              className="input__admin"
              name="text"
              type="number"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
            {/* <input
              placeholder="vid"
              className="input__admin"
              name="text"
              type="text"
              onChange={(e) => setVid(e.target.value)}
              value={vid}
            /> */}
          </div>
          {/* <div className="left__boxAdmin"> 
            <input
              placeholder="percent"
              className="input__admin"
              name="text"
              type="text"
              onChange={(e) => setPercent(e.target.value)}
              value={percent}
            />
            <input
              placeholder="REFINEMENT (выдержка)"
              className="input__admin"
              name="text"
              type="text"
              onChange={(e) => setRef(e.target.value)}
              value={ref}
            />
            <input
              placeholder="STAINLESS"
              className="input__admin"
              name="text"
              type="text"
              onChange={(e) => setStain(e.target.value)}
              value={stain}
            />
            <input
              placeholder="CHARDONNAY"
              className="input__admin"
              name="text"
              type="text"
              onChange={(e) => setChar(e.target.value)}
              value={char}
            />
            <input
              placeholder="FRANCIACORTA"
              className="input__admin"
              name="text"
              type="text"
              onChange={(e) => setFranc(e.target.value)}
              value={franc}
            />
          </div> */}
        </div>
        <button className="btn__admin" onClick={handleEditProduct}>
          <span class="box__admin">Save</span>
        </button>
      </div>
    </div>
  );
};

export default EditProduct;
