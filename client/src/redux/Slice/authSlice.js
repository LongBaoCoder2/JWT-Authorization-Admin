import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      currentUser: null,
      isAuthentication: localStorage.getItem("isAuth") ? true : false,
      error: false,
      isLoading: false,
    },
    register: {
      error: false,
      isLoading: false,
    },
    logout: {
      error: false,
      isLoading: false,
    },
  },
  reducers: {
    loginProcess: (state) => {
      state.login.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.login.isLoading = false;
      state.login.currentUser = action.payload;
      state.login.error = false;
      localStorage.setItem("isAuth", action.payload._id);
    },
    loginFail: (state) => {
      state.login.isLoading = false;
      state.login.error = true;
    },
    registerProcess: (state) => {
      state.register.isLoading = true;
    },
    registerSuccess: (state) => {
      state.register.isLoading = false;
      state.register.error = false;
    },
    registerFail: (state) => {
      state.register.isLoading = false;
      state.register.error = true;
    },
    logoutProcess: (state) => {
      state.logout.isLoading = true;
    },
    logoutFail: (state) => {
      state.logout.isLoading = false;
      state.logout.error = true;
    },
    logoutSuccess: (state) => {
      state.logout.isLoading = false;
      state.logout.error = false;
      localStorage.removeItem("isAuth");
    },
  },
});

export const {
  loginProcess,
  loginSuccess,
  loginFail,
  registerProcess,
  registerSuccess,
  registerFail,
  logoutProcess,
  logoutSuccess,
  logoutFail,
} = authSlice.actions;

export default authSlice.reducer;
