import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_AUTH } from "../../const";

export const register = createAsyncThunk(
  "@auth/register",
  async ({ formData, navigate }) => {
    try {
      const res = await axios.post(`${API_AUTH}users/`, formData);
      console.log(res);
      navigate("/login");
    } catch (error) {
      console.log(error.response.data);
    }
  }
);

export const activation = createAsyncThunk(
  "@auth/activation",
  async (formData) => {
    try {
      const res = await axios.post(`${API_AUTH}users/activation/`, formData);
      console.log(res);
    } catch (error) {
      console.log(error.response.data);
    }
  }
);
