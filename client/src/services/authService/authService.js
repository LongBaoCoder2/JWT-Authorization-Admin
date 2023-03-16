import {
  loginFail,
  loginProcess,
  loginSuccess,
  logoutFail,
  logoutProcess,
  logoutSuccess,
  registerFail,
  registerProcess,
  registerSuccess,
} from "../../redux/Slice/authSlice";
import { openToast, closeToast } from "../../redux/Slice/toastSlice";

import axios from "../api/axiosClient";

// Login request
export const loginRequest = async (user, dispatch, navigate) => {
  const { username, password } = user;
  dispatch(loginProcess());
  try {
    const res = await axios.post("/auth/login", {
      username,
      password,
    });
    dispatch(loginSuccess(res.data.user));
    navigate("/");

    // Toast controll
    dispatch(openToast({ type: "success", message: "Now return your home" }));
    setTimeout(() => {
      dispatch(closeToast());
    }, 5000);
  } catch (err) {
    dispatch(loginFail());
    dispatch(openToast({ type: "fail", message: "Try again" }));
    setTimeout(() => {
      dispatch(closeToast());
    }, 5000);
  }
};

// Register Request
export const registerRequest = async (user, dispatch, navigate) => {
  const { username, email, password } = user;
  dispatch(registerProcess());
  try {
    await axios.post("/auth/register", {
      username,
      email,
      password,
    });
    dispatch(registerSuccess());
    navigate("/login");

    // Toast controller
    dispatch(
      openToast({ type: "success", message: "Now login to access your home" })
    );
    setTimeout(() => {
      dispatch(closeToast());
    }, 5000);
  } catch (err) {
    dispatch(registerFail());
    dispatch(openToast({ type: "fail", message: "Try again" }));
    setTimeout(() => {
      dispatch(closeToast());
    }, 5000);
  }
};

export const logoutRequest = async (dispatch, navigate) => {
  dispatch(logoutProcess());
  try {
    const res = await axios.post("/auth/logout");
    console.log(res);
    dispatch(logoutSuccess());
    navigate("/login");
  } catch (err) {
    dispatch(logoutFail());
  }
};
