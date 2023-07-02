import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  email: "",
  password: "",
  emailError: "",
  passwordError: "",
};

const authSlice = createSlice({
  name: "@auth",
  initialState,
  reducers: {
    clearInputs(state, action) {
      state.email = "";
      state.password = "";
    },
    clearErrors(state, action) {
      state.emailError = "";
      state.passwordError = "";
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setEmailError(state, action) {
      state.emailError = action.payload;
    },
    setPasswordError(state, action) {
      state.emailError = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;

export const {
  setEmail,
  setPassword,
  setEmailError,
  setUser,
  setPasswordError,
  clearErrors,
  clearInputs,
} = authSlice.actions;
