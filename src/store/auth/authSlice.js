import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  error: "",
};

const authSlice = createSlice({
  name: "@auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;

export const { setUser, setError } = authSlice.actions;
