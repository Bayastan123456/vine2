import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../const";

export const getProducts = createAsyncThunk(
  "@products/getProducts",
  async () => {
    let { data } = await axios(API);
    return data;
  }
);
export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (obj, { dispatch }) => {
    await axios.post(API, obj);
    dispatch(getProducts());
    return obj;
  }
);

export const getOneProduct = createAsyncThunk(
  "products/getOneProducts",
  async (id) => {
    let { data } = await axios(`${API}/${id}`);
    return data;
  }
);
export const editedOneProduct = createAsyncThunk(
  "products/editedOneProduct",
  async (editedObj, { dispatch }) => {
    await axios.patch(`${API}/${editedObj.id}`, editedOneProduct);
    dispatch(getProducts());
    console.log(editedObj);
  }
);
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id, { dispatch }) => {
    await axios.delete(`${API}/${id}`);
    dispatch(getOneProduct());
  }
);
