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
    getAllUserSuccess: (state) => {
      state.isLoading = true;
    },
    getAllUserFail: (state) => {
      state.isLoading = true;
    },
  },
});

export default userSlice.reducer;
