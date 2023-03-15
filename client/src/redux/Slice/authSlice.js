import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      currentUser: null,
      error: false,
      isLoading: false,
    },
    register: {
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
  },
});

export const {
  loginProcess,
  loginSuccess,
  loginFail,
  registerProcess,
  registerSuccess,
  registerFail,
} = authSlice.actions;

export default authSlice.reducer;
