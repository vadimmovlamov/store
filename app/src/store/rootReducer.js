import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

import authSlice from "../pages/SignIn/redusers";
import pokemonsSlice from "../pages/ShopBox/redusers";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["userInfo", "isAuth"],
};

export const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authSlice),
  pokemons: pokemonsSlice,
});
