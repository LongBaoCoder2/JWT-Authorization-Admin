import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    allUser: [],
    isLoading: false,
    error: false,
  },
  reducers: {
    getAllUserProcess: (state) => {
      state.isLoading = true;
    },
    getAllUserSuccess: (state, action) => {
      state.isLoading = false;
      state.allUser = action.payload;
      state.error = false;
    },
    getAllUserFail: (state) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const { getAllUserProcess, getAllUserSuccess, getAllUserFail } =
  userSlice.actions;

export default userSlice.reducer;
