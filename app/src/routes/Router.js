import { Route, Routes } from "react-router-dom";

import { ROUTE_NAMES } from "./routeNames";

import HomeContainer from "../pages/Home/containers/HomeContainer";
import SignUpContainer from "../pages/SignUp/containers/SignUpContainer";
import SignInContainer from "../pages/SignIn/containers/SignInContainer";
import ShopContainer from "../pages/Shop/containers/ShopContainer";
import ProductDetailsContainer from "../pages/PokemonDetails/containers/ProductDetailsContainer";
import ProfileContainer from "../pages/Profile/containers/ProfileContainer";
import CartContainer from "../pages/Cart/containers/CartContainer";
import PrivateRoutes from "./PrivateRoutes";
import BasketContainer from "../pages/Basket/container/BasketContainer";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<HomeContainer />} />
      <Route path={ROUTE_NAMES.SIGN_UP} element={<SignUpContainer />} />
      <Route path={ROUTE_NAMES.SIGN_IN} element={<SignInContainer />} />
      <Route element={<PrivateRoutes />}>
        <Route path={ROUTE_NAMES.SHOP} element={<ShopContainer />} />
        <Route path={ROUTE_NAMES.PROFILE} element={<ProfileContainer />} />
        <Route
          path={ROUTE_NAMES.POKEMON_DETAILS}
          element={<ProductDetailsContainer />}
        />
      </Route>
      <Route path={ROUTE_NAMES.CART} element={<CartContainer />} />
      <Route path={ROUTE_NAMES.BASKET} element={<BasketContainer />} />
    </Routes>
  );
};

export default Router;
