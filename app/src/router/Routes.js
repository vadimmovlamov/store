import { Route, Routes } from "react-router-dom";
import { ROUTE_NAMES } from "./routeNames";

import Home from "../pages/Home";
import SignInContainer from "../pages/SignIn/container/SignInContainer";
import SignUpContainer from "../pages/SignUp/container/SignUpContainer";
import UsersContainer from "../pages/Users/container/UsersContainer";
import BoxContainer from "../pages/ShopBox/container/BoxContainer";
import GoodsContainer from "../pages/Goods/container/GoodsContainer";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<Home />} />
      <Route path={ROUTE_NAMES.SIGN_IN} element={<SignInContainer />} />
      <Route path={ROUTE_NAMES.SIGN_UP} element={<SignUpContainer />} />
      <Route path={ROUTE_NAMES.USERS} element={<UsersContainer />} />
      <Route path={ROUTE_NAMES.SHOP_BOX} element={<BoxContainer />} />
      {/*<Route element={<PrivateRoutes />}>*/}
      {/*  <Route path={ROUTE_NAMES.SHOP_BOX} element={<BoxContainer />} />*/}
      {/*</Route>*/}
      <Route path={ROUTE_NAMES.GOODS} element={<GoodsContainer />} />
    </Routes>
  );
};

export default Router;
