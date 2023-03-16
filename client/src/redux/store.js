import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slice/authSlice";
import toastReducer from "./Slice/toastSlice";
import usersReducer from "./Slice/userSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    toast: toastReducer,
  },
});

export default store;
