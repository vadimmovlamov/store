import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { ROUTE_NAMES } from "../../routes/routeNames";
import logoPokemon from "../../static/img/logoPokemon.png";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          {/*<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>*/}
          {/*  News*/}
          {/*</Typography>*/}

          <div style={{ flexGrow: 1 }}>
            <Link to={ROUTE_NAMES.SHOP}>
              <img style={{ maxWidth: 50, minHeight: 50 }} src={logoPokemon} />
            </Link>
          </div>
          <Button color="inherit">
            <Link style={{ color: "white" }} to={ROUTE_NAMES.SIGN_IN}>
              Login
            </Link>
          </Button>
          <div>|</div>
          <Button color="inherit">
            <Link style={{ color: "white" }} to={ROUTE_NAMES.SIGN_UP}>
              Logout
            </Link>
          </Button>

          <Link style={{ color: "white" }} to={ROUTE_NAMES.BASKET}>
            <ShoppingBasketOutlinedIcon
              style={{ marginLeft: 15, cursor: "pointer" }}
            />
          </Link>

          <AccountCircleIcon style={{ marginLeft: 15, cursor: "pointer" }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
