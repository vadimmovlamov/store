import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../pages/SignIn/redusers";

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});
