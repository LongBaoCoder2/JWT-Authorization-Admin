const { createSlice } = require("@reduxjs/toolkit");

const toastSlice = createSlice({
  name: "toast",
  initialState: {
    type: "",
    isOpen: false,
    isClose: true,
    message: "",
  },
  reducers: {
    openToast: (state, action) => {
      state.type = action.payload.type;
      state.isOpen = true;
      state.isClose = false;
      state.message = action.payload.message;
    },
    closeToast: (state) => {
      state.type = "";
      state.isOpen = false;
      state.isClose = true;
      state.message = "";
    },
  },
});

export default toastSlice.reducer;

export const { openToast, closeToast } = toastSlice.actions;
