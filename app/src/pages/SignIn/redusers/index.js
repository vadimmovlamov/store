import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  token: null,
  email: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {},
});

export default authSlice.reducer;
