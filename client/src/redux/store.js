import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slice/authSlice";
import toastReducer from "./Slice/toastSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    toast: toastReducer,
  },
});

export default store;
